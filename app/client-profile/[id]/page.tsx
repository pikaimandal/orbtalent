"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Edit,
  Flag,
  Globe,
  Heart,
  MapPin,
  Plus,
  Save,
  Share2,
  Star,
  Trash,
  Upload,
  X,
} from "lucide-react"
import Link from "next/link"

// Mock data for the client profile
const clientData = {
  id: "1",
  name: "TechEvents Inc.",
  title: "Event Technology Company",
  avatar: "/placeholder.svg?height=200&width=200&text=TE",
  verified: true,
  location: "San Francisco, CA",
  memberSince: "January 2024",
  lastActive: "1 hour ago",
  rating: 4.9,
  projectsPosted: 12,
  hireRate: 85,
  totalSpent: "$45,000+",
  website: "https://techevents-inc.com",
  languages: ["English", "Spanish"],
  about: `TechEvents Inc. is a leading event technology company specializing in creating innovative solutions for conferences, trade shows, and corporate events. We're constantly looking to enhance our offerings with cutting-edge technology, particularly in the Web3 space.

We're currently focused on developing Worldcoin mini-apps to streamline event registration, ticketing, and attendee verification processes. Our goal is to leverage World ID verification to create secure and seamless experiences for event attendees while maintaining privacy.

We have a dedicated in-house development team but frequently collaborate with specialized freelancers for specific projects and expertise.`,
  industry: "Event Technology",
  companySize: "51-200 employees",
  activeProjects: [
    {
      id: 1,
      title: "Worldcoin Mini-App for Event Ticketing",
      description:
        "Developing a mini-app that allows event attendees to purchase tickets and verify their identity using World ID.",
      budget: "$4,500",
      deadline: "March 30, 2025",
      status: "In Progress",
      progress: 65,
      freelancer: {
        id: 1,
        name: "John Doe",
        avatar: "/placeholder.svg?height=40&width=40&text=JD",
      },
    },
    {
      id: 2,
      title: "Attendee Networking Platform with World ID",
      description:
        "Creating a networking platform for event attendees that uses World ID for verification and secure messaging.",
      budget: "$6,200",
      deadline: "April 15, 2025",
      status: "In Progress",
      progress: 30,
      freelancer: {
        id: 2,
        name: "Sarah Chen",
        avatar: "/placeholder.svg?height=40&width=40&text=SC",
      },
    },
  ],
  completedProjects: [
    {
      id: 3,
      title: "Event Check-in System with Worldcoin Integration",
      description:
        "Developed a check-in system that uses World ID for attendee verification, reducing wait times by 75%.",
      budget: "$5,800",
      completedDate: "February 2025",
      freelancer: {
        id: 1,
        name: "John Doe",
        avatar: "/placeholder.svg?height=40&width=40&text=JD",
      },
      rating: 5,
      review:
        "John delivered an exceptional mini-app that exceeded our expectations. His expertise with the World App SDK was evident throughout the project. He was responsive, professional, and delivered ahead of schedule. Highly recommended!",
    },
    {
      id: 4,
      title: "Speaker Management Portal",
      description:
        "Created a portal for event speakers to manage their sessions, presentations, and attendee interactions.",
      budget: "$3,200",
      completedDate: "January 2025",
      freelancer: {
        id: 3,
        name: "Michael Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40&text=MR",
      },
      rating: 4,
      review:
        "Michael created a robust speaker management portal for our platform. He was responsive to feedback and made adjustments quickly. The final product works great and our speakers love the intuitive interface.",
    },
    {
      id: 5,
      title: "Event Analytics Dashboard",
      description: "Built a real-time analytics dashboard to track attendee engagement and event performance metrics.",
      budget: "$4,100",
      completedDate: "December 2024",
      freelancer: {
        id: 4,
        name: "Emma Wilson",
        avatar: "/placeholder.svg?height=40&width=40&text=EW",
      },
      rating: 5,
      review:
        "Emma delivered an outstanding analytics dashboard that has transformed how we understand our event performance. The visualizations are clear, the data is comprehensive, and the real-time updates work flawlessly.",
    },
  ],
  paymentHistory: [
    {
      id: 1,
      project: "Worldcoin Mini-App for Event Ticketing",
      amount: 2250,
      type: "Milestone Payment",
      status: "Completed",
      date: "March 10, 2025",
    },
    {
      id: 2,
      project: "Attendee Networking Platform with World ID",
      amount: 1860,
      type: "Milestone Payment",
      status: "Completed",
      date: "March 5, 2025",
    },
    {
      id: 3,
      project: "Event Check-in System with Worldcoin Integration",
      amount: 5800,
      type: "Final Payment",
      status: "Completed",
      date: "February 20, 2025",
    },
    {
      id: 4,
      project: "Speaker Management Portal",
      amount: 3200,
      type: "Final Payment",
      status: "Completed",
      date: "January 15, 2025",
    },
    {
      id: 5,
      project: "Event Analytics Dashboard",
      amount: 4100,
      type: "Final Payment",
      status: "Completed",
      date: "December 20, 2024",
    },
  ],
  openJobs: [
    {
      id: 1,
      title: "Virtual Event Platform Developer",
      description:
        "Looking for a developer to create a virtual event platform with Worldcoin integration for remote attendees.",
      budget: "$7,000 - $9,000",
      skills: ["React", "Next.js", "World App SDK", "WebRTC"],
      proposals: 8,
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Event Mobile App Developer",
      description:
        "Need a developer to build a mobile app for our events with World ID login and features for attendees.",
      budget: "$5,000 - $7,000",
      skills: ["React Native", "World App SDK", "Firebase"],
      proposals: 5,
      posted: "4 days ago",
    },
  ],
}

export default function ClientProfilePage() {
  const params = useParams()
  const clientId = params.id as string
  const [isSaved, setIsSaved] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [showSaveSuccess, setShowSaveSuccess] = useState(false)

  // State for editable fields
  const [profileData, setProfileData] = useState(clientData)
  const [newLanguage, setNewLanguage] = useState("")
  const [newJob, setNewJob] = useState({
    title: "",
    description: "",
    budget: "",
    skills: [] as string[],
    newSkill: "",
  })

  const handleSaveProfile = () => {
    // In a real app, this would save to a database
    setIsEditing(false)
    setShowSaveSuccess(true)
    setTimeout(() => setShowSaveSuccess(false), 3000)
  }

  const addLanguage = () => {
    if (newLanguage && !profileData.languages.includes(newLanguage)) {
      setProfileData({
        ...profileData,
        languages: [...profileData.languages, newLanguage],
      })
      setNewLanguage("")
    }
  }

  const removeLanguage = (language: string) => {
    setProfileData({
      ...profileData,
      languages: profileData.languages.filter((l) => l !== language),
    })
  }

  const addSkillToJob = () => {
    if (newJob.newSkill && !newJob.skills.includes(newJob.newSkill)) {
      setNewJob({
        ...newJob,
        skills: [...newJob.skills, newJob.newSkill],
        newSkill: "",
      })
    }
  }

  const removeSkillFromJob = (skill: string) => {
    setNewJob({
      ...newJob,
      skills: newJob.skills.filter((s) => s !== skill),
    })
  }

  const addJob = () => {
    if (newJob.title && newJob.description && newJob.budget) {
      setProfileData({
        ...profileData,
        openJobs: [
          ...profileData.openJobs,
          {
            id: profileData.openJobs.length + 1,
            title: newJob.title,
            description: newJob.description,
            budget: newJob.budget,
            skills: newJob.skills,
            proposals: 0,
            posted: "Just now",
          },
        ],
      })
      setNewJob({
        title: "",
        description: "",
        budget: "",
        skills: [],
        newSkill: "",
      })
    }
  }

  const removeJob = (id: number) => {
    setProfileData({
      ...profileData,
      openJobs: profileData.openJobs.filter((job) => job.id !== id),
    })
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        {/* Top Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/find-work" className="hover:text-foreground">
              Find Work
            </Link>
            <span>/</span>
            <Link href="/find-work?industry=technology" className="hover:text-foreground">
              Technology
            </Link>
            <span>/</span>
            <span className="text-foreground">{profileData.name}</span>
          </div>
          <div>
            {isEditing ? (
              <div className="flex items-center gap-2">
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSaveProfile}>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            ) : (
              <Button onClick={() => setIsEditing(true)}>
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            )}
          </div>
        </div>

        {showSaveSuccess && (
          <Alert className="bg-green-50 text-green-800 border-green-200">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription>Your profile has been updated successfully!</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src={profileData.avatar} alt={profileData.name} />
                      <AvatarFallback>
                        {profileData.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
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
                  {isEditing ? (
                    <div className="space-y-2 w-full mb-4">
                      <Input
                        value={profileData.name}
                        onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                        className="text-center font-bold text-xl"
                      />
                      <Input
                        value={profileData.title}
                        onChange={(e) => setProfileData({ ...profileData, title: e.target.value })}
                        className="text-center text-muted-foreground"
                      />
                    </div>
                  ) : (
                    <>
                      <h1 className="text-2xl font-bold">{profileData.name}</h1>
                      <p className="text-muted-foreground mb-2">{profileData.title}</p>
                    </>
                  )}
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3" /> Verified with World ID
                    </Badge>
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < Math.floor(profileData.rating) ? "fill-primary text-primary" : i < profileData.rating ? "fill-primary text-primary" : "text-muted"}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 font-medium">{profileData.rating}</span>
                    <span className="ml-1 text-muted-foreground">({profileData.completedProjects.length} reviews)</span>
                  </div>
                  <div className="grid grid-cols-3 w-full gap-2 mb-6 text-center">
                    <div className="flex flex-col">
                      <span className="font-bold">{profileData.projectsPosted}</span>
                      <span className="text-xs text-muted-foreground">Projects</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold">{profileData.hireRate}%</span>
                      <span className="text-xs text-muted-foreground">Hire Rate</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold">{profileData.totalSpent}</span>
                      <span className="text-xs text-muted-foreground">Spent</span>
                    </div>
                  </div>
                  <Separator className="mb-6" />
                  <div className="space-y-4 w-full text-left">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium">Location</p>
                        {isEditing ? (
                          <Input
                            value={profileData.location}
                            onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                          />
                        ) : (
                          <p className="text-sm text-muted-foreground">{profileData.location}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium">Member Since</p>
                        <p className="text-sm text-muted-foreground">{profileData.memberSince}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium">Last Active</p>
                        <p className="text-sm text-muted-foreground">{profileData.lastActive}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium">Website</p>
                        {isEditing ? (
                          <Input
                            value={profileData.website}
                            onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
                          />
                        ) : (
                          <a
                            href={profileData.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline"
                          >
                            {profileData.website.replace("https://", "")}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3 px-6 pb-6 pt-0">
                {!isEditing && (
                  <>
                    <Button className="w-full" size="lg">
                      Contact
                    </Button>
                    <div className="flex gap-3 w-full">
                      <Button variant="outline" className="flex-1" onClick={() => setIsSaved(!isSaved)}>
                        {isSaved ? (
                          <Heart className="h-4 w-4 mr-2 fill-destructive text-destructive" />
                        ) : (
                          <Heart className="h-4 w-4 mr-2" />
                        )}
                        {isSaved ? "Saved" : "Save"}
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="flex-1">
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Share this profile</DialogTitle>
                            <DialogDescription>Copy the link below or share directly to social media</DialogDescription>
                          </DialogHeader>
                          <div className="flex items-center space-x-2">
                            <input
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              value={`https://orbtalent.com/client-profile/${profileData.id}`}
                              readOnly
                            />
                            <Button variant="secondary" size="sm">
                              Copy
                            </Button>
                          </div>
                          <div className="flex justify-center gap-4 mt-4">
                            <Button variant="outline" size="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5 text-[#1877F2]"
                              >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                              </svg>
                            </Button>
                            <Button variant="outline" size="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5 text-[#1DA1F2]"
                              >
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                              </svg>
                            </Button>
                            <Button variant="outline" size="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5 text-[#0A66C2]"
                              >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect width="4" height="12" x="2" y="9"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                              </svg>
                            </Button>
                            <Button variant="outline" size="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5 text-[#25D366]"
                              >
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                              </svg>
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="text-muted-foreground">
                          <Flag className="h-4 w-4 mr-2" />
                          Report this client
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Report this client</DialogTitle>
                          <DialogDescription>Please let us know why you're reporting this client</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <h4 className="font-medium">Reason for reporting</h4>
                            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                              <option value="">Select a reason</option>
                              <option value="fake">Fake profile</option>
                              <option value="payment">Payment issues</option>
                              <option value="inappropriate">Inappropriate behavior</option>
                              <option value="spam">Spam or scam</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-medium">Additional details</h4>
                            <Textarea placeholder="Please provide any additional information that will help us understand the issue" />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline">Cancel</Button>
                          <Button>Submit Report</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </>
                )}
              </CardFooter>
            </Card>

            {/* Company Info */}
            <Card>
              <CardHeader>
                <CardTitle>Company Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 text-muted-foreground mt-0.5 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Industry</p>
                    {isEditing ? (
                      <Input
                        value={profileData.industry}
                        onChange={(e) => setProfileData({ ...profileData, industry: e.target.value })}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground">{profileData.industry}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 text-muted-foreground mt-0.5 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Company Size</p>
                    {isEditing ? (
                      <Input
                        value={profileData.companySize}
                        onChange={(e) => setProfileData({ ...profileData, companySize: e.target.value })}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground">{profileData.companySize}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 text-muted-foreground mt-0.5 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 8 6 6"></path>
                      <path d="m4 14 10-10 6 6-10 10-6-6z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Languages</p>
                    {isEditing ? (
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          {profileData.languages.map((language, index) => (
                            <Badge key={index} variant="secondary" className="flex items-center gap-1">
                              {language}
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-4 w-4 p-0 ml-1 text-muted-foreground hover:text-destructive hover:bg-transparent"
                                onClick={() => removeLanguage(language)}
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Input
                            value={newLanguage}
                            onChange={(e) => setNewLanguage(e.target.value)}
                            placeholder="Add language"
                            className="flex-1"
                          />
                          <Button variant="outline" size="sm" onClick={addLanguage} disabled={!newLanguage}>
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">{profileData.languages.join(", ")}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Open Jobs */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Open Jobs</CardTitle>
                  <CardDescription>Currently hiring for these positions</CardDescription>
                </div>
                {isEditing && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const dialog = document.getElementById("add-job-dialog") as HTMLDialogElement
                      if (dialog) dialog.showModal()
                    }}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Job
                  </Button>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                {profileData.openJobs.map((job) => (
                  <Card key={job.id}>
                    <CardContent className="p-4">
                      {isEditing && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-2 h-6 w-6 text-muted-foreground hover:text-destructive"
                          onClick={() => removeJob(job.id)}
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      )}
                      {isEditing ? (
                        <div className="space-y-3">
                          <Input
                            value={job.title}
                            onChange={(e) => {
                              const updatedJobs = profileData.openJobs.map((j) =>
                                j.id === job.id ? { ...j, title: e.target.value } : j,
                              )
                              setProfileData({ ...profileData, openJobs: updatedJobs })
                            }}
                            className="font-semibold text-lg"
                          />
                          <Textarea
                            value={job.description}
                            onChange={(e) => {
                              const updatedJobs = profileData.openJobs.map((j) =>
                                j.id === job.id ? { ...j, description: e.target.value } : j,
                              )
                              setProfileData({ ...profileData, openJobs: updatedJobs })
                            }}
                            className="text-sm text-muted-foreground min-h-[80px]"
                          />
                          <div className="flex flex-wrap gap-1 mb-3">
                            {job.skills.map((skill, index) => (
                              <Badge key={index} variant="secondary" className="text-xs flex items-center gap-1">
                                {skill}
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-3 w-3 p-0 ml-1 text-muted-foreground hover:text-destructive hover:bg-transparent"
                                  onClick={() => {
                                    const updatedJobs = profileData.openJobs.map((j) =>
                                      j.id === job.id ? { ...j, skills: j.skills.filter((s) => s !== skill) } : j,
                                    )
                                    setProfileData({ ...profileData, openJobs: updatedJobs })
                                  }}
                                >
                                  <X className="h-2 w-2" />
                                </Button>
                              </Badge>
                            ))}
                            <div className="flex items-center gap-1 mt-1">
                              <Input
                                placeholder="Add skill"
                                className="h-6 text-xs w-24"
                                value={job.id.toString()} // Using as temporary storage
                                onChange={(e) => {
                                  // This is just a placeholder for the UI
                                }}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" && e.currentTarget.value) {
                                    const updatedJobs = profileData.openJobs.map((j) =>
                                      j.id === job.id ? { ...j, skills: [...j.skills, e.currentTarget.value] } : j,
                                    )
                                    setProfileData({ ...profileData, openJobs: updatedJobs })
                                    e.currentTarget.value = ""
                                  }
                                }}
                              />
                              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                          <Input
                            value={job.budget}
                            onChange={(e) => {
                              const updatedJobs = profileData.openJobs.map((j) =>
                                j.id === job.id ? { ...j, budget: e.target.value } : j,
                              )
                              setProfileData({ ...profileData, openJobs: updatedJobs })
                            }}
                            className="font-bold"
                          />
                        </div>
                      ) : (
                        <>
                          <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {job.skills.map((skill, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-bold">{job.budget}</p>
                              <p className="text-xs text-muted-foreground">
                                {job.proposals} proposals • Posted {job.posted}
                              </p>
                            </div>
                            <Button size="sm" asChild>
                              <Link href={`/projects/${job.id}`}>Apply</Link>
                            </Button>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                ))}

                {/* Add Job Dialog */}
                <dialog
                  id="add-job-dialog"
                  className="modal p-6 rounded-lg shadow-lg bg-background border max-w-md w-full"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-bold">Add New Job</h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          const dialog = document.getElementById("add-job-dialog") as HTMLDialogElement
                          if (dialog) dialog.close()
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <Label htmlFor="job-title">Job Title</Label>
                        <Input
                          id="job-title"
                          value={newJob.title}
                          onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                          placeholder="e.g., Virtual Event Platform Developer"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="job-description">Description</Label>
                        <Textarea
                          id="job-description"
                          value={newJob.description}
                          onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                          placeholder="Describe the job requirements..."
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="job-budget">Budget</Label>
                        <Input
                          id="job-budget"
                          value={newJob.budget}
                          onChange={(e) => setNewJob({ ...newJob, budget: e.target.value })}
                          placeholder="e.g., $5,000 - $7,000"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label>Skills Required</Label>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {newJob.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="flex items-center gap-1">
                              {skill}
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-4 w-4 p-0 ml-1 text-muted-foreground hover:text-destructive hover:bg-transparent"
                                onClick={() => removeSkillFromJob(skill)}
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Input
                            value={newJob.newSkill}
                            onChange={(e) => setNewJob({ ...newJob, newSkill: e.target.value })}
                            placeholder="Add skill"
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault()
                                addSkillToJob()
                              }
                            }}
                          />
                          <Button variant="outline" size="sm" onClick={addSkillToJob} disabled={!newJob.newSkill}>
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 pt-2">
                      <Button
                        variant="outline"
                        onClick={() => {
                          const dialog = document.getElementById("add-job-dialog") as HTMLDialogElement
                          if (dialog) dialog.close()
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={() => {
                          addJob()
                          const dialog = document.getElementById("add-job-dialog") as HTMLDialogElement
                          if (dialog) dialog.close()
                        }}
                        disabled={!newJob.title || !newJob.description || !newJob.budget}
                      >
                        Add Job
                      </Button>
                    </div>
                  </div>
                </dialog>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overview Card */}
            <Card>
              <CardHeader>
                <CardTitle>About {profileData.name}</CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <Textarea
                    value={profileData.about}
                    onChange={(e) => setProfileData({ ...profileData, about: e.target.value })}
                    className="min-h-[200px] whitespace-pre-line"
                  />
                ) : (
                  <div className="whitespace-pre-line">{profileData.about}</div>
                )}
              </CardContent>
            </Card>

            {/* Tabs for Projects, History, etc. */}
            <Tabs defaultValue="active-projects" className="space-y-6">
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="active-projects">Active Projects</TabsTrigger>
                <TabsTrigger value="completed-projects">Completed Projects</TabsTrigger>
                <TabsTrigger value="payment-history">Payment History</TabsTrigger>
              </TabsList>

              {/* Active Projects Tab */}
              <TabsContent value="active-projects" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Active Projects</CardTitle>
                    <CardDescription>Currently in progress</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {profileData.activeProjects.map((project) => (
                      <div key={project.id} className="border-b pb-6 last:border-0 last:pb-0">
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{project.title}</h3>
                              <Badge variant={project.status === "Completed" ? "default" : "outline"}>
                                {project.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{project.description}</p>
                            <div className="flex items-center gap-4 text-sm">
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>Due {project.deadline}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <DollarSign className="h-4 w-4" />
                                <span>{project.budget}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm">Freelancer:</span>
                              <div className="flex items-center gap-1">
                                <Avatar className="h-6 w-6">
                                  <AvatarImage src={project.freelancer.avatar} />
                                  <AvatarFallback>
                                    {project.freelancer.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <Link
                                  href={`/freelancer-profile/${project.freelancer.id}`}
                                  className="text-sm text-primary hover:underline"
                                >
                                  {project.freelancer.name}
                                </Link>
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
                              <Link href={`/projects/${project.id}`}>View Details</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Completed Projects Tab */}
              <TabsContent value="completed-projects" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Completed Projects</CardTitle>
                    <CardDescription>Successfully delivered projects</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {profileData.completedProjects.map((project) => (
                      <div key={project.id} className="border-b pb-6 last:border-0 last:pb-0">
                        <div className="flex flex-col gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{project.title}</h3>
                              <Badge>Completed</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{project.description}</p>
                            <div className="flex items-center gap-4 text-sm">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>Completed {project.completedDate}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <DollarSign className="h-4 w-4" />
                                <span>{project.budget}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <Avatar>
                              <AvatarImage src={project.freelancer.avatar} />
                              <AvatarFallback>
                                {project.freelancer.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="space-y-2 flex-1">
                              <div>
                                <Link
                                  href={`/freelancer-profile/${project.freelancer.id}`}
                                  className="font-medium hover:text-primary"
                                >
                                  {project.freelancer.name}
                                </Link>
                              </div>
                              <div className="flex">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < project.rating ? "fill-primary text-primary" : "text-muted"}`}
                                  />
                                ))}
                              </div>
                              {isEditing ? (
                                <Textarea
                                  value={project.review}
                                  onChange={(e) => {
                                    const updatedProjects = profileData.completedProjects.map((p) =>
                                      p.id === project.id ? { ...p, review: e.target.value } : p,
                                    )
                                    setProfileData({ ...profileData, completedProjects: updatedProjects })
                                  }}
                                  className="text-sm min-h-[80px]"
                                />
                              ) : (
                                <p className="text-sm">{project.review}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Payment History Tab */}
              <TabsContent value="payment-history" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment History</CardTitle>
                    <CardDescription>Record of all transactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {profileData.paymentHistory.map((payment) => (
                        <div key={payment.id} className="border-b pb-6 last:border-0 last:pb-0">
                          <div className="flex flex-col md:flex-row justify-between gap-4">
                            <div className="space-y-1">
                              <h3 className="font-semibold">{payment.project}</h3>
                              <p className="text-sm text-muted-foreground">{payment.type}</p>
                              <p className="text-sm text-muted-foreground">Payment Date: {payment.date}</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <p className="font-bold">${payment.amount.toLocaleString()}</p>
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
      </div>
    </div>
  )
}

