import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CookiesPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col gap-8 max-w-3xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Cookie Policy</h1>
          <p className="text-muted-foreground">Last updated: March 1, 2025</p>
        </div>

        <div className="prose prose-sm dark:prose-invert max-w-none">
          <p>
            This Cookie Policy explains how ORB Talent ("we", "us", or "our") uses cookies and similar technologies to
            recognize you when you visit our website and use our services (collectively, the "Service"). It explains
            what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <h2>1. What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website.
            They contain information that is transferred to your device and allow the website to remember your actions
            and preferences over time. Cookies are widely used by website owners to make their websites work
            efficiently, improve user experience, and provide certain functionality.
          </p>

          <h2>2. Why do we use cookies?</h2>
          <p>We use cookies for several reasons:</p>
          <ul>
            <li>To enable certain functions of the Service</li>
            <li>To provide analytics and understand how you use our Service</li>
            <li>To store your preferences</li>
            <li>To enable advertisements delivery, including behavioral advertising</li>
            <li>To help us improve and secure the Service</li>
          </ul>

          <h2>3. Types of cookies we use</h2>
          <p>The cookies we use can be categorized as follows:</p>

          <h3>3.1 Essential cookies</h3>
          <p>
            These cookies are necessary for the Service to function properly. They enable core functionality such as
            security, network management, and account authentication. You may not opt-out of these cookies as the
            Service would not function properly without them.
          </p>

          <h3>3.2 Performance and analytics cookies</h3>
          <p>
            These cookies allow us to count visits and traffic sources so we can measure and improve the performance of
            our Service. They help us know which pages are the most and least popular and see how visitors move around
            the Service.
          </p>

          <h3>3.3 Functionality cookies</h3>
          <p>
            These cookies enable the Service to provide enhanced functionality and personalization. They may be set by
            us or by third-party providers whose services we have added to our pages.
          </p>

          <h3>3.4 Targeting and advertising cookies</h3>
          <p>
            These cookies are used to make advertising messages more relevant to you. They perform functions like
            preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some
            cases selecting advertisements that are based on your interests.
          </p>

          <h3>3.5 Social media cookies</h3>
          <p>
            These cookies are set by social media services that we have added to the Service to enable you to share our
            content with your friends and networks. They are capable of tracking your browser across other sites and
            building a profile of your interests, which may impact the content and messages you see on other websites
            you visit.
          </p>

          <h2>4. How can you control cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences
            as follows:
          </p>
          <ul>
            <li>
              <strong>Browser settings:</strong> Most web browsers allow you to manage your cookie preferences. You can
              set your browser to refuse cookies or delete certain cookies. Generally, you can also manage similar
              technologies in the same way that you manage cookies using your browser's preferences.
            </li>
            <li>
              <strong>Our cookie preference center:</strong> You can manage your cookie preferences through our cookie
              preference center, which you can access via the "Cookie Settings" link in the footer of our website.
            </li>
            <li>
              <strong>Opt-out of specific third-party cookies:</strong> For cookies that are used for advertising
              purposes, you can also opt out via industry association websites:
              <ul>
                <li>
                  Digital Advertising Alliance (DAA):{" "}
                  <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
                    http://www.aboutads.info/choices/
                  </a>
                </li>
                <li>
                  European Interactive Digital Advertising Alliance (EDAA):{" "}
                  <a href="http://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer">
                    http://www.youronlinechoices.eu/
                  </a>
                </li>
                <li>
                  Network Advertising Initiative (NAI):{" "}
                  <a href="http://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">
                    http://optout.networkadvertising.org/
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <p>
            Please note that if you choose to reject cookies, you may not be able to use the full functionality of the
            Service. In addition, the opt-out mechanisms described above use cookies to remember your choices, so if you
            delete your cookies, you will need to opt out again.
          </p>

          <h2>5. How often will we update this Cookie Policy?</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our
            business practices. Any changes will become effective when we post the revised Cookie Policy on our website.
            We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies.
          </p>

          <h2>6. Contact us</h2>
          <p>
            If you have any questions about our use of cookies or this Cookie Policy, please contact us at
            privacy@orbtalent.com.
          </p>
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
              <Link href="/privacy">Privacy Policy</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

