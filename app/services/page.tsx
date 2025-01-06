import { SiteHeader } from "@/components/site-header"
import { ServicesSection } from "@/components/services-section"
import { SiteFooter } from "@/components/site-footer"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        </div>
        <ServicesSection />
      </main>
      <SiteFooter />
    </div>
  )
}

