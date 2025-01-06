import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function TechInnovateSolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="text-4xl font-bold mb-8">TechInnovate Solutions</h1>
          <div className="prose max-w-none">
            <p>TechInnovate Solutions is a cutting-edge technology company specializing in innovative software solutions for businesses of all sizes.</p>
            <h2>Company Details</h2>
            <ul>
              <li>Founded: 2015</li>
              <li>Headquarters: Bangalore, India</li>
              <li>Employees: 250+</li>
              <li>Industry: Information Technology</li>
            </ul>
            <h2>Directors</h2>
            <ul>
              <li>Rajesh Sharma - CEO</li>
              <li>Priya Patel - CTO</li>
              <li>Amit Verma - CFO</li>
            </ul>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

