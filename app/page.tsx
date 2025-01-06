import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { PartnersSection } from "@/components/partners-section"
import { ServicesSection } from "@/components/services-section"
import { BlogsSection } from "@/components/blogs-section"
import { FaqSection } from "@/components/faq-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { BrandLogos } from "@/components/brand-logos"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <PartnersSection />
        <ServicesSection />
        <BlogsSection />
        <FaqSection />
        <NewsletterSection />
        <BrandLogos />
      </main>
      <SiteFooter />
    </div>
  )
}

