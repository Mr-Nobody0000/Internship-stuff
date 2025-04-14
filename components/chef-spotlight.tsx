"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Globe } from "lucide-react"
import Link from "next/link"

export default function ChefSpotlight() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  return (
    <section ref={sectionRef} className="py-20 px-4" id="founder">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60a5fa] to-[#a78bfa]">
              Meet Our Founder
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">The culinary expert behind Foodyari's success story</p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/3 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] rounded-xl opacity-10 transform rotate-3"></div>
              <div className="absolute -inset-4 bg-[#0f172a] rounded-xl opacity-10 transform -rotate-3"></div>
              <Image
                src="/images/founder.png"
                alt="Harish - Founder of Foodyari"
                width={400}
                height={500}
                className="rounded-xl relative z-10 shadow-lg border border-[#334155]"
              />
            </div>
          </motion.div>

          <motion.div
            className="md:w-2/3 order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Harish Kumar</h3>
            <p className="text-lg text-gray-300 mb-6">
              Harish is a renowned chef, culinary educator, and food entrepreneur. He is the founder of Foodyari, where
              he shares his passion for cooking and helps people discover the joy of creating delicious meals.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              With over 15 years of experience in various cuisines, Harish has developed a unique approach to teaching
              culinary arts that makes complex techniques accessible to everyone. His teaching style is practical,
              engaging, and focused on building confidence in the kitchen.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Harish is passionate about preserving traditional cooking methods while embracing modern innovations. His
              courses have helped over 25,000 students transform their cooking skills and develop a deeper appreciation
              for food.
            </p>
            <p className="text-lg text-gray-300">
              He believes that good food brings people together and that anyone can become a great cook with the right
              guidance. This philosophy is at the heart of every Foodyari course.
            </p>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-white mb-4">
                FOLLOW <span className="text-[#60a5fa]">Harish</span>
              </h3>
              <div className="flex space-x-6">
                <Link
                  href="https://facebook.com/foodyari"
                  className="text-[#60a5fa] hover:text-white transition-colors social-icon"
                >
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link
                  href="https://twitter.com/foodyari"
                  className="text-[#60a5fa] hover:text-white transition-colors social-icon"
                >
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link
                  href="https://instagram.com/foodyari"
                  className="text-[#60a5fa] hover:text-white transition-colors social-icon"
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link
                  href="https://linkedin.com/in/harish-foodyari"
                  className="text-[#60a5fa] hover:text-white transition-colors social-icon"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="https://youtube.com/foodyari"
                  className="text-[#60a5fa] hover:text-white transition-colors social-icon"
                >
                  <Youtube className="h-6 w-6" />
                </Link>
                <Link
                  href="https://foodyari.com/blog"
                  className="text-[#60a5fa] hover:text-white transition-colors social-icon"
                >
                  <Globe className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
