import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function GreenEcoEnterprisesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="text-4xl font-bold mb-8">GreenEco Enterprises</h1>
          <div className="prose max-w-none">
            <p>GreenEco Enterprises is a leading sustainable energy company committed to developing eco-friendly solutions for a greener future.</p>
            <h2>Company Details</h2>
            <ul>
              <li>Founded: 2010</li>
              <li>Headquarters: Mumbai, India</li>
              <li>Employees: 500+</li>
              <li>Industry: Renewable Energy</li>
            </ul>
            <h2>Directors</h2>
            <ul>
              <li>Anita Desai - CEO</li>
              <li>Vikram Singh - COO</li>
              <li>Sunita Reddy - Chief Sustainability Officer</li>
            </ul>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

