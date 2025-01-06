import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <div className="prose max-w-none">
            <p>RegisterKaro is a leading online business compliance platform that helps entrepreneurs and individuals navigate the complex world of business registrations, tax filings, and legal matters.</p>
            <p>Our mission is to simplify the process of starting and running a business, providing our clients with the tools and expertise they need to succeed in today's competitive marketplace.</p>
            <h2>Our Values</h2>
            <ul>
              <li>Customer-First Approach</li>
              <li>Integrity and Transparency</li>
              <li>Innovation and Continuous Improvement</li>
              <li>Expertise and Professionalism</li>
            </ul>
            <p>With a team of experienced professionals and cutting-edge technology, we strive to deliver exceptional service and support to businesses of all sizes across India.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

