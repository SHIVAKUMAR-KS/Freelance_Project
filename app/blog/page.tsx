import { SiteHeader } from "@/components/site-header"
import { BlogsSection } from "@/components/blogs-section"
import { SiteFooter } from "@/components/site-footer"

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
        </div>
        <BlogsSection />
      </main>
      <SiteFooter />
    </div>
  )
}

