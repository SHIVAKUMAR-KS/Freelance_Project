import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-12">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

