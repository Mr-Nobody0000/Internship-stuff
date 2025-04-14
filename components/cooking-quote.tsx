"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"

interface CookingQuoteProps {
  quote: string
  author: string
}

export default function CookingQuote({ quote, author }: CookingQuoteProps) {
  const quoteRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(quoteRef, { once: false, amount: 0.5 })

  return (
    <div ref={quoteRef} className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5"></div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Quote className="h-12 w-12 mx-auto mb-6 text-[#60a5fa]/30" />
        <h2 className="text-2xl md:text-3xl font-medium text-white mb-6 italic">"{quote}"</h2>
        <p className="text-lg text-[#60a5fa]">— {author}</p>
      </motion.div>
    </div>
  )
}
