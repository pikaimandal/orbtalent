"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DollarSign, MessageSquare, BarChart3, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Manage your projects, messages, and payments</p>
          </div>
          <Button asChild>
            <Link href="/post-project">Post a Project</Link>
          </Button>
        </div>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:w-[600px]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Active Projects", value: "3", icon: BarChart3, color: "bg-blue-100 dark:bg-blue-900" },
                { title: "Unread Messages", value: "12", icon: MessageSquare, color: "bg-green-100 dark:bg-green-900" },
                {
                  title: "Pending Payments",
                  value: "$1,250",
                  icon: DollarSign,
                  color: "bg-yellow-100 dark:bg-yellow-900",
                },
                {
                  title: "Completed Projects",
                  value: "8",
                  icon: CheckCircle,
                  color: "bg-purple-100 dark:bg-purple-900",
                },
              ].map((stat, i) => (
                <Card key={i}>
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className={`p-3 rounded-full ${stat.color}`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Projects</CardTitle>
                  <CardDescription>Your most recent projects and their status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Worldcoin Mini-App for Event Ticketing", status: "In Progress", progress: 65 },
                      { name: "Develop a Worldcoin-based Voting System", status: "Completed", progress: 100 },
                      { name: "Create a Decentralized Identity Verification App", status: "In Review", progress: 90 },
                    ].map((project, i) => (
                      <div key={i} className="flex flex-col gap-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">{project.name}</p>
                            <div className="flex items-center gap-2">
                              <Badge variant={project.status === "Completed" ? "default" : "outline"}>
                                {project.status}
                              </Badge>
                              <span className="text-sm text-muted-foreground">Due in {7 - i} days</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Messages</CardTitle>
                  <CardDescription>Your most recent conversations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Alex Johnson",
                        message: "I've completed the first milestone for the project.",
                        time: "2h ago",
                      },
                      {
                        name: "Sarah Chen",
                        message: "Can we schedule a call to discuss the requirements?",
                        time: "5h ago",
                      },
                      { name: "Michael Rodriguez", message: "I've sent you the updated design files.", time: "1d ago" },
                    ].map((message, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${message.name.charAt(0)}`} />
                          <AvatarFallback>{message.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <div className="flex justify-between items-center">
                            <p className="font-medium">{message.name}</p>
                            <span className="text-xs text-muted-foreground">{message.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-1">{message.message}</p>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/messages">View All Messages</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Projects</CardTitle>
                <CardDescription>Manage all your active and completed projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      name: "Worldcoin Mini-App for Event Ticketing",
                      status: "In Progress",
                      progress: 65,
                      client: "TechEvents Inc.",
                    },
                    {
                      name: "Develop a Worldcoin-based Voting System",
                      status: "Completed",
                      progress: 100,
                      client: "Democracy DAO",
                    },
                    {
                      name: "Create a Decentralized Identity Verification App",
                      status: "In Review",
                      progress: 90,
                      client: "SecureID Solutions",
                    },
                    {
                      name: "Build a Worldcoin Payment Integration System",
                      status: "In Progress",
                      progress: 30,
                      client: "PayWorld Finance",
                    },
                    {
                      name: "Worldcoin Mini-App for Community Rewards",
                      status: "Completed",
                      progress: 100,
                      client: "Community Builders",
                    },
                  ].map((project, i) => (
                    <div key={i} className="border-b pb-6 last:border-0 last:pb-0">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{project.name}</h3>
                            <Badge variant={project.status === "Completed" ? "default" : "outline"}>
                              {project.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">Client: {project.client}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>Due in {7 - (i % 7)} days</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="h-4 w-4" />
                              <span>${(i + 1) * 500 + 1000}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 min-w-[150px]">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} />
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/projects/${i}`}>View Details</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Messages</CardTitle>
                <CardDescription>Your conversations with clients and freelancers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Alex Johnson",
                      project: "Worldcoin Mini-App for Event Ticketing",
                      message: "I've completed the first milestone for the project.",
                      time: "2h ago",
                      unread: true,
                    },
                    {
                      name: "Sarah Chen",
                      project: "Develop a Worldcoin-based Voting System",
                      message: "Can we schedule a call to discuss the requirements?",
                      time: "5h ago",
                      unread: true,
                    },
                    {
                      name: "Michael Rodriguez",
                      project: "Create a Decentralized Identity Verification App",
                      message: "I've sent you the updated design files.",
                      time: "1d ago",
                      unread: false,
                    },
                    {
                      name: "Emma Wilson",
                      project: "Build a Worldcoin Payment Integration System",
                      message: "Do you have any examples of similar projects you've worked on?",
                      time: "2d ago",
                      unread: false,
                    },
                    {
                      name: "David Kim",
                      project: "Worldcoin Mini-App for Community Rewards",
                      message: "The latest update looks great! Just a few minor tweaks needed.",
                      time: "3d ago",
                      unread: false,
                    },
                  ].map((message, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${message.name.charAt(0)}`} />
                        <AvatarFallback>{message.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <p className="font-medium">{message.name}</p>
                            {message.unread && <span className="h-2 w-2 rounded-full bg-primary" />}
                          </div>
                          <span className="text-xs text-muted-foreground">{message.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{message.project}</p>
                        <p className="text-sm line-clamp-1">{message.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>Track your earnings and payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      project: "Worldcoin Mini-App for Event Ticketing",
                      amount: 1500,
                      status: "Pending",
                      date: "Mar 15, 2025",
                    },
                    {
                      project: "Develop a Worldcoin-based Voting System",
                      amount: 2500,
                      status: "Completed",
                      date: "Feb 28, 2025",
                    },
                    {
                      project: "Create a Decentralized Identity Verification App",
                      amount: 3000,
                      status: "Pending",
                      date: "Mar 10, 2025",
                    },
                    {
                      project: "Build a Worldcoin Payment Integration System",
                      amount: 1800,
                      status: "Completed",
                      date: "Jan 20, 2025",
                    },
                    {
                      project: "Worldcoin Mini-App for Community Rewards",
                      amount: 2200,
                      status: "Completed",
                      date: "Dec 15, 2024",
                    },
                  ].map((payment, i) => (
                    <div key={i} className="border-b pb-6 last:border-0 last:pb-0">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="space-y-1">
                          <h3 className="font-semibold">{payment.project}</h3>
                          <p className="text-sm text-muted-foreground">Payment Date: {payment.date}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <p className="font-bold">${payment.amount}</p>
                          <Badge
                            variant={payment.status === "Completed" ? "default" : "outline"}
                            className="flex items-center gap-1"
                          >
                            {payment.status === "Completed" ? (
                              <CheckCircle className="h-3 w-3" />
                            ) : (
                              <Clock className="h-3 w-3" />
                            )}
                            {payment.status}
                          </Badge>
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
  )
}

