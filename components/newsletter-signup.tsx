"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Check, Sparkles } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")
    }, 1500)
  }

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f18] to-[#141e2c]"></div>

      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern-bg.png')] opacity-5 mix-blend-overlay"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      ></motion.div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          className="bg-[#3b82f6]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#3b82f6]/30"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <Mail className="h-8 w-8 text-[#3b82f6]" />
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-gradient">Get Weekly Cooking Tips & Recipes</span>
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Join our newsletter and receive exclusive cooking tips, seasonal recipe ideas, and special offers on our
          courses
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {isSubmitted ? (
            <div className="glass-card p-6 rounded-xl max-w-md mx-auto">
              <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                <Check className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Thank You for Subscribing!</h3>
              <p className="text-gray-300">
                You've been added to our newsletter. Look out for cooking inspiration in your inbox soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="glass-effect border-[#334155] text-white placeholder:text-gray-400 h-12 pr-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Sparkles className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#3b82f6] opacity-70" />
                </div>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] hover:from-[#2563eb] hover:to-[#7c3aed] text-white h-12 px-6 shadow-lg shadow-[#3b82f6]/20"
                  disabled={isLoading}
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
              <p className="text-xs text-gray-400 mt-3">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
