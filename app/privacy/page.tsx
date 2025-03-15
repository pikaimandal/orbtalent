import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-8 max-w-3xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: March 1, 2025</p>
        </div>

        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p>
            At ORB Talent, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you use our website, services, and applications (collectively, the
            "Service").
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, information we collect automatically when you use
            the Service, and information from third-party sources.
          </p>

          <h3>1.1 Information You Provide</h3>
          <p>
            We collect information you provide when you register for an account, complete your profile, post projects,
            submit proposals, communicate with other users, make payments, or otherwise use the Service. This
            information may include:
          </p>
          <ul>
            <li>Personal information, such as your name, email address, and phone number</li>
            <li>Profile information, such as your skills, experience, and portfolio</li>
            <li>Payment information, such as your credit card details or bank account information</li>
            <li>Communications you send to us or through the Service</li>
            <li>World ID verification data, which is processed in accordance with Worldcoin's privacy practices</li>
          </ul>

          <h3>1.2 Information We Collect Automatically</h3>
          <p>When you use the Service, we automatically collect certain information, including:</p>
          <ul>
            <li>Log information, such as your IP address, browser type, operating system, and pages visited</li>
            <li>Device information, such as your device type, model, and operating system</li>
            <li>Usage information, such as your interactions with the Service</li>
            <li>Location information, such as your general geographic location based on your IP address</li>
            <li>Cookies and similar technologies, as described in our Cookie Policy</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect for various purposes, including:</p>
          <ul>
            <li>Providing, maintaining, and improving the Service</li>
            <li>Processing transactions and sending related information</li>
            <li>Verifying your identity through World ID</li>
            <li>Connecting clients with freelancers</li>
            <li>Sending you technical notices, updates, security alerts, and support messages</li>
            <li>Responding to your comments, questions, and requests</li>
            <li>Monitoring and analyzing trends, usage, and activities in connection with the Service</li>
            <li>Detecting, investigating, and preventing fraudulent transactions and other illegal activities</li>
            <li>Personalizing and improving the Service</li>
            <li>Facilitating contests, sweepstakes, and promotions</li>
          </ul>

          <h2>3. How We Share Your Information</h2>
          <p>We may share your information in the following circumstances:</p>
          <ul>
            <li>
              With other users of the Service as necessary to provide the Service (e.g., sharing freelancer profiles
              with clients)
            </li>
            <li>
              With vendors, consultants, and other service providers who need access to such information to carry out
              work on our behalf
            </li>
            <li>
              In response to a request for information if we believe disclosure is in accordance with any applicable
              law, regulation, or legal process
            </li>
            <li>
              If we believe your actions are inconsistent with our user agreements or policies, or to protect the
              rights, property, and safety of ORB Talent or others
            </li>
            <li>
              In connection with, or during negotiations of, any merger, sale of company assets, financing, or
              acquisition of all or a portion of our business by another company
            </li>
            <li>With your consent or at your direction</li>
          </ul>

          <h2>4. Data Retention</h2>
          <p>
            We retain your information for as long as necessary to provide the Service and fulfill the purposes outlined
            in this Privacy Policy, unless a longer retention period is required or permitted by law.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized
            access, disclosure, alteration, and destruction. However, no security system is impenetrable, and we cannot
            guarantee the security of our systems.
          </p>

          <h2>6. Your Rights and Choices</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
          <ul>
            <li>Accessing, correcting, or deleting your personal information</li>
            <li>Objecting to our processing of your personal information</li>
            <li>Requesting that we restrict processing of your personal information</li>
            <li>Requesting portability of your personal information</li>
            <li>Opting out of marketing communications</li>
          </ul>
          <p>To exercise these rights, please contact us at privacy@orbtalent.com.</p>

          <h2>7. International Data Transfers</h2>
          <p>
            We may transfer your personal information to countries other than the one in which you live. We rely on
            appropriate safeguards to transfer personal information across borders, such as standard contractual
            clauses.
          </p>

          <h2>8. Children's Privacy</h2>
          <p>
            The Service is not directed to children under the age of 18, and we do not knowingly collect personal
            information from children under 18. If we learn that we have collected personal information from a child
            under 18, we will promptly delete that information.
          </p>

          <h2>9. Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. If we make material changes, we will notify you by
            email or through the Service prior to the changes becoming effective.
          </p>

          <h2>10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at privacy@orbtalent.com.</p>
        </div>

        <div className="flex justify-between items-center border-t pt-6">
          <Button variant="outline" asChild>
            <Link href="/">Return to Home</Link>
          </Button>
          <div className="flex gap-4">
            <Button variant="ghost" asChild>
              <Link href="/terms">Terms of Service</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/cookies">Cookie Policy</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

