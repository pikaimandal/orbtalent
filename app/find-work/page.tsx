import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Search, Filter, Clock, DollarSign, Briefcase } from "lucide-react"
import Link from "next/link"

export default function FindWorkPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Find Work</h1>
          <p className="text-muted-foreground">Browse available Worldcoin mini-app development projects</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters */}
          <div className="w-full md:w-64 space-y-6">
            <Card>
              <CardContent className="p-4 space-y-4">
                <div className="font-medium flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </div>

                <div className="space-y-2">
                  <div className="font-medium text-sm">Project Type</div>
                  <div className="space-y-2">
                    {["Fixed Price", "Hourly Rate"].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox id={`type-${type}`} />
                        <Label htmlFor={`type-${type}`} className="text-sm">
                          {type}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-medium text-sm">Experience Level</div>
                  <div className="space-y-2">
                    {["Entry", "Intermediate", "Expert"].map((level) => (
                      <div key={level} className="flex items-center space-x-2">
                        <Checkbox id={`level-${level}`} />
                        <Label htmlFor={`level-${level}`} className="text-sm">
                          {level}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-medium text-sm">Project Length</div>
                  <div className="space-y-2">
                    {["Less than 1 week", "1-4 weeks", "1-3 months", "3+ months"].map((duration) => (
                      <div key={duration} className="flex items-center space-x-2">
                        <Checkbox id={`duration-${duration}`} />
                        <Label htmlFor={`duration-${duration}`} className="text-sm">
                          {duration}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-medium text-sm">Skills</div>
                  <div className="space-y-2">
                    {["React", "Solidity", "World App SDK", "JavaScript", "TypeScript"].map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox id={`skill-${skill}`} />
                        <Label htmlFor={`skill-${skill}`} className="text-sm">
                          {skill}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search for projects..." className="pl-8" />
              </div>
              <Button>Search</Button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">
                          <Link href={`/projects/${i}`} className="hover:text-primary transition-colors">
                            {
                              [
                                "Worldcoin Mini-App for Event Ticketing",
                                "Develop a Worldcoin-based Voting System",
                                "Create a Decentralized Identity Verification App",
                                "Build a Worldcoin Payment Integration System",
                              ][i % 4]
                            }
                          </Link>
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <span>Posted 2 day{i % 2 ? "s" : ""} ago</span>
                          <span>•</span>
                          <span>{10 + i} proposals</span>
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">${(i + 1) * 500 + 1000}</div>
                        <div className="text-sm text-muted-foreground">
                          {i % 2 === 0 ? "Fixed Price" : "Hourly Rate"}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      Looking for an experienced Worldcoin mini-app developer to create a{" "}
                      {["ticketing platform", "voting system", "identity verification app", "payment system"][i % 4]}{" "}
                      using the World App SDK. The project requires expertise in React, TypeScript, and understanding of
                      Worldcoin's ecosystem.
                    </p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {["World App SDK", "React", "TypeScript", i % 2 === 0 ? "Solidity" : "Next.js"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{i % 2 === 0 ? "2-4 weeks" : "1-3 months"}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{["Intermediate", "Expert"][i % 2]} level</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        <span>Verified payment</span>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  1
                </Button>
                <Button variant="outline" size="icon">
                  2
                </Button>
                <Button variant="outline" size="icon">
                  3
                </Button>
                <span>...</span>
                <Button variant="outline" size="icon">
                  10
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

