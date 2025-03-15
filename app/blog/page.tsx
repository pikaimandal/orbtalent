import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">ORB Talent Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tips, and news about Worldcoin mini-app development and freelancing
          </p>
        </div>

        <div className="relative max-w-md mx-auto w-full">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search articles..." className="pl-10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-8">
            {/* Featured Article */}
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src="/placeholder.svg?height=400&width=800&text=Featured+Article"
                  alt="Featured Article"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge>Featured</Badge>
                  <Badge variant="outline">Worldcoin</Badge>
                </div>
                <CardTitle className="text-2xl">
                  <Link href="/blog/featured-article" className="hover:text-primary transition-colors">
                    The Future of Worldcoin Mini-Apps: Trends to Watch in 2025
                  </Link>
                </CardTitle>
                <CardDescription className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>March 1, 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>5 min read</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  As Worldcoin continues to grow, mini-apps are becoming an essential part of the ecosystem. In this
                  article, we explore the emerging trends that will shape the future of Worldcoin mini-app development
                  and how freelancers can position themselves to capitalize on these opportunities.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32&text=JD" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">John Doe</span>
                </div>
                <Button variant="ghost" size="sm" className="gap-1" asChild>
                  <Link href="/blog/featured-article">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Recent Articles */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Recent Articles</h2>
              {[
                {
                  title: "How to Optimize Your Worldcoin Mini-App for Performance",
                  category: "Development",
                  date: "February 28, 2025",
                  readTime: "4 min read",
                  excerpt:
                    "Performance is crucial for user retention. Learn how to optimize your Worldcoin mini-app to provide a smooth and responsive experience for users.",
                  author: "Sarah Chen",
                },
                {
                  title: "Building Trust with World ID Verification in Your Freelance Career",
                  category: "Freelancing",
                  date: "February 25, 2025",
                  readTime: "3 min read",
                  excerpt:
                    "Discover how World ID verification can help you build trust with clients and stand out in the competitive freelancing marketplace.",
                  author: "Michael Rodriguez",
                },
                {
                  title: "5 Essential Skills Every Worldcoin Mini-App Developer Should Master",
                  category: "Skills",
                  date: "February 20, 2025",
                  readTime: "6 min read",
                  excerpt:
                    "From React to the World App SDK, these are the essential skills that will help you succeed as a Worldcoin mini-app developer.",
                  author: "Alex Johnson",
                },
              ].map((article, i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{article.category}</Badge>
                    </div>
                    <CardTitle>
                      <Link href={`/blog/article-${i}`} className="hover:text-primary transition-colors">
                        {article.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{article.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${article.author.charAt(0)}`} />
                        <AvatarFallback>{article.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{article.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="gap-1" asChild>
                      <Link href={`/blog/article-${i}`}>
                        Read More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Development", "Freelancing", "Worldcoin", "Skills", "Case Studies", "Tutorials", "News"].map(
                    (category) => (
                      <Badge key={category} variant="outline" className="cursor-pointer hover:bg-muted">
                        {category}
                      </Badge>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Popular Articles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Getting Started with the World App SDK",
                  "How to Price Your Worldcoin Mini-App Development Services",
                  "Security Best Practices for Worldcoin Mini-Apps",
                  "From Freelancer to Agency: Scaling Your Business",
                ].map((title, i) => (
                  <div key={i} className="border-b pb-4 last:border-0 last:pb-0">
                    <Link href="#" className="hover:text-primary transition-colors">
                      <p className="font-medium">{title}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                        <span>February {15 - i}, 2025</span>
                        <span>{3 + i} min read</span>
                      </div>
                    </Link>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Newsletter</CardTitle>
                <CardDescription>Stay updated with the latest articles and news</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Enter your email" />
                <Button className="w-full">Subscribe</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex justify-center mt-8">
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
  )
}

