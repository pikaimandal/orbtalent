import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, MessageSquare, ThumbsUp, Eye, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CommunityPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Community</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with other Worldcoin mini-app developers and clients
          </p>
        </div>

        <div className="relative max-w-md mx-auto w-full">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search discussions..." className="pl-10" />
        </div>

        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Discussions</h2>
          <Button asChild>
            <Link href="/community/new-topic">Start a Discussion</Link>
          </Button>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All Topics</TabsTrigger>
            <TabsTrigger value="development">Development</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="business">Business</TabsTrigger>
            <TabsTrigger value="help">Help & Support</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {[
              {
                title: "Best practices for implementing World ID verification in a mini-app?",
                author: "John Doe",
                category: "Development",
                replies: 12,
                views: 156,
                likes: 24,
                time: "2 hours ago",
                isVerified: true,
              },
              {
                title: "How to structure pricing for Worldcoin mini-app development services?",
                author: "Sarah Chen",
                category: "Business",
                replies: 8,
                views: 98,
                likes: 15,
                time: "5 hours ago",
                isVerified: true,
              },
              {
                title: "UI design patterns that work well for Worldcoin mini-apps",
                author: "Michael Rodriguez",
                category: "Design",
                replies: 15,
                views: 210,
                likes: 32,
                time: "1 day ago",
                isVerified: true,
              },
              {
                title: "Troubleshooting World ID verification issues in development environment",
                author: "Emma Wilson",
                category: "Help & Support",
                replies: 6,
                views: 87,
                likes: 9,
                time: "2 days ago",
                isVerified: false,
              },
              {
                title: "What's your experience with the World App SDK so far?",
                author: "David Kim",
                category: "Development",
                replies: 20,
                views: 245,
                likes: 38,
                time: "3 days ago",
                isVerified: true,
              },
            ].map((topic, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${topic.author.charAt(0)}`} />
                      <AvatarFallback>{topic.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div>
                        <Link
                          href={`/community/topic-${i}`}
                          className="font-medium text-lg hover:text-primary transition-colors"
                        >
                          {topic.title}
                        </Link>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline">{topic.category}</Badge>
                          <span className="text-sm text-muted-foreground">{topic.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{topic.replies} replies</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{topic.views} views</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{topic.likes} likes</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium">{topic.author}</span>
                        {topic.isVerified && <CheckCircle className="h-4 w-4 text-primary" />}
                      </div>
                      <Button variant="ghost" size="sm" className="gap-1" asChild>
                        <Link href={`/community/topic-${i}`}>
                          View <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="development" className="space-y-4">
            {/* Development topics would go here - similar structure to "all" */}
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">Showing development topics</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="design" className="space-y-4">
            {/* Design topics would go here */}
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">Showing design topics</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="business" className="space-y-4">
            {/* Business topics would go here */}
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">Showing business topics</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="help" className="space-y-4">
            {/* Help topics would go here */}
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">Showing help & support topics</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Active Members</CardTitle>
              <CardDescription>Top contributors this month</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "John Doe", posts: 32, isVerified: true },
                { name: "Sarah Chen", posts: 28, isVerified: true },
                { name: "Michael Rodriguez", posts: 24, isVerified: true },
                { name: "Emma Wilson", posts: 19, isVerified: false },
                { name: "David Kim", posts: 15, isVerified: true },
              ].map((member, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${member.name.charAt(0)}`} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium">{member.name}</span>
                      {member.isVerified && <CheckCircle className="h-3 w-3 text-primary" />}
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{member.posts} posts</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Popular Tags</CardTitle>
              <CardDescription>Most discussed topics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "World App SDK", count: 156 },
                  { name: "React", count: 124 },
                  { name: "TypeScript", count: 98 },
                  { name: "Verification", count: 87 },
                  { name: "Pricing", count: 76 },
                  { name: "UI Design", count: 65 },
                  { name: "Security", count: 54 },
                  { name: "Performance", count: 43 },
                  { name: "Freelancing", count: 32 },
                ].map((tag) => (
                  <Badge key={tag.name} variant="outline" className="cursor-pointer hover:bg-muted">
                    {tag.name} <span className="ml-1 text-muted-foreground">({tag.count})</span>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community Guidelines</CardTitle>
              <CardDescription>Please follow these rules</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">• Be respectful and constructive</p>
              <p className="text-sm">• No spam or self-promotion</p>
              <p className="text-sm">• Stay on topic</p>
              <p className="text-sm">• Protect your privacy</p>
              <p className="text-sm">• Report inappropriate content</p>
              <Button variant="outline" className="w-full mt-4" asChild>
                <Link href="/community-guidelines">Read Full Guidelines</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

