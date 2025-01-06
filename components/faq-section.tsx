import { ChevronRight } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer: "Yes, our software provides comprehensive file recovery solutions for desktop systems. The recovery process is designed to be user-friendly and efficient, helping you retrieve your deleted files safely."
  },
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer: "Yes, our software provides comprehensive file recovery solutions for desktop systems. The recovery process is designed to be user-friendly and efficient, helping you retrieve your deleted files safely."
  },
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer: "Yes, our software provides comprehensive file recovery solutions for desktop systems. The recovery process is designed to be user-friendly and efficient, helping you retrieve your deleted files safely."
  },
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer: "Yes, our software provides comprehensive file recovery solutions for desktop systems. The recovery process is designed to be user-friendly and efficient, helping you retrieve your deleted files safely."
  },
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer: "Yes, our software provides comprehensive file recovery solutions for desktop systems. The recovery process is designed to be user-friendly and efficient, helping you retrieve your deleted files safely."
  }
]

export function FaqSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-3xl">
        <div className="text-center space-y-4 mb-12">
          <p className="text-orange-500 font-medium">FAQ</p>
          <h2 className="text-3xl font-bold">Frequent Ask Questions</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg bg-white shadow-sm"
            >
              <AccordionTrigger className="hover:no-underline px-6 py-4 text-left">
                <div className="flex items-center justify-between w-full">
                  <span>{faq.question}</span>
                  <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="gap-2">
            Show more
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

