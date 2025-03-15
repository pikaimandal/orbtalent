import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, HelpCircle, FileText, MessageSquare, Shield } from "lucide-react"
import Link from "next/link"

export default function HelpCenterPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Help Center</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to your questions about using ORB Talent
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search for help articles..." className="pl-12 py-6 text-lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: HelpCircle, title: "Getting Started", description: "Learn the basics of ORB Talent" },
            { icon: FileText, title: "Account & Billing", description: "Manage your account and payments" },
            {
              icon: MessageSquare,
              title: "Projects & Collaboration",
              description: "Work effectively with clients and freelancers",
            },
            { icon: Shield, title: "Safety & Security", description: "Stay secure on our platform" },
            {
              icon: MessageSquare,
              title: "World ID Verification",
              description: "Learn about our verification process",
            },
            { icon: FileText, title: "Policies & Guidelines", description: "Understand our platform rules" },
          ].map((category, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-primary hover:underline">
                        {category.title === "Getting Started" &&
                          `How to ${item === 1 ? "create an account" : item === 2 ? "verify with World ID" : "post your first project"}`}
                        {category.title === "Account & Billing" &&
                          `${item === 1 ? "Payment methods" : item === 2 ? "Subscription plans" : "Invoices and receipts"}`}
                        {category.title === "Projects & Collaboration" &&
                          `${item === 1 ? "Messaging system" : item === 2 ? "Milestone tracking" : "File sharing"}`}
                        {category.title === "Safety & Security" &&
                          `${item === 1 ? "Account security" : item === 2 ? "Dispute resolution" : "Fraud prevention"}`}
                        {category.title === "World ID Verification" &&
                          `${item === 1 ? "Verification process" : item === 2 ? "Troubleshooting verification" : "Benefits of verification"}`}
                        {category.title === "Policies & Guidelines" &&
                          `${item === 1 ? "Terms of service" : item === 2 ? "Privacy policy" : "Community guidelines"}`}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <Tabs defaultValue="general">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
            </TabsList>
            <TabsContent value="general" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>Common questions about using ORB Talent</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {[
                      {
                        question: "What is ORB Talent?",
                        answer:
                          "ORB Talent is a freelancing platform that connects verified Worldcoin mini-app developers with clients. Our platform ensures that all users are verified with World ID, creating a secure and trusted environment for collaboration.",
                      },
                      {
                        question: "How does World ID verification work?",
                        answer:
                          "World ID verification uses the Worldcoin protocol to verify that you are a unique human. During the verification process, you'll need to use the World App to scan your iris, which creates a unique identifier without storing your biometric data.",
                      },
                      {
                        question: "Is ORB Talent free to use?",
                        answer:
                          "Creating an account on ORB Talent is free. We charge a service fee on completed projects, which helps us maintain the platform and provide support to our users.",
                      },
                      {
                        question: "How do I get paid as a freelancer?",
                        answer:
                          "Payments are processed through our secure payment system. Once a client approves your work, the funds are released to your account. You can then withdraw the funds to your preferred payment method.",
                      },
                      {
                        question: "What happens if there's a dispute with a client or freelancer?",
                        answer:
                          "We have a dedicated dispute resolution process. If you encounter an issue, you can contact our support team, who will review the case and help mediate a resolution between both parties.",
                      },
                    ].map((faq, i) => (
                      <AccordionItem key={i} value={`item-${i}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="account" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account FAQs</CardTitle>
                  <CardDescription>Questions about your ORB Talent account</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {[
                      {
                        question: "How do I create an account?",
                        answer:
                          "To create an account, click on the 'Join' button in the top right corner of the homepage. You'll need to provide your email, create a password, and complete the World ID verification process.",
                      },
                      {
                        question: "Can I have both a client and freelancer account?",
                        answer:
                          "Yes, you can switch between client and freelancer modes in your account settings. This allows you to both hire talent and offer your services on the platform.",
                      },
                      {
                        question: "How do I reset my password?",
                        answer:
                          "If you've forgotten your password, click on the 'Forgot password?' link on the sign-in page. You'll receive an email with instructions to reset your password.",
                      },
                      {
                        question: "Can I delete my account?",
                        answer:
                          "Yes, you can delete your account in your account settings. Please note that this action is permanent and will remove all your data from our platform.",
                      },
                      {
                        question: "How do I update my profile information?",
                        answer:
                          "You can update your profile information by going to your profile page and clicking on the 'Edit Profile' button. From there, you can update your personal information, skills, and portfolio.",
                      },
                    ].map((faq, i) => (
                      <AccordionItem key={i} value={`item-${i}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="payments" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Payment FAQs</CardTitle>
                  <CardDescription>Questions about payments on ORB Talent</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {[
                      {
                        question: "What payment methods are accepted?",
                        answer:
                          "We accept major credit cards, PayPal, and bank transfers. We also support cryptocurrency payments, including Worldcoin.",
                      },
                      {
                        question: "How does the escrow system work?",
                        answer:
                          "When a client hires a freelancer, the payment is held in escrow. Once the work is completed and approved by the client, the funds are released to the freelancer. This protects both parties during the transaction.",
                      },
                      {
                        question: "What are the platform fees?",
                        answer:
                          "We charge a 10% service fee on all completed projects. This fee helps us maintain the platform, provide customer support, and develop new features.",
                      },
                      {
                        question: "How long does it take to receive payment?",
                        answer:
                          "Once a client approves your work, the funds are released to your account immediately. Withdrawal processing times vary depending on your chosen payment method, typically 1-5 business days.",
                      },
                      {
                        question: "What happens if a client doesn't pay?",
                        answer:
                          "Our escrow system ensures that clients deposit funds before work begins. If there's a dispute about the quality of work, our support team will review the case and help mediate a resolution.",
                      },
                    ].map((faq, i) => (
                      <AccordionItem key={i} value={`item-${i}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="projects" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project FAQs</CardTitle>
                  <CardDescription>Questions about projects on ORB Talent</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {[
                      {
                        question: "How do I post a project?",
                        answer:
                          "To post a project, go to your dashboard and click on the 'Post a Project' button. Fill in the project details, including title, description, budget, and required skills, then submit it for freelancers to see.",
                      },
                      {
                        question: "How do I find the right freelancer?",
                        answer:
                          "You can browse freelancer profiles, use our search filters to narrow down by skills and experience, and review ratings and portfolios. You can also post your project and wait for proposals from interested freelancers.",
                      },
                      {
                        question: "Can I modify a project after posting it?",
                        answer:
                          "Yes, you can edit your project details as long as no freelancer has been hired yet. Once a freelancer is hired, any changes should be discussed and agreed upon with them.",
                      },
                      {
                        question: "How do milestones work?",
                        answer:
                          "Milestones allow you to break down a project into manageable parts. Each milestone has its own deliverables and payment amount. This helps track progress and ensures both parties are aligned on expectations.",
                      },
                      {
                        question: "What if I'm not satisfied with the work?",
                        answer:
                          "If you're not satisfied with the work, you should first communicate your concerns with the freelancer. Most issues can be resolved through clear communication. If needed, our support team can help mediate a resolution.",
                      },
                    ].map((faq, i) => (
                      <AccordionItem key={i} value={`item-${i}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="bg-muted rounded-lg p-8 text-center space-y-4 mt-8">
          <h2 className="text-2xl font-bold">Still Need Help?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our support team is available to assist you with any questions or issues you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <Button asChild size="lg">
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/community">Ask the Community</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

