"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { WorldIDVerification } from "@/components/world-id-verification"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { signUp, createProfile } from "@/lib/supabase"
import { toast } from "@/hooks/use-toast"

export default function SignUpPage() {
  const router = useRouter()
  const [accountType, setAccountType] = useState("client")
  const [step, setStep] = useState(1)
  const [isVerified, setIsVerified] = useState(false)
  const [worldIdHash, setWorldIdHash] = useState("")
  const [error, setError] = useState("")
  
  // Form fields
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [username, setUsername] = useState("")
  const [skills, setSkills] = useState("")

  const handleVerificationSuccess = (hash: string) => {
    setWorldIdHash(hash)
    setIsVerified(true)
    
    // Show a success message
    toast({
      title: "Verification successful!",
      description: "Your identity has been verified with World ID.",
    })
    
    // Move to the next step
    setStep(3)
  }

  const handleSubmitStep1 = () => {
    setError("")
    
    // Validate form
    if (!email || !password || !confirmPassword) {
      setError("All fields are required")
      return
    }
    
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }
    
    // Move to next step
    setStep(2)
  }

  const handleCreateAccount = async () => {
    setError("")
    
    if (!fullName) {
      setError("Full name is required")
      return
    }
    
    if (!username) {
      setError("Username is required")
      return
    }
    
    if (accountType === "freelancer" && !skills) {
      setError("Please enter at least one skill")
      return
    }
    
    try {
      // Create auth user
      const result = await signUp(email, password)
      
      if (result.error) throw result.error
      
      // Check if we have user data
      if (result.data?.user) {
        // Wait a moment for the session to be established
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Create profile
        const profileResult = await createProfile({
          id: result.data.user.id,
          user_type: accountType as 'client' | 'freelancer',
          full_name: fullName,
          skills: accountType === "freelancer" ? skills.split(',').map(s => s.trim()) : [],
          worldcoin_verified: isVerified,
          worldcoin_hash: worldIdHash
        });
        
        if (profileResult.error) {
          console.error("Profile creation error:", profileResult.error);
          throw new Error(profileResult.error.message || "Failed to create profile");
        }
        
        // Show success message
        toast({
          title: "Account created successfully!",
          description: "Welcome to ORB Talent.",
        });
        
        // Force a page reload to ensure authentication state is updated
        setTimeout(() => {
          if (!result.data?.user) return;
          
          if (accountType === "client") {
            window.location.href = `/client-profile/${result.data.user.id}`;
          } else {
            window.location.href = `/freelancer-profile/${result.data.user.id}`;
          }
        }, 1500);
      }
    } catch (err: unknown) {
      const error = err as { message?: string }
      setError(error.message || "An error occurred during sign up")
    }
  }

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Join ORB Talent to connect with verified Worldcoin mini-app developers</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Create a password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input 
                  id="confirm-password" 
                  type="password" 
                  placeholder="Confirm your password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <RadioGroup
                defaultValue={accountType}
                onValueChange={setAccountType}
                className="grid grid-cols-2 gap-4 pt-2"
              >
                <div>
                  <RadioGroupItem value="client" id="client" className="peer sr-only" />
                  <Label
                    htmlFor="client"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    Client
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="freelancer" id="freelancer" className="peer sr-only" />
                  <Label
                    htmlFor="freelancer"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    Freelancer
                  </Label>
                </div>
              </RadioGroup>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="text-center space-y-2">
                <h3 className="text-lg font-medium">Verify your identity</h3>
                <p className="text-sm text-muted-foreground">
                  ORB Talent requires World ID verification to ensure all users are real humans.
                </p>
              </div>
              <div className="flex justify-center py-4">
                <WorldIDVerification onSuccess={handleVerificationSuccess} />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="text-center space-y-2">
                <h3 className="text-lg font-medium">Complete your profile</h3>
                <p className="text-sm text-muted-foreground">Add some details to help others get to know you.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="full-name">Full Name</Label>
                <Input 
                  id="full-name" 
                  placeholder="Enter your full name" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input 
                  id="username" 
                  placeholder="Choose a username" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              {accountType === "freelancer" && (
                <div className="space-y-2">
                  <Label htmlFor="skills">Skills (comma separated)</Label>
                  <Input 
                    id="skills" 
                    placeholder="e.g., React, Solidity, World App SDK" 
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                  />
                </div>
              )}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          {step === 1 && (
            <Button className="w-full" onClick={handleSubmitStep1}>
              Continue
            </Button>
          )}
          {step === 2 && !isVerified && (
            <Button className="w-full" variant="outline" onClick={() => setStep(1)}>
              Back
            </Button>
          )}
          {step === 3 && (
            <Button className="w-full" onClick={handleCreateAccount}>
              Create Account
            </Button>
          )}
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-primary hover:underline">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

