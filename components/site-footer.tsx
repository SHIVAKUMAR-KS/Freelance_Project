'use client'
import Link from "next/link"
import { Facebook, Instagram, Apple, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"

const footerLinks = {
  "START A BUSINESS": [
    { name: "Features", href: "#" },
    { name: "Solutions", href: "#" },
    { name: "Integrations", href: "#" },
    { name: "Enterprise", href: "#" },
    { name: "Business Solutions", href: "#" }, // Changed from "Solutions" to "Business Solutions"
  ],
  "GOVERNMENT REGISTRATION": [
    { name: "Partners", href: "#" },
    { name: "Community", href: "#" },
    { name: "Developers", href: "#" },
    { name: "App", href: "#" },
    { name: "Blog", href: "#" },
  ],
  "COMPLIANCE & TAX": [
    { name: "Channels", href: "#" },
    { name: "Scale", href: "#" },
    { name: "Watch the Demo", href: "#" },
    { name: "Our Competition", href: "#" },
  ],
  "BIS & CIS/CO": [
    { name: "About Us", href: "#" },
    { name: "News", href: "#" },
    { name: "Leadership", href: "#" },
    { name: "Media Kit", href: "#" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <p className="text-sm leading-loose">
              Design outstanding interfaces with advanced Figma features in a matter of minutes.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Link href="#" className="hover:text-orange-500">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-orange-500">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-orange-500">
                <Apple className="h-5 w-5" />
              </Link>
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-semibold text-orange-500">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm hover:text-orange-500">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-6 flex justify-center items-center  ">
          <p className="text-sm text-white/60 text-center items-center">
            © 2024 RegisterKaro. All Rights Reserved.
          </p>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-orange-500"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  )
}

