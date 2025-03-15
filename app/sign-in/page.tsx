"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { WorldIDVerification } from "@/components/world-id-verification"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Info } from "lucide-react"
import { signIn, supabase } from "@/lib/supabase"

// Mock user credentials for demo purposes
const mockUsers = [
  {
    type: "freelancer",
    email: "john.doe@example.com",
    password: "password123",
    name: "John Doe",
    id: "1",
    avatar: "/placeholder.svg?height=40&width=40&text=JD",
  },
  {
    type: "client",
    email: "techevents@example.com",
    password: "password123",
    name: "TechEvents Inc.",
    id: "1",
    avatar: "/placeholder.svg?height=40&width=40&text=TE",
  },
]

export default function SignInPage() {
  const router = useRouter()
  const [needsVerification, setNeedsVerification] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [worldIdHash, setWorldIdHash] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [showMockCredentials, setShowMockCredentials] = useState(false)
  const [userType, setUserType] = useState<"freelancer" | "client">("freelancer")

  const handleVerificationSuccess = (hash: string) => {
    setWorldIdHash(hash)
    setIsVerified(true)
    
    // After verification, complete the sign-in process
    completeSignIn();
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess(false)

    // Check if using mock credentials
    const mockUser = mockUsers.find((user) => user.type === userType && user.email === email && user.password === password)

    if (mockUser) {
      setSuccess(true)
      // Simulate loading
      setTimeout(() => {
        if (mockUser.type === "freelancer") {
          router.push(`/freelancer-profile/${mockUser.id}`)
        } else {
          router.push(`/client-profile/${mockUser.id}`)
        }
      }, 1500)
      return;
    }

    // For real users, first try to sign in
    try {
      const result = await signIn(email, password)
      
      if (result.error) throw result.error
      
      if (result.data?.user) {
        // Check if user has verified with WorldID
        if (!supabase) {
          setError("Supabase client not available");
          return;
        }
        
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('worldcoin_verified, user_type')
          .eq('id', result.data.user.id)
          .single();
          
        if (profileError) throw profileError
        
        if (!profileData?.worldcoin_verified) {
          // User needs to verify with WorldID
          setNeedsVerification(true)
        } else {
          // User is already verified, proceed to dashboard
          setSuccess(true)
          
          // Force a page reload to ensure authentication state is updated
          setTimeout(() => {
            if (profileData.user_type === "freelancer") {
              window.location.href = `/freelancer-profile/${result.data.user.id}`;
            } else {
              window.location.href = `/client-profile/${result.data.user.id}`;
            }
          }, 1500)
        }
      }
    } catch (err: unknown) {
      const error = err as { message?: string }
      setError(error.message || "An error occurred during sign in")
    }
  }
  
  const completeSignIn = async () => {
    if (!isVerified || !worldIdHash) {
      setError("World ID verification required");
      return;
    }
    
    try {
      // Update the user's profile with the verification hash
      if (!supabase) {
        setError("Supabase client not available");
        return;
      }
      
      const { data: userData } = await supabase.auth.getUser();
      
      if (!userData?.user) {
        setError("User not found");
        return;
      }
      
      const { error: updateError } = await supabase
        .from('profiles')
        .update({
          worldcoin_verified: true,
          worldcoin_hash: worldIdHash
        })
        .eq('id', userData.user.id);
        
      if (updateError) throw updateError
      
      // Get user type to redirect to the right profile
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('user_type')
        .eq('id', userData.user.id)
        .single();
        
      if (profileError) throw profileError
      
      setSuccess(true)
      setTimeout(() => {
        if (profileData.user_type === "freelancer") {
          router.push(`/freelancer-profile/${userData.user.id}`)
        } else {
          router.push(`/client-profile/${userData.user.id}`)
        }
      }, 1500)
    } catch (err: unknown) {
      const error = err as { message?: string }
      setError(error.message || "An error occurred while completing sign in")
    }
  }

  const fillMockCredentials = (type: "freelancer" | "client") => {
    const user = mockUsers.find((user) => user.type === type)
    if (user) {
      setEmail(user.email)
      setPassword(user.password)
      setUserType(type)
    }
  }

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign in to your account</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          {!needsVerification ? (
            <div className="space-y-4">
              {error && (
                <Alert variant="destructive" className="mb-4">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {success && (
                <Alert className="mb-4 border-green-500 text-green-500">
                  <CheckCircle className="h-4 w-4" />
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>Redirecting to your profile...</AlertDescription>
                </Alert>
              )}

              {showMockCredentials && (
                <Tabs
                  defaultValue="freelancer"
                  onValueChange={(value) => fillMockCredentials(value as "freelancer" | "client")}
                >
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="freelancer">Freelancer</TabsTrigger>
                    <TabsTrigger value="client">Client</TabsTrigger>
                  </TabsList>
                  <TabsContent value="freelancer">
                    <div className="bg-muted/50 p-3 rounded-lg mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Info className="h-4 w-4 text-muted-foreground" />
                        <p className="text-sm font-medium">Freelancer Credentials</p>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">Email: john.doe@example.com</p>
                      <p className="text-sm text-muted-foreground">Password: password123</p>
                    </div>
                  </TabsContent>
                  <TabsContent value="client">
                    <div className="bg-muted/50 p-3 rounded-lg mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Info className="h-4 w-4 text-muted-foreground" />
                        <p className="text-sm font-medium">Client Credentials</p>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">Email: techevents@example.com</p>
                      <p className="text-sm text-muted-foreground">Password: password123</p>
                    </div>
                  </TabsContent>
                </Tabs>
              )}

              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={success}>
                  {success ? "Signing in..." : "Sign In"}
                </Button>
              </form>

              {!showMockCredentials && (
                <Button
                  variant="ghost"
                  className="w-full text-sm text-muted-foreground mt-2"
                  onClick={() => setShowMockCredentials(true)}
                >
                  Use demo credentials
                </Button>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-center space-y-2">
                <h3 className="text-lg font-medium">Verify your identity</h3>
                <p className="text-sm text-muted-foreground">Please verify with World ID to continue.</p>
              </div>
              <div className="flex justify-center py-4">
                <WorldIDVerification onSuccess={handleVerificationSuccess} />
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          {needsVerification && (
            <Button className="w-full" variant="outline" onClick={() => setNeedsVerification(false)}>
              Back
            </Button>
          )}
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="text-primary hover:underline">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

