import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function GlobalHealthDynamicsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="text-4xl font-bold mb-8">GlobalHealth Dynamics</h1>
          <div className="prose max-w-none">
            <p>GlobalHealth Dynamics is an international healthcare company dedicated to improving global health through innovative medical technologies and services.</p>
            <h2>Company Details</h2>
            <ul>
              <li>Founded: 2008</li>
              <li>Headquarters: Delhi, India</li>
              <li>Employees: 1000+</li>
              <li>Industry: Healthcare</li>
            </ul>
            <h2>Directors</h2>
            <ul>
              <li>Dr. Arun Kumar - CEO</li>
              <li>Dr. Meera Gupta - Chief Medical Officer</li>
              <li>Rahul Malhotra - CFO</li>
            </ul>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

