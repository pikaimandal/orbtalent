import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Globe, Shield, Star } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit">
                  Verified Talent Only
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Find Verified Worldcoin Mini-App Developers
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Connect with verified freelancers to build your next Worldcoin mini-app. Every user is verified with
                  World ID.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="gap-1">
                  <Link href="/find-talent">
                    Find Talent <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/find-work">Become a Freelancer</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Avatar key={i} className="border-2 border-background">
                      <AvatarImage src="/images/worldcoin-logo.svg" />
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div className="text-muted-foreground">
                  Join <span className="font-medium text-foreground">5,000+</span> verified users
                </div>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
                <img
                  src="/images/ORBtalentBANNER.png"
                  alt="Worldcoin Mini-App Development Platform"
                  className="relative rounded-3xl border shadow-xl"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose WoLance?</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Our platform offers unique advantages for Worldcoin mini-app development
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            {[
              {
                icon: Shield,
                title: "Verified Users",
                description: "Every user is verified with World ID, ensuring you're working with real people.",
              },
              {
                icon: Code,
                title: "Specialized Talent",
                description: "Access developers who specialize in Worldcoin mini-app development.",
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Connect with talent from around the world to build your next project.",
              },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Popular Services</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Discover top-rated Worldcoin mini-app development services
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src="/images/service-card-bg.svg"
                    alt={`Worldcoin Mini-App Service ${i}`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader className="p-4">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/images/worldcoin-logo.svg" />
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Developer {i}</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Star className="h-3 w-3 fill-primary text-primary mr-1" />
                        <span>4.{9 - (i % 5)}</span>
                        <span className="mx-1">•</span>
                        <span>{20 + i * 3} Reviews</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <h3 className="font-semibold line-clamp-2">
                    I will develop a custom Worldcoin mini-app for your business
                  </h3>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                  <div className="text-sm">
                    Starting at <span className="font-bold">${100 + i * 50}</span>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild>
              <Link href="/find-talent">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">Simple steps to get started with WoLance</p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
            {[
              {
                step: 1,
                title: "Create an Account",
                description: "Sign up and verify your identity with World ID.",
              },
              {
                step: 2,
                title: "Find or Post Work",
                description: "Browse services or post your project requirements.",
              },
              {
                step: 3,
                title: "Collaborate & Pay",
                description: "Work with talent and pay securely through our platform.",
              },
            ].map((step) => (
              <div key={step.step} className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild>
              <Link href="/how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Users Say</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Hear from freelancers and clients who have used our platform
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                name: "Alex Johnson",
                role: "Client",
                quote:
                  "I found an amazing developer who built my Worldcoin mini-app in record time. The verification process gave me confidence in who I was working with.",
              },
              {
                name: "Sarah Chen",
                role: "Freelancer",
                quote:
                  "As a Worldcoin mini-app developer, WoLance has connected me with clients who value my expertise. The platform is intuitive and payments are always on time.",
              },
              {
                name: "Michael Rodriguez",
                role: "Client",
                quote:
                  "The quality of talent on WoLance is outstanding. I've completed three projects so far and each one exceeded my expectations.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/images/worldcoin-logo.svg" />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex justify-center mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Get Started?</h2>
              <p className="max-w-[700px] md:text-xl">
                Join thousands of verified users on the leading Worldcoin mini-app freelancing platform
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="secondary" className="gap-1">
                <Link href="/find-talent">
                  Find Talent <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/find-work">Become a Freelancer</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

