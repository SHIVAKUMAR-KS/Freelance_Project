import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle } from 'lucide-react'

export function NewsletterSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-900" />
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center text-white space-y-8">
          <p className="text-sm font-medium">1% OF THE INDUSTRY</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Welcome to your new digital reality. Now.
          </h2>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter Your Email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Button className="bg-white text-blue-900 hover:bg-white/90">
              Submit
            </Button>
          </form>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Instant results</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>User-friendly interface</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Personalized customization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

