import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Search, Star, Filter, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function FindTalentPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Find Talent</h1>
          <p className="text-muted-foreground">
            Connect with verified Worldcoin mini-app developers for your next project
          </p>
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
                  <div className="font-medium text-sm">Price Range</div>
                  <Slider defaultValue={[50, 500]} min={0} max={1000} step={10} />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>$0</span>
                    <span>$1000</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-medium text-sm">Rating</div>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox id={`rating-${rating}`} />
                        <Label htmlFor={`rating-${rating}`} className="flex items-center text-sm">
                          {Array.from({ length: rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                          {Array.from({ length: 5 - rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-muted" />
                          ))}
                          <span className="ml-1">& up</span>
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

                <Button className="w-full">Apply Filters</Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search for skills, services, or freelancers..." className="pl-8" />
              </div>
              <Button>Search</Button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="p-4 md:p-6 flex flex-col md:flex-row gap-4 flex-1">
                        <div className="flex-shrink-0">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={`/placeholder.svg?height=64&width=64&text=F${i}`} />
                            <AvatarFallback>F{i}</AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">Developer {i + 1}</h3>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <CheckCircle className="h-3 w-3" /> Verified
                            </Badge>
                          </div>
                          <p className="text-sm font-medium">Worldcoin Mini-App Developer</p>
                          <div className="flex items-center text-sm">
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, j) => (
                                <Star
                                  key={j}
                                  className={`h-4 w-4 ${j < 4 + (i % 2) ? "fill-primary text-primary" : "text-muted"}`}
                                />
                              ))}
                            </div>
                            <span className="ml-1">{4 + (i % 2)}.0</span>
                            <span className="mx-1">•</span>
                            <span>{10 + i * 3} reviews</span>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            Experienced Worldcoin mini-app developer specializing in creating efficient, user-friendly
                            applications. Proficient in React, TypeScript, and the World App SDK.
                          </p>
                          <div className="flex flex-wrap gap-1 pt-1">
                            {["React", "TypeScript", "World App SDK"].map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col justify-between items-end gap-2">
                          <div className="text-right">
                            <p className="text-sm">Starting at</p>
                            <p className="font-bold">${50 + i * 10}/hr</p>
                          </div>
                          <Button asChild>
                            <Link href={`/freelancers/${i}`}>View Profile</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
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

