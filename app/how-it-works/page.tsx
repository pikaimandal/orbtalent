import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">How WoLance Works</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn how to use our platform to find talent or work on Worldcoin mini-app projects
          </p>
        </div>

        <Tabs defaultValue="clients" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="clients">For Clients</TabsTrigger>
            <TabsTrigger value="freelancers">For Freelancers</TabsTrigger>
          </TabsList>

          <TabsContent value="clients" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: "Create an Account",
                  description: "Sign up and verify your identity with World ID to ensure a secure platform.",
                },
                {
                  step: 2,
                  title: "Post a Project",
                  description: "Describe your project requirements, budget, and timeline to attract the right talent.",
                },
                {
                  step: 3,
                  title: "Hire a Freelancer",
                  description:
                    "Review proposals, interview candidates, and select the best freelancer for your project.",
                },
              ].map((step) => (
                <Card key={step.step}>
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                      {step.step}
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  step: 4,
                  title: "Collaborate",
                  description:
                    "Work closely with your freelancer through our messaging system to track progress and provide feedback.",
                },
                {
                  step: 5,
                  title: "Pay Securely",
                  description:
                    "Release payment only when you're satisfied with the work. Our escrow system protects both parties.",
                },
              ].map((step) => (
                <Card key={step.step}>
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                      {step.step}
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Why Clients Choose WoLance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Access to verified Worldcoin mini-app developers",
                  "Secure payment protection",
                  "Quality work from specialized talent",
                  "Transparent hiring process",
                  "Dedicated support throughout your project",
                  "Built-in tools for effective collaboration",
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button asChild size="lg" className="gap-1">
                  <Link href="/find-talent">
                    Find Talent Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="freelancers" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: "Create an Account",
                  description: "Sign up and verify your identity with World ID to build trust with potential clients.",
                },
                {
                  step: 2,
                  title: "Complete Your Profile",
                  description: "Showcase your skills, experience, and portfolio to stand out from other freelancers.",
                },
                {
                  step: 3,
                  title: "Find Projects",
                  description: "Browse available projects or create service listings that highlight your expertise.",
                },
              ].map((step) => (
                <Card key={step.step}>
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                      {step.step}
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  step: 4,
                  title: "Submit Proposals",
                  description:
                    "Send compelling proposals to clients explaining why you're the best fit for their project.",
                },
                {
                  step: 5,
                  title: "Get Paid",
                  description:
                    "Receive secure payments for your work through our platform's payment protection system.",
                },
              ].map((step) => (
                <Card key={step.step}>
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
                      {step.step}
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Why Freelancers Choose WoLance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Access to clients seeking Worldcoin mini-app expertise",
                  "Secure payment protection",
                  "Build a reputation in a specialized marketplace",
                  "No competition with unverified freelancers",
                  "Tools to showcase your portfolio and skills",
                  "Opportunities to work on cutting-edge projects",
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button asChild size="lg" className="gap-1">
                  <Link href="/find-work">
                    Find Work Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-muted rounded-lg p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of verified users on the leading Worldcoin mini-app freelancing platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <Button asChild size="lg" className="gap-1">
              <Link href="/sign-up">
                Create an Account <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

