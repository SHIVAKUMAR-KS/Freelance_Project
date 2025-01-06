import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="container relative">
      <div className="grid lg:grid-cols-2 gap-8 py-12">
        <div className="flex flex-col justify-center space-y-8">
          <div className="flex items-center space-x-1">
            <span className="text-sm">Google Rating</span>
            {Array(5).fill(null).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Your trusted partner<br />
              for compliance business needs
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl">
              An online business compliance platform that helps entrepreneurs and other individuals with various,{" "}
              <span className="font-medium text-gray-900">registrations, tax filings</span>, and other{" "}
              <span className="font-medium text-gray-900">legal matters</span>.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-gray-100">
                <span className="text-xl font-bold">4.5+</span>
              </div>
              <div className="text-sm">
                <p className="font-medium">Customer Rating</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-gray-100">
                <span className="text-xl font-bold">20k+</span>
              </div>
              <div className="text-sm">
                <p className="font-medium">Clients</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-gray-100">
                <span className="text-xl font-bold">98.8%</span>
              </div>
              <div className="text-sm">
                <p className="font-medium">Financial Stability</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Talk An Expert
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              See how it works
            </Button>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <img
              src="https://th.bing.com/th/id/OIP.5ls0B59RrfAupuRX1NZRdQHaE7?w=5705&h=3803&rs=1&pid=ImgDetMain"
              alt="Business Illustration"
              className="w-full max-w-[600px]"
              width={600}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

