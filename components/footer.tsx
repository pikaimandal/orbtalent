import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">O</span>
            </span>
            <span className="font-bold text-xl">ORB Talent</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            The premier platform for Worldcoin mini-app development services.
          </p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div>
          <h3 className="font-medium text-lg mb-4">For Clients</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/find-talent" className="text-sm text-muted-foreground hover:text-foreground">
                Find Talent
              </Link>
            </li>
            <li>
              <Link href="/post-project" className="text-sm text-muted-foreground hover:text-foreground">
                Post a Project
              </Link>
            </li>
            <li>
              <Link href="/how-it-works/clients" className="text-sm text-muted-foreground hover:text-foreground">
                How it Works
              </Link>
            </li>
            <li>
              <Link href="/success-stories" className="text-sm text-muted-foreground hover:text-foreground">
                Success Stories
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-lg mb-4">For Freelancers</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/find-work" className="text-sm text-muted-foreground hover:text-foreground">
                Find Work
              </Link>
            </li>
            <li>
              <Link href="/create-profile" className="text-sm text-muted-foreground hover:text-foreground">
                Create Profile
              </Link>
            </li>
            <li>
              <Link href="/how-it-works/freelancers" className="text-sm text-muted-foreground hover:text-foreground">
                How it Works
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-sm text-muted-foreground hover:text-foreground">
                Resources
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-lg mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/help-center" className="text-sm text-muted-foreground hover:text-foreground">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/community" className="text-sm text-muted-foreground hover:text-foreground">
                Community
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-12 pt-6 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} ORB Talent. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

