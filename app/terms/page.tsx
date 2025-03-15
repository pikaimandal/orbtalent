import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-8 max-w-3xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: March 1, 2025</p>
        </div>

        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p>
            Welcome to ORB Talent. These Terms of Service ("Terms") govern your access to and use of the ORB Talent
            website, services, and applications (collectively, the "Service"). Please read these Terms carefully before
            using the Service.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you do
            not agree to these Terms, you may not access or use the Service.
          </p>

          <h2>2. Changes to Terms</h2>
          <p>
            We may modify these Terms at any time. If we make changes, we will provide notice of such changes, such as
            by sending an email notification, providing notice through the Service, or updating the "Last Updated" date
            at the beginning of these Terms. Your continued use of the Service following notification of changes will
            constitute your acceptance of such changes.
          </p>

          <h2>3. Account Registration and Security</h2>
          <p>
            To use certain features of the Service, you must register for an account. You agree to provide accurate,
            current, and complete information during the registration process and to update such information to keep it
            accurate, current, and complete. You are responsible for safeguarding your password and for all activities
            that occur under your account.
          </p>

          <h2>4. World ID Verification</h2>
          <p>
            ORB Talent requires World ID verification for all users. By using our Service, you agree to complete the
            World ID verification process, which involves using the World App to verify your identity. You understand
            that this verification is essential to ensure the security and integrity of our platform.
          </p>

          <h2>5. User Conduct</h2>
          <p>You agree not to engage in any of the following prohibited activities:</p>
          <ul>
            <li>Violating any applicable law, contract, intellectual property right, or other third-party right</li>
            <li>Creating multiple accounts or false identities</li>
            <li>Attempting to circumvent the World ID verification process</li>
            <li>Posting or transmitting harmful, fraudulent, or deceptive content</li>
            <li>Engaging in any activity that interferes with or disrupts the Service</li>
            <li>Scraping, data mining, or otherwise collecting information from the Service without our consent</li>
            <li>Using the Service for any illegal or unauthorized purpose</li>
          </ul>

          <h2>6. Freelancer Services</h2>
          <p>
            ORB Talent is a platform that connects clients with freelancers who provide Worldcoin mini-app development
            services. We do not guarantee the quality, safety, or legality of services offered by freelancers. Clients
            are solely responsible for evaluating freelancers before engaging their services.
          </p>

          <h2>7. Fees and Payment</h2>
          <p>
            ORB Talent charges a service fee for completed projects. The fee is calculated as a percentage of the total
            project value. All fees are clearly displayed before a transaction is completed. You agree to pay all fees
            and charges associated with your account on a timely basis.
          </p>

          <h2>8. Intellectual Property Rights</h2>
          <p>
            The Service and its original content, features, and functionality are owned by ORB Talent and are protected
            by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary
            rights laws.
          </p>

          <h2>9. User Content</h2>
          <p>
            You retain all rights to any content you submit, post, or display on or through the Service ("User
            Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use,
            reproduce, modify, adapt, publish, translate, and distribute such content in connection with providing the
            Service.
          </p>

          <h2>10. Termination</h2>
          <p>
            We may terminate or suspend your account and access to the Service immediately, without prior notice or
            liability, for any reason, including if you breach these Terms. Upon termination, your right to use the
            Service will immediately cease.
          </p>

          <h2>11. Disclaimer of Warranties</h2>
          <p>
            THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. ORB TALENT EXPRESSLY DISCLAIMS ALL
            WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>

          <h2>12. Limitation of Liability</h2>
          <p>
            IN NO EVENT SHALL ORB TALENT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
            DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES,
            RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE.
          </p>

          <h2>13. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of California,
            without regard to its conflict of law provisions.
          </p>

          <h2>14. Dispute Resolution</h2>
          <p>
            Any dispute arising from or relating to these Terms or the Service shall be resolved through binding
            arbitration in San Francisco, California, in accordance with the rules of the American Arbitration
            Association.
          </p>

          <h2>15. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at legal@orbtalent.com.</p>
        </div>

        <div className="flex justify-between items-center border-t pt-6">
          <Button variant="outline" asChild>
            <Link href="/">Return to Home</Link>
          </Button>
          <div className="flex gap-4">
            <Button variant="ghost" asChild>
              <Link href="/privacy">Privacy Policy</Link>
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

