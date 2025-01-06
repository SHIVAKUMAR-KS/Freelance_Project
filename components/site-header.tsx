import Link from "next/link"
import { Search } from 'lucide-react'

import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Register Karo</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-between space-x-2">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
              Our Services
            </Link>
            <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact Us
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About us
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="default" className="bg-orange-500 hover:bg-orange-600">
              Talk An Expert
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

