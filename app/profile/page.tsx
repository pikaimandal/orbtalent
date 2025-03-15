"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Upload, CheckCircle, Edit, Trash, Plus } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Profile</h1>
            <p className="text-muted-foreground">Manage your personal information and portfolio</p>
          </div>
          <Button onClick={() => setIsEditing(!isEditing)}>{isEditing ? "Save Changes" : "Edit Profile"}</Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="lg:col-span-1">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button
                      size="icon"
                      variant="outline"
                      className="absolute bottom-0 right-0 rounded-full h-8 w-8 bg-background"
                    >
                      <Upload className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
              <CardTitle>John Doe</CardTitle>
              <CardDescription className="flex flex-col items-center gap-2">
                <span>Worldcoin Mini-App Developer</span>
                <Badge className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3" /> Verified with World ID
                </Badge>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center">
                <div className="flex items-center">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="ml-2 font-medium">5.0</span>
                  <span className="ml-1 text-muted-foreground">(24 reviews)</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium">Location</div>
                {isEditing ? <Input defaultValue="San Francisco, CA" /> : <p className="text-sm">San Francisco, CA</p>}
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium">Member Since</div>
                <p className="text-sm">January 2024</p>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium">Languages</div>
                {isEditing ? <Input defaultValue="English, Spanish" /> : <p className="text-sm">English, Spanish</p>}
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="about">
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>About Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isEditing ? (
                      <Textarea
                        className="min-h-[150px]"
                        defaultValue="I'm a full-stack developer specializing in Worldcoin mini-app development. With over 5 years of experience in web and blockchain development, I've helped numerous clients build secure, user-friendly applications that leverage the power of Worldcoin's ecosystem. I'm passionate about creating solutions that combine great user experience with the security benefits of decentralized identity verification."
                      />
                    ) : (
                      <p>
                        I'm a full-stack developer specializing in Worldcoin mini-app development. With over 5 years of
                        experience in web and blockchain development, I've helped numerous clients build secure,
                        user-friendly applications that leverage the power of Worldcoin's ecosystem. I'm passionate
                        about creating solutions that combine great user experience with the security benefits of
                        decentralized identity verification.
                      </p>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "TypeScript",
                        "Next.js",
                        "World App SDK",
                        "Solidity",
                        "Node.js",
                        "PostgreSQL",
                        "Tailwind CSS",
                      ].map((skill) => (
                        <div key={skill} className="relative">
                          <Badge variant="secondary" className="text-sm">
                            {skill}
                          </Badge>
                          {isEditing && (
                            <Button
                              size="icon"
                              variant="ghost"
                              className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-background border"
                            >
                              <Trash className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      ))}
                      {isEditing && (
                        <Button variant="outline" size="sm" className="gap-1">
                          <Plus className="h-3 w-3" /> Add Skill
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Education & Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">Bachelor of Science in Computer Science</h3>
                          <p className="text-sm text-muted-foreground">Stanford University</p>
                          <p className="text-sm text-muted-foreground">2015 - 2019</p>
                        </div>
                        {isEditing && (
                          <div className="flex gap-2">
                            <Button size="icon" variant="ghost">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="icon" variant="ghost">
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">Certified Blockchain Developer</h3>
                          <p className="text-sm text-muted-foreground">Blockchain Council</p>
                          <p className="text-sm text-muted-foreground">2021</p>
                        </div>
                        {isEditing && (
                          <div className="flex gap-2">
                            <Button size="icon" variant="ghost">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="icon" variant="ghost">
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                      {isEditing && (
                        <Button variant="outline" className="w-full gap-1">
                          <Plus className="h-4 w-4" /> Add Education/Certification
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="portfolio" className="space-y-6 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Portfolio Projects</CardTitle>
                    <CardDescription>Showcase your best work</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((i) => (
                        <Card key={i} className="overflow-hidden">
                          <div className="aspect-video relative">
                            <img
                              src={`/placeholder.svg?height=200&width=400&text=Project+${i}`}
                              alt={`Project ${i}`}
                              className="object-cover w-full h-full"
                            />
                            {isEditing && (
                              <div className="absolute top-2 right-2 flex gap-2">
                                <Button
                                  size="icon"
                                  variant="outline"
                                  className="h-8 w-8 bg-background/80 backdrop-blur-sm"
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                  size="icon"
                                  variant="outline"
                                  className="h-8 w-8 bg-background/80 backdrop-blur-sm"
                                >
                                  <Trash className="h-4 w-4" />
                                </Button>
                              </div>
                            )}
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-semibold">
                              {
                                [
                                  "Worldcoin Event Ticketing App",
                                  "Decentralized Voting Platform",
                                  "Identity Verification System",
                                  "Worldcoin Payment Gateway",
                                ][i - 1]
                              }
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                              A{" "}
                              {
                                ["ticketing platform", "voting system", "identity verification app", "payment system"][
                                  i - 1
                                ]
                              }{" "}
                              built with the World App SDK and React.
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                      {isEditing && (
                        <Card className="flex items-center justify-center aspect-video border-dashed cursor:pointer hover:bg-muted/50 transition-colors">
                          <div className="text-center p-4">
                            <Plus className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                            <p className="font-medium">Add Project</p>
                          </div>
                        </Card>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Client Reviews</CardTitle>
                    <CardDescription>Feedback from your clients</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        {
                          name: "Alex Johnson",
                          project: "Worldcoin Event Ticketing App",
                          rating: 5,
                          review:
                            "John delivered an exceptional mini-app that exceeded our expectations. His expertise with the World App SDK was evident throughout the project. Highly recommended!",
                        },
                        {
                          name: "Sarah Chen",
                          project: "Decentralized Voting Platform",
                          rating: 5,
                          review:
                            "Working with John was a pleasure. He understood our requirements perfectly and delivered a secure, user-friendly voting platform that our organization now uses for all internal decisions.",
                        },
                        {
                          name: "Michael Rodriguez",
                          project: "Identity Verification System",
                          rating: 4,
                          review:
                            "John created a robust identity verification system for our platform. He was responsive to feedback and made adjustments quickly. The final product works great!",
                        },
                      ].map((review, i) => (
                        <div key={i} className="border-b pb-6 last:border-0 last:pb-0">
                          <div className="flex items-start gap-4">
                            <Avatar>
                              <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${review.name.charAt(0)}`} />
                              <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="space-y-2">
                              <div>
                                <h3 className="font-medium">{review.name}</h3>
                                <p className="text-sm text-muted-foreground">{review.project}</p>
                              </div>
                              <div className="flex">
                                {Array.from({ length: 5 }).map((_, j) => (
                                  <Star
                                    key={j}
                                    className={`h-4 w-4 ${
                                      j < review.rating ? "fill-primary text-primary" : "text-muted"
                                    }`}
                                  />
                                ))}
                              </div>
                              <p className="text-sm">{review.review}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

