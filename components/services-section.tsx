import Link from "next/link"
import { Building2, FileText, Building, ClipboardCheck, WalletCards, BookOpen } from 'lucide-react'
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Building2,
    title: "Company Formation",
    description: "Build web-based solutions that enhance customer experience.",
    href: "/services/company-formation"
  },
  {
    icon: FileText,
    title: "Company Secretarial Services",
    description: "Make data-driven decisions and utilize technology to reach business goals.",
    href: "/services/secretarial-services"
  },
  {
    icon: Building,
    title: "Virtual Office Address",
    description: "Foster customer relationships by effectively serving your market.",
    href: "/services/virtual-office"
  },
  {
    icon: ClipboardCheck,
    title: "Annual Compliance Services",
    description: "Turn your ideas into modern products with our design experts.",
    href: "/services/annual-compliance"
  },
  {
    icon: WalletCards,
    title: "Payroll Services",
    description: "Expand your business across the globe with minimal effort.",
    href: "/services/payroll"
  },
  {
    icon: BookOpen,
    title: "Bookkeeping Services",
    description: "Steering user behaviours with creative design, data insights & technology.",
    href: "/services/bookkeeping"
  }
]

export function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <p className="text-orange-500 font-medium">WELCOME TO REGISTER KARO App</p>
          <h2 className="text-3xl font-bold">Explore Our Services</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={index}
                className="group relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <div className="inline-block p-3 rounded-lg bg-orange-100 text-orange-500">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-500 mb-4">{service.description}</p>
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium text-orange-500 hover:text-orange-600"
                >
                  Learn more →
                </Link>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            See All Services
          </Button>
        </div>
      </div>
    </section>
  )
}

