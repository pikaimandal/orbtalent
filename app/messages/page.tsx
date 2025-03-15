"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Send, Paperclip, MoreVertical, Phone, Video } from "lucide-react"

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(0)

  const conversations = [
    { name: "Alex Johnson", project: "Worldcoin Mini-App for Event Ticketing", unread: true, lastMessage: "2h ago" },
    { name: "Sarah Chen", project: "Develop a Worldcoin-based Voting System", unread: true, lastMessage: "5h ago" },
    {
      name: "Michael Rodriguez",
      project: "Create a Decentralized Identity Verification App",
      unread: false,
      lastMessage: "1d ago",
    },
    {
      name: "Emma Wilson",
      project: "Build a Worldcoin Payment Integration System",
      unread: false,
      lastMessage: "2d ago",
    },
    { name: "David Kim", project: "Worldcoin Mini-App for Community Rewards", unread: false, lastMessage: "3d ago" },
  ]

  const messages = [
    {
      sender: "them",
      content: "Hi there! I'm interested in discussing the Worldcoin mini-app project.",
      time: "10:30 AM",
    },
    {
      sender: "me",
      content: "Hello! I'd be happy to discuss the project with you. What specific features are you looking for?",
      time: "10:32 AM",
    },
    {
      sender: "them",
      content:
        "I need an event ticketing system that uses Worldcoin for verification. Users should be able to purchase tickets and verify their identity at the event using World ID.",
      time: "10:35 AM",
    },
    {
      sender: "me",
      content:
        "That sounds like a great use case for Worldcoin. I've built similar systems before. We can implement the World ID verification for both ticket purchase and event check-in.",
      time: "10:38 AM",
    },
    {
      sender: "them",
      content: "Perfect! Do you have any examples of similar projects you've worked on?",
      time: "10:40 AM",
    },
    {
      sender: "me",
      content:
        "Yes, I've attached a portfolio with some of my previous Worldcoin mini-app projects. The second one is particularly relevant as it also involved identity verification.",
      time: "10:45 AM",
    },
    {
      sender: "them",
      content:
        "Thanks for sharing! I've looked through your portfolio and I'm impressed with your work. When can you start and what's your estimated timeline for completion?",
      time: "11:00 AM",
    },
  ]

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold">Messages</h1>
          <p className="text-muted-foreground">Communicate with clients and freelancers</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-16rem)]">
          {/* Conversation List */}
          <Card className="lg:col-span-1 overflow-hidden flex flex-col">
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search conversations..." className="pl-8" />
              </div>
            </div>
            <div className="flex-1 overflow-auto">
              {conversations.map((conversation, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 p-4 cursor-pointer hover:bg-muted/50 transition-colors ${selectedConversation === i ? "bg-muted" : ""}`}
                  onClick={() => setSelectedConversation(i)}
                >
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${conversation.name.charAt(0)}`} />
                    <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <p className="font-medium truncate">{conversation.name}</p>
                        {conversation.unread && <span className="h-2 w-2 rounded-full bg-primary" />}
                      </div>
                      <span className="text-xs text-muted-foreground">{conversation.lastMessage}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{conversation.project}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Message Area */}
          <Card className="lg:col-span-2 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src={`/placeholder.svg?height=40&width=40&text=${conversations[selectedConversation].name.charAt(0)}`}
                  />
                  <AvatarFallback>{conversations[selectedConversation].name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{conversations[selectedConversation].name}</p>
                  <p className="text-xs text-muted-foreground">{conversations[selectedConversation].project}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Phone className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-auto p-4 space-y-4">
              {messages.map((message, i) => (
                <div key={i} className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] ${message.sender === "me" ? "bg-primary text-primary-foreground" : "bg-muted"} rounded-lg p-3`}
                  >
                    <p>{message.content}</p>
                    <p
                      className={`text-xs mt-1 ${message.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                    >
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Input placeholder="Type a message..." className="flex-1" />
                <Button size="icon">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

