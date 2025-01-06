import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const blogs = [
  {
    author: "Prabhash Mishra",
    date: "1 Jan 2023",
    readTime: "2-14",
    title: "Small business & Startup",
    description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    image: "https://d6xcmfyh68wv8.cloudfront.net/blog-content/uploads/2022/12/startup-ideas.png",
    tags: ["Tax & Audit", "Management"],
    href: "/blog/small-business-startup"
  },
  {
    author: "Mahesh Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description: "Mental models are simple expressions of complex processes or relationships.",
    image: "https://c8.alamy.com/comp/PXEWNE/startup-business-concept-ready-to-use-vector-suitable-for-background-wallpaper-landing-page-web-banner-and-other-creative-work-PXEWNE.jpg",
    tags: ["Tax", "Research", "Compliance"],
    href: "/blog/scale-up-company-offer-1"
  },
  {
    author: "Rakhi Verma",
    date: "1 Jan 2023",
    title: "Growing Business Package",
    description: "Introduction to Wireframing and its Principles. Learn from the best in the Industry.",
    image: "https://cdn.pixabay.com/photo/2019/03/02/11/23/startup-4029671_1280.jpg",
    tags: ["Audit", "Money Back"],
    href: "/blog/growing-business-package"
  },
  {
    author: "Karan Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description: "Collaboration can make our teams stronger, and our individual designs better.",
    image: "https://suntrics.com/wp-content/uploads/2022/08/Ways-Of-Reducing-Startup-Costs.jpg",
    tags: ["Money", "Management"],
    href: "/blog/scale-up-company-offer-2"
  },
  {
    author: "Richa Singh",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description: "JavaScript frameworks make development easy with extensive features and functionalities.",
    image: "https://suntrics.com/wp-content/uploads/2022/08/Ways-Of-Reducing-Startup-Costs.jpg",
    tags: ["Tax Return", "News", "Audit"],
    href: "/blog/scale-up-company-offer-3"
  },
  {
    author: "Miss Nora",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description: "Starting a community doesn't need to be complicated, but how do you get started?",
    image: "data:image/jpeg;base64,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",
    tags: ["Private Limited Company", "Customer Success"],
    href: "/blog/scale-up-company-offer-4"
  }
]

export function BlogsSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <p className="text-orange-500 font-medium">EXPLORE OUR BLOGS</p>
          <h2 className="text-3xl font-bold">Accelerate Digital Transformation</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article key={index} className="group">
              <Link href={blog.href} className="block space-y-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{blog.author}</span>
                    <span>•</span>
                    <span>{blog.date}</span>
                    {blog.readTime && (
                      <>
                        <span>•</span>
                        <span>Today</span>
                      </>
                    )}
                  </div>
                  <div className="group-hover:text-orange-500 transition-colors flex items-center gap-2">
                    <h3 className="font-semibold">{blog.title}</h3>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  <p className="text-gray-500 line-clamp-2">{blog.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="rounded-full">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2">
            Show more blogs
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

