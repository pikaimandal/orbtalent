"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
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
import {
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Download,
  Edit,
  ExternalLink,
  Flag,
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
import { Alert, AlertDescription } from "@/components/ui/alert"

// Mock data for the freelancer profile
const freelancerData = {
  id: "1",
  name: "John Doe",
  title: "Senior Worldcoin Mini-App Developer",
  avatar: "/placeholder.svg?height=200&width=200&text=JD",
  verified: true,
  location: "San Francisco, CA",
  memberSince: "January 2024",
  lastActive: "2 hours ago",
  rating: 5,
  completedProjects: 32,
  onTimeDelivery: 98,
  responseRate: 100,
  languages: ["English (Fluent)", "Spanish (Conversational)"],
  hourlyRate: 85,
  availability: "Full-time (40+ hrs/week)",
  about: `I'm a full-stack developer specializing in Worldcoin mini-app development with over 5 years of experience. I've helped numerous clients build secure, user-friendly applications that leverage the power of Worldcoin's ecosystem.

My expertise includes:
• World App SDK integration
• React and Next.js development
• Secure authentication with World ID
• Smart contract integration
• UI/UX design for Web3 applications

I'm passionate about creating solutions that combine great user experience with the security benefits of decentralized identity verification. My goal is to deliver high-quality, maintainable code that meets your business objectives.`,
  skills: [
    "React",
    "TypeScript",
    "Next.js",
    "World App SDK",
    "Solidity",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Web3.js",
    "Smart Contracts",
    "UI/UX Design",
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Stanford University",
      years: "2015 - 2019",
    },
    {
      degree: "Certified Blockchain Developer",
      institution: "Blockchain Council",
      years: "2021",
    },
  ],
  portfolio: [
    {
      id: 1,
      title: "Worldcoin Event Ticketing App",
      description:
        "A ticketing platform built with the World App SDK and React that allows event organizers to sell tickets and verify attendees using World ID.",
      image: "/placeholder.svg?height=200&width=400&text=Project+1",
      category: "Mini-App Development",
    },
    {
      id: 2,
      title: "Decentralized Voting Platform",
      description:
        "A secure voting system that uses World ID to ensure one-person-one-vote integrity while maintaining privacy.",
      image: "/placeholder.svg?height=200&width=400&text=Project+2",
      category: "Voting System",
    },
    {
      id: 3,
      title: "Identity Verification System",
      description:
        "A reusable component for integrating World ID verification into existing applications with minimal code changes.",
      image: "/placeholder.svg?height=200&width=400&text=Project+3",
      category: "Identity Verification",
    },
    {
      id: 4,
      title: "Worldcoin Payment Gateway",
      description:
        "A payment processing system that integrates with the Worldcoin ecosystem for secure and efficient transactions.",
      image: "/placeholder.svg?height=200&width=400&text=Project+4",
      category: "Payment System",
    },
  ],
  workHistory: [
    {
      id: 1,
      projectTitle: "Worldcoin Mini-App for Event Ticketing",
      clientName: "TechEvents Inc.",
      clientAvatar: "/placeholder.svg?height=40&width=40&text=TE",
      completedDate: "February 2025",
      amount: "$4,500",
      rating: 5,
      review:
        "John delivered an exceptional mini-app that exceeded our expectations. His expertise with the World App SDK was evident throughout the project. He was responsive, professional, and delivered ahead of schedule. Highly recommended!",
    },
    {
      id: 2,
      projectTitle: "Decentralized Voting Platform",
      clientName: "Democracy DAO",
      clientAvatar: "/placeholder.svg?height=40&width=40&text=DD",
      completedDate: "January 2025",
      amount: "$6,800",
      rating: 5,
      review:
        "Working with John was a pleasure. He understood our requirements perfectly and delivered a secure, user-friendly voting platform that our organization now uses for all internal decisions. His knowledge of Worldcoin technology is impressive.",
    },
    {
      id: 3,
      projectTitle: "Identity Verification System",
      clientName: "SecureID Solutions",
      clientAvatar: "/placeholder.svg?height=40&width=40&text=SS",
      completedDate: "December 2024",
      amount: "$3,200",
      rating: 4,
      review:
        "John created a robust identity verification system for our platform. He was responsive to feedback and made adjustments quickly. The final product works great and our users love the seamless verification process.",
    },
    {
      id: 4,
      projectTitle: "Worldcoin Payment Integration",
      clientName: "PayWorld Finance",
      clientAvatar: "/placeholder.svg?height=40&width=40&text=PF",
      completedDate: "November 2024",
      amount: "$5,500",
      rating: 5,
      review:
        "Excellent work! John integrated Worldcoin payments into our existing platform flawlessly. The code is clean, well-documented, and performs exactly as required. We'll definitely work with him again.",
    },
  ],
  certifications: [
    {
      name: "Worldcoin Certified Developer",
      issuer: "Worldcoin Foundation",
      date: "2024",
      credential: "WCD-12345",
    },
    {
      name: "Advanced React Development",
      issuer: "Frontend Masters",
      date: "2023",
      credential: "ARD-67890",
    },
  ],
  services: [
    {
      id: 1,
      title: "Worldcoin Mini-App Development",
      description: "Custom mini-app development using the World App SDK, React, and Next.js.",
      price: "From $2,500",
      deliveryTime: "2-4 weeks",
      popular: true,
    },
    {
      id: 2,
      title: "World ID Integration",
      description: "Integrate World ID verification into your existing application.",
      price: "From $1,200",
      deliveryTime: "1-2 weeks",
      popular: false,
    },
    {
      id: 3,
      title: "Worldcoin Payment System",
      description: "Set up secure payment processing using Worldcoin.",
      price: "From $1,800",
      deliveryTime: "2-3 weeks",
      popular: false,
    },
  ],
}

export default function FreelancerProfilePage() {
  const params = useParams()
  const freelancerId = params.id as string
  const [isSaved, setIsSaved] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [showSaveSuccess, setShowSaveSuccess] = useState(false)

  // State for editable fields
  const [profileData, setProfileData] = useState(freelancerData)
  const [newSkill, setNewSkill] = useState("")
  const [newLanguage, setNewLanguage] = useState("")
  const [newEducation, setNewEducation] = useState({ degree: "", institution: "", years: "" })
  const [newCertification, setNewCertification] = useState({ name: "", issuer: "", date: "", credential: "" })
  const [newService, setNewService] = useState({
    title: "",
    description: "",
    price: "",
    deliveryTime: "",
    popular: false,
  })
  const [newPortfolioItem, setNewPortfolioItem] = useState({
    title: "",
    description: "",
    category: "",
    image: "/placeholder.svg?height=200&width=400&text=New+Project",
  })

  const handleSaveProfile = () => {
    // In a real app, this would save to a database
    setIsEditing(false)
    setShowSaveSuccess(true)
    setTimeout(() => setShowSaveSuccess(false), 3000)
  }

  const addSkill = () => {
    if (newSkill && !profileData.skills.includes(newSkill)) {
      setProfileData({
        ...profileData,
        skills: [...profileData.skills, newSkill],
      })
      setNewSkill("")
    }
  }

  const removeSkill = (skill: string) => {
    setProfileData({
      ...profileData,
      skills: profileData.skills.filter((s) => s !== skill),
    })
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

  const addEducation = () => {
    if (newEducation.degree && newEducation.institution) {
      setProfileData({
        ...profileData,
        education: [...profileData.education, newEducation],
      })
      setNewEducation({ degree: "", institution: "", years: "" })
    }
  }

  const removeEducation = (index: number) => {
    setProfileData({
      ...profileData,
      education: profileData.education.filter((_, i) => i !== index),
    })
  }

  const addCertification = () => {
    if (newCertification.name && newCertification.issuer) {
      setProfileData({
        ...profileData,
        certifications: [...profileData.certifications, newCertification],
      })
      setNewCertification({ name: "", issuer: "", date: "", credential: "" })
    }
  }

  const removeCertification = (index: number) => {
    setProfileData({
      ...profileData,
      certifications: profileData.certifications.filter((_, i) => i !== index),
    })
  }

  const addService = () => {
    if (newService.title && newService.description) {
      setProfileData({
        ...profileData,
        services: [
          ...profileData.services,
          {
            ...newService,
            id: profileData.services.length + 1,
          },
        ],
      })
      setNewService({ title: "", description: "", price: "", deliveryTime: "", popular: false })
    }
  }

  const removeService = (id: number) => {
    setProfileData({
      ...profileData,
      services: profileData.services.filter((service) => service.id !== id),
    })
  }

  const addPortfolioItem = () => {
    if (newPortfolioItem.title && newPortfolioItem.description) {
      setProfileData({
        ...profileData,
        portfolio: [
          ...profileData.portfolio,
          {
            ...newPortfolioItem,
            id: profileData.portfolio.length + 1,
          },
        ],
      })
      setNewPortfolioItem({
        title: "",
        description: "",
        category: "",
        image: "/placeholder.svg?height=200&width=400&text=New+Project",
      })
    }
  }

  const removePortfolioItem = (id: number) => {
    setProfileData({
      ...profileData,
      portfolio: profileData.portfolio.filter((item) => item.id !== id),
    })
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        {/* Top Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/find-talent" className="hover:text-foreground">
              Find Talent
            </Link>
            <span>/</span>
            <Link href="/find-talent?category=development" className="hover:text-foreground">
              Development
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
                          className={`h-5 w-5 ${i < profileData.rating ? "fill-primary text-primary" : "text-muted"}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 font-medium">{profileData.rating}.0</span>
                    <span className="ml-1 text-muted-foreground">({profileData.workHistory.length} reviews)</span>
                  </div>
                  <div className="grid grid-cols-3 w-full gap-2 mb-6 text-center">
                    <div className="flex flex-col">
                      <span className="font-bold">{profileData.completedProjects}</span>
                      <span className="text-xs text-muted-foreground">Projects</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold">{profileData.onTimeDelivery}%</span>
                      <span className="text-xs text-muted-foreground">On Time</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold">{profileData.responseRate}%</span>
                      <span className="text-xs text-muted-foreground">Response</span>
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
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3 px-6 pb-6 pt-0">
                {!isEditing && (
                  <>
                    <Button className="w-full" size="lg">
                      Contact Me
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
                              value={`https://orbtalent.com/freelancer-profile/${profileData.id}`}
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
                          Report this profile
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Report this profile</DialogTitle>
                          <DialogDescription>Please let us know why you're reporting this profile</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <h4 className="font-medium">Reason for reporting</h4>
                            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                              <option value="">Select a reason</option>
                              <option value="fake">Fake profile</option>
                              <option value="inappropriate">Inappropriate content</option>
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

            {/* Services Card */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>My Services</CardTitle>
                  <CardDescription>Packaged services I offer</CardDescription>
                </div>
                {isEditing && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const dialog = document.getElementById("add-service-dialog") as HTMLDialogElement
                      if (dialog) dialog.showModal()
                    }}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                {profileData.services.map((service) => (
                  <Card key={service.id} className={service.popular ? "border-primary" : ""}>
                    {service.popular && (
                      <div className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 absolute right-3 top-3 rounded">
                        Popular
                      </div>
                    )}
                    <CardContent className="p-4 pt-6">
                      {isEditing && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-2 h-6 w-6 text-muted-foreground hover:text-destructive"
                          onClick={() => removeService(service.id)}
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      )}
                      {isEditing ? (
                        <div className="space-y-2">
                          <Input
                            value={service.title}
                            onChange={(e) => {
                              const updatedServices = profileData.services.map((s) =>
                                s.id === service.id ? { ...s, title: e.target.value } : s,
                              )
                              setProfileData({ ...profileData, services: updatedServices })
                            }}
                            className="font-semibold text-lg"
                          />
                          <Textarea
                            value={service.description}
                            onChange={(e) => {
                              const updatedServices = profileData.services.map((s) =>
                                s.id === service.id ? { ...s, description: e.target.value } : s,
                              )
                              setProfileData({ ...profileData, services: updatedServices })
                            }}
                            className="text-sm text-muted-foreground mb-4 min-h-[80px]"
                          />
                          <div className="flex justify-between items-center">
                            <div className="space-y-2">
                              <Input
                                value={service.price}
                                onChange={(e) => {
                                  const updatedServices = profileData.services.map((s) =>
                                    s.id === service.id ? { ...s, price: e.target.value } : s,
                                  )
                                  setProfileData({ ...profileData, services: updatedServices })
                                }}
                                className="font-bold"
                              />
                              <Input
                                value={service.deliveryTime}
                                onChange={(e) => {
                                  const updatedServices = profileData.services.map((s) =>
                                    s.id === service.id ? { ...s, deliveryTime: e.target.value } : s,
                                  )
                                  setProfileData({ ...profileData, services: updatedServices })
                                }}
                                className="text-xs text-muted-foreground"
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <Label htmlFor={`popular-${service.id}`} className="text-sm">
                                Popular
                              </Label>
                              <input
                                type="checkbox"
                                id={`popular-${service.id}`}
                                checked={service.popular}
                                onChange={(e) => {
                                  const updatedServices = profileData.services.map((s) =>
                                    s.id === service.id ? { ...s, popular: e.target.checked } : s,
                                  )
                                  setProfileData({ ...profileData, services: updatedServices })
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                          <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-bold">{service.price}</p>
                              <p className="text-xs text-muted-foreground">{service.deliveryTime}</p>
                            </div>
                            <Button size="sm">View Details</Button>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                ))}

                {/* Add Service Dialog */}
                <dialog
                  id="add-service-dialog"
                  className="modal p-6 rounded-lg shadow-lg bg-background border max-w-md w-full"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-bold">Add New Service</h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          const dialog = document.getElementById("add-service-dialog") as HTMLDialogElement
                          if (dialog) dialog.close()
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <Label htmlFor="service-title">Title</Label>
                        <Input
                          id="service-title"
                          value={newService.title}
                          onChange={(e) => setNewService({ ...newService, title: e.target.value })}
                          placeholder="e.g., Worldcoin Mini-App Development"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="service-description">Description</Label>
                        <Textarea
                          id="service-description"
                          value={newService.description}
                          onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                          placeholder="Describe your service..."
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <Label htmlFor="service-price">Price</Label>
                          <Input
                            id="service-price"
                            value={newService.price}
                            onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                            placeholder="e.g., From $2,500"
                          />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="service-delivery">Delivery Time</Label>
                          <Input
                            id="service-delivery"
                            value={newService.deliveryTime}
                            onChange={(e) => setNewService({ ...newService, deliveryTime: e.target.value })}
                            placeholder="e.g., 2-4 weeks"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="service-popular"
                          checked={newService.popular}
                          onChange={(e) => setNewService({ ...newService, popular: e.target.checked })}
                        />
                        <Label htmlFor="service-popular">Mark as popular</Label>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 pt-2">
                      <Button
                        variant="outline"
                        onClick={() => {
                          const dialog = document.getElementById("add-service-dialog") as HTMLDialogElement
                          if (dialog) dialog.close()
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={() => {
                          addService()
                          const dialog = document.getElementById("add-service-dialog") as HTMLDialogElement
                          if (dialog) dialog.close()
                        }}
                        disabled={!newService.title || !newService.description}
                      >
                        Add Service
                      </Button>
                    </div>
                  </div>
                </dialog>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Languages</CardTitle>
                {isEditing && (
                  <div className="flex items-center gap-2">
                    <Input
                      value={newLanguage}
                      onChange={(e) => setNewLanguage(e.target.value)}
                      placeholder="Add language"
                      className="w-40 h-8"
                    />
                    <Button variant="outline" size="sm" onClick={addLanguage} disabled={!newLanguage}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {profileData.languages.map((language, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{language}</span>
                      </div>
                      {isEditing && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 text-muted-foreground hover:text-destructive"
                          onClick={() => removeLanguage(language)}
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Skills</CardTitle>
                {isEditing && (
                  <div className="flex items-center gap-2">
                    <Input
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      placeholder="Add skill"
                      className="w-40 h-8"
                    />
                    <Button variant="outline" size="sm" onClick={addSkill} disabled={!newSkill}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profileData.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                      {skill}
                      {isEditing && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-4 w-4 p-0 ml-1 text-muted-foreground hover:text-destructive hover:bg-transparent"
                          onClick={() => removeSkill(skill)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      )}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overview Card */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Overview</CardTitle>
                  <div className="flex items-center gap-2">
                    {isEditing ? (
                      <div className="space-y-2 w-full">
                        <div className="flex items-center gap-2">
                          <Label htmlFor="hourly-rate" className="whitespace-nowrap">
                            Hourly Rate:
                          </Label>
                          <Input
                            id="hourly-rate"
                            value={profileData.hourlyRate}
                            onChange={(e) =>
                              setProfileData({ ...profileData, hourlyRate: Number.parseInt(e.target.value) || 0 })
                            }
                            type="number"
                            className="w-24"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <Label htmlFor="availability" className="whitespace-nowrap">
                            Availability:
                          </Label>
                          <Input
                            id="availability"
                            value={profileData.availability}
                            onChange={(e) => setProfileData({ ...profileData, availability: e.target.value })}
                            className="w-48"
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <Badge variant="outline" className="font-normal">
                          <DollarSign className="h-3.5 w-3.5 mr-1" />${profileData.hourlyRate}/hr
                        </Badge>
                        <Badge variant="outline" className="font-normal">
                          <Clock className="h-3.5 w-3.5 mr-1" />
                          {profileData.availability}
                        </Badge>
                      </>
                    )}
                  </div>
                </div>
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

            {/* Tabs for Portfolio, Work History, etc. */}
            <Tabs defaultValue="portfolio" className="space-y-6">
              <TabsList className="grid grid-cols-4 w-full">
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="work-history">Work History</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="certifications">Certifications</TabsTrigger>
              </TabsList>

              {/* Portfolio Tab */}
              <TabsContent value="portfolio" className="space-y-6">
                {isEditing && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Add Portfolio Item</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="portfolio-title">Project Title</Label>
                            <Input
                              id="portfolio-title"
                              value={newPortfolioItem.title}
                              onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, title: e.target.value })}
                              placeholder="e.g., Worldcoin Event Ticketing App"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="portfolio-category">Category</Label>
                            <Input
                              id="portfolio-category"
                              value={newPortfolioItem.category}
                              onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, category: e.target.value })}
                              placeholder="e.g., Mini-App Development"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="portfolio-description">Description</Label>
                          <Textarea
                            id="portfolio-description"
                            value={newPortfolioItem.description}
                            onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, description: e.target.value })}
                            placeholder="Describe your project..."
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="portfolio-image">Image URL</Label>
                          <Input
                            id="portfolio-image"
                            value={newPortfolioItem.image}
                            onChange={(e) => setNewPortfolioItem({ ...newPortfolioItem, image: e.target.value })}
                            placeholder="Enter image URL or upload"
                          />
                          <p className="text-xs text-muted-foreground">Or upload an image (coming soon)</p>
                        </div>
                        <Button
                          onClick={addPortfolioItem}
                          disabled={!newPortfolioItem.title || !newPortfolioItem.description}
                        >
                          Add to Portfolio
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {profileData.portfolio.map((project) => (
                    <Card key={project.id} className="overflow-hidden">
                      <div className="aspect-video relative">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="object-cover w-full h-full"
                        />
                        {isEditing && (
                          <Button
                            variant="destructive"
                            size="icon"
                            className="absolute top-2 right-2 h-8 w-8 bg-background/80 hover:bg-background/90 text-foreground hover:text-destructive"
                            onClick={() => removePortfolioItem(project.id)}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <Badge variant="outline" className="mb-2">
                          {project.category}
                        </Badge>
                        <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                      </CardContent>
                      {!isEditing && (
                        <CardFooter className="p-4 pt-0 flex justify-end">
                          <Button variant="ghost" size="sm" className="gap-1">
                            View Details <ExternalLink className="h-4 w-4" />
                          </Button>
                        </CardFooter>
                      )}
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Work History Tab */}
              <TabsContent value="work-history" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Client Reviews</CardTitle>
                    <CardDescription>Feedback from previous clients</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {profileData.workHistory.map((project) => (
                      <div key={project.id} className="border-b pb-6 last:border-0 last:pb-0">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage src={project.clientAvatar} />
                            <AvatarFallback>
                              {project.clientName
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="space-y-2 flex-1">
                            <div>
                              <h3 className="font-medium">{project.clientName}</h3>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="h-3.5 w-3.5 mr-1" />
                                <span>{project.completedDate}</span>
                                <span className="mx-2">•</span>
                                <DollarSign className="h-3.5 w-3.5 mr-1" />
                                <span>{project.amount}</span>
                              </div>
                            </div>
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < project.rating ? "fill-primary text-primary" : "text-muted"}`}
                                />
                              ))}
                            </div>
                            <p className="text-sm">{project.review}</p>
                            <div className="flex items-center gap-2 pt-2">
                              <Badge variant="outline">{project.projectTitle}</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Education Tab */}
              <TabsContent value="education" className="space-y-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Education</CardTitle>
                      <CardDescription>Academic background and qualifications</CardDescription>
                    </div>
                    {isEditing && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const dialog = document.getElementById("add-education-dialog") as HTMLDialogElement
                          if (dialog) dialog.showModal()
                        }}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add
                      </Button>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {profileData.education.map((edu, index) => (
                      <div key={index} className="border-b pb-6 last:border-0 last:pb-0">
                        {isEditing ? (
                          <div className="flex justify-between">
                            <div className="space-y-2 flex-1">
                              <Input
                                value={edu.degree}
                                onChange={(e) => {
                                  const updatedEducation = [...profileData.education]
                                  updatedEducation[index] = { ...edu, degree: e.target.value }
                                  setProfileData({ ...profileData, education: updatedEducation })
                                }}
                                className="font-medium text-lg"
                              />
                              <Input
                                value={edu.institution}
                                onChange={(e) => {
                                  const updatedEducation = [...profileData.education]
                                  updatedEducation[index] = { ...edu, institution: e.target.value }
                                  setProfileData({ ...profileData, education: updatedEducation })
                                }}
                                className="text-muted-foreground"
                              />
                              <Input
                                value={edu.years}
                                onChange={(e) => {
                                  const updatedEducation = [...profileData.education]
                                  updatedEducation[index] = { ...edu, years: e.target.value }
                                  setProfileData({ ...profileData, education: updatedEducation })
                                }}
                                className="text-sm text-muted-foreground"
                              />
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-muted-foreground hover:text-destructive"
                              onClick={() => removeEducation(index)}
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        ) : (
                          <>
                            <h3 className="font-medium text-lg">{edu.degree}</h3>
                            <p className="text-muted-foreground">{edu.institution}</p>
                            <p className="text-sm text-muted-foreground">{edu.years}</p>
                          </>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Add Education Dialog */}
                <dialog
                  id="add-education-dialog"
                  className="modal p-6 rounded-lg shadow-lg bg-background border max-w-md w-full"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-bold">Add Education</h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          const dialog = document.getElementById("add-education-dialog") as HTMLDialogElement
                          if (dialog) dialog.close()
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <Label htmlFor="edu-degree">Degree</Label>
                        <Input
                          id="edu-degree"
                          value={newEducation.degree}
                          onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
                          placeholder="e.g., Bachelor of Science in Computer Science"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="edu-institution">Institution</Label>
                        <Input
                          id="edu-institution"
                          value={newEducation.institution}
                          onChange={(e) => setNewEducation({ ...newEducation, institution: e.target.value })}
                          placeholder="e.g., Stanford University"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="edu-years">Years</Label>
                        <Input
                          id="edu-years"
                          value={newEducation.years}
                          onChange={(e) => setNewEducation({ ...newEducation, years: e.target.value })}
                          placeholder="e.g., 2015 - 2019"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 pt-2">
                      <Button
                        variant="outline"
                        onClick={() => {
                          const dialog = document.getElementById("add-education-dialog") as HTMLDialogElement
                          if (dialog) dialog.close()
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={() => {
                          addEducation()
                          const dialog = document.getElementById("add-education-dialog") as HTMLDialogElement
                          if (dialog) dialog.close()
                        }}
                        disabled={!newEducation.degree || !newEducation.institution}
                      >
                        Add Education
                      </Button>
                    </div>
                  </div>
                </dialog>
              </TabsContent>

              {/* Certifications Tab */}
              <TabsContent value="certifications" className="space-y-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Certifications</CardTitle>
                      <CardDescription>Professional certifications and credentials</CardDescription>
                    </div>
                    {isEditing && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const dialog = document.getElementById("add-certification-dialog") as HTMLDialogElement
                          if (dialog) dialog.showModal()
                        }}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add
                      </Button>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {profileData.certifications.map((cert, index) => (
                      <div key={index} className="border-b pb-6 last:border-0 last:pb-0">
                        {isEditing ? (
                          <div className="flex justify-between">
                            <div className="space-y-2 flex-1">
                              <Input
                                value={cert.name}
                                onChange={(e) => {
                                  const updatedCertifications = [...profileData.certifications]
                                  updatedCertifications[index] = { ...cert, name: e.target.value }
                                  setProfileData({ ...profileData, certifications: updatedCertifications })
                                }}
                                className="font-medium text-lg"
                              />
                              <Input
                                value={cert.issuer}
                                onChange={(e) => {
                                  const updatedCertifications = [...profileData.certifications]
                                  updatedCertifications[index] = { ...cert, issuer: e.target.value }
                                  setProfileData({ ...profileData, certifications: updatedCertifications })
                                }}
                                className="text-muted-foreground"
                              />
                              <div className="flex justify-between items-center mt-2">
                                <Input
                                  value={cert.date}
                                  onChange={(e) => {
                                    const updatedCertifications = [...profileData.certifications]
                                    updatedCertifications[index] = { ...cert, date: e.target.value }
                                    setProfileData({ ...profileData, certifications: updatedCertifications })
                                  }}
                                  className="text-sm text-muted-foreground w-24"
                                  placeholder="Year"
                                />
                                <div className="flex items-center gap-2">
                                  <Input
                                    value={cert.credential}
                                    onChange={(e) => {
                                      const updatedCertifications = [...profileData.certifications]
                                      updatedCertifications[index] = { ...cert, credential: e.target.value }
                                      setProfileData({ ...profileData, certifications: updatedCertifications })
                                    }}
                                    className="font-mono text-sm w-32"
                                    placeholder="Credential ID"
                                  />
                                </div>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-muted-foreground hover:text-destructive"
                              onClick={() => removeCertification(index)}
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        ) : (
                          <>
                            <h3 className="font-medium text-lg">{cert.name}</h3>
                            <p className="text-muted-foreground">{cert.issuer}</p>
                            <div className="flex justify-between items-center mt-2">
                              <p className="text-sm text-muted-foreground">Issued: {cert.date}</p>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="font-mono">
                                  {cert.credential}
                                </Badge>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <Download className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Add Certification Dialog */}
                <dialog
                  id="add-certification-dialog"
                  className="modal p-6 rounded-lg shadow-lg bg-background border max-w-md w-full"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-bold">Add Certification</h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          const dialog = document.getElementById("add-certification-dialog") as HTMLDialogElement
                          if (dialog) dialog.close()
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <Label htmlFor="cert-name">Certification Name</Label>
                        <Input
                          id="cert-name"
                          value={newCertification.name}
                          onChange={(e) => setNewCertification({ ...newCertification, name: e.target.value })}
                          placeholder="e.g., Worldcoin Certified Developer"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="cert-issuer">Issuing Organization</Label>
                        <Input
                          id="cert-issuer"
                          value={newCertification.issuer}
                          onChange={(e) => setNewCertification({ ...newCertification, issuer: e.target.value })}
                          placeholder="e.g., Worldcoin Foundation"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <Label htmlFor="cert-date">Issue Date</Label>
                          <Input
                            id="cert-date"
                            value={newCertification.date}
                            onChange={(e) => setNewCertification({ ...newCertification, date: e.target.value })}
                            placeholder="e.g., 2024"
                          />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="cert-credential">Credential ID</Label>
                          <Input
                            id="cert-credential"
                            value={newCertification.credential}
                            onChange={(e) => setNewCertification({ ...newCertification, credential: e.target.value })}
                            placeholder="e.g., WCD-12345"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 pt-2">
                      <Button
                        variant="outline"
                        onClick={() => {
                          const dialog = document.getElementById("add-certification-dialog") as HTMLDialogElement
                          if (dialog) dialog.close()
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={() => {
                          addCertification()
                          const dialog = document.getElementById("add-certification-dialog") as HTMLDialogElement
                          if (dialog) dialog.close()
                        }}
                        disabled={!newCertification.name || !newCertification.issuer}
                      >
                        Add Certification
                      </Button>
                    </div>
                  </div>
                </dialog>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

