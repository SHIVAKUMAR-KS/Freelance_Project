export function PartnersSection() {
  return (
    <section className="border-t bg-gray-50/50">
      <div className="container py-12">
        <h2 className="text-center text-lg font-medium mb-8">
          Trusted By Over 100+ Startups and freelance business
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {[
            { name: "Oracle", logo: "/placeholder.svg?height=40&width=120" },
            { name: "Morpheus", logo: "/placeholder.svg?height=40&width=120" },
            { name: "Morpheus", logo: "/placeholder.svg?height=40&width=120" },
            { name: "Samsung", logo: "/placeholder.svg?height=40&width=120" },
            { name: "Monday.com", logo: "/placeholder.svg?height=40&width=120" },
            { name: "Segment", logo: "/placeholder.svg?height=40&width=120" },
          ].map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-10 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

