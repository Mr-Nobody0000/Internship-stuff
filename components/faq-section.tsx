import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

const faqs = [
  {
    question: "What do I get when I enroll in a course?",
    answer:
      "When you enroll in a Foodyari course, you get lifetime access to all course materials, including video lessons, recipe PDFs, and any future updates. You also get access to our community where you can interact with other food enthusiasts and get your questions answered by our instructors.",
    link: "/faq#enrollment",
  },
  {
    question: "Do I need special equipment for the courses?",
    answer:
      "Most of our courses are designed to work with basic kitchen equipment that most home cooks already have. When specialized equipment is needed, we always suggest alternatives or workarounds. Each course clearly lists any required equipment before you enroll.",
    link: "/faq#equipment",
  },
  {
    question: "Are the courses suitable for beginners?",
    answer:
      "Yes, we have courses for all skill levels, from complete beginners to advanced cooks. Each course is clearly labeled with the appropriate skill level, and our step-by-step approach ensures that even complex techniques are broken down into manageable parts.",
    link: "/faq#skill-level",
  },
  {
    question: "Do you offer a refund if I don't like the course?",
    answer:
      "Yes, we offer a 14-day money-back guarantee. If you're not satisfied with the course for any reason, you can request a full refund within 14 days of purchase, no questions asked.",
    link: "/faq#refund-policy",
  },
  {
    question: "How is Foodyari different from other cooking platforms?",
    answer:
      "Foodyari focuses on building fundamental cooking skills rather than just following recipes. Our courses teach you the 'why' behind cooking techniques, empowering you to create your own dishes with confidence. Our founder, Harish, brings his extensive professional experience to each course, ensuring you learn authentic methods and insider tips.",
    link: "/faq#difference",
  },
  {
    question: "Will I get a certificate after completing the course?",
    answer:
      "Yes, upon successful completion of a course, you will receive a certificate that you can add to your resume or professional profile. This certificate validates your newly acquired culinary skills and knowledge.",
    link: "/faq#certification",
  },
]

export default function FaqSection() {
  return (
    <section className="py-16 px-4 bg-gray-50" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#051630] mb-12">
          Frequently <span className="text-[#4169e1]">Asked Questions</span>
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="text-[#051630] font-semibold px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center">
                  <span className="bg-[#4169e1] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">
                    Q
                  </span>
                  {faq.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 px-6 py-4 bg-white">
                <div className="pl-9">
                  {faq.answer}
                  <div className="mt-2">
                    <Link href={faq.link} className="text-[#4169e1] hover:underline text-sm">
                      Learn more about this
                    </Link>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
          <Link href="/contact">
            <Button className="bg-[#4169e1] hover:bg-[#3a5ecc] text-white rounded-full px-6 py-2 cta-button">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
