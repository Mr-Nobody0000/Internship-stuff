"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const footerRef = useRef<HTMLElement>(null)
  const isInView = useInView(footerRef, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer ref={footerRef} className="bg-[#0a0f18] text-white pt-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/noise-pattern.png')] opacity-[0.03] mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <Link href="/" className="flex items-center mb-6">
              <div className="text-3xl font-bold">
                <span className="text-gradient">Foody</span>
                <span className="text-white">aari</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Your trusted platform for practical culinary courses that help you master the art of cooking and bring joy
              to your table.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/foodyaari"
                className="text-gray-400 hover:text-[#3b82f6] transition-colors social-icon"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/foodyaari"
                className="text-gray-400 hover:text-[#3b82f6] transition-colors social-icon"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/foodyaari"
                className="text-gray-400 hover:text-[#3b82f6] transition-colors social-icon"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/harish-foodyaari"
                className="text-gray-400 hover:text-[#3b82f6] transition-colors social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://youtube.com/foodyaari"
                className="text-gray-400 hover:text-[#3b82f6] transition-colors social-icon"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-xl mb-6">Explore</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/courses"
                  className="text-gray-400 hover:text-[#3b82f6] transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full mr-2 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                  All Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-[#3b82f6] transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full mr-2 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                  Blog & Recipes
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[#3b82f6] transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full mr-2 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-gray-400 hover:text-[#3b82f6] transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full mr-2 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-[#3b82f6] transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full mr-2 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                  FAQs
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-xl mb-6">Categories</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/courses/category/indian"
                  className="text-gray-400 hover:text-[#3b82f6] transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full mr-2 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                  Indian Cuisine
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/category/italian"
                  className="text-gray-400 hover:text-[#3b82f6] transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full mr-2 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                  Italian Cuisine
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/category/desserts"
                  className="text-gray-400 hover:text-[#3b82f6] transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full mr-2 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                  Desserts & Baking
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/category/healthy"
                  className="text-gray-400 hover:text-[#3b82f6] transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full mr-2 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                  Healthy Cooking
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/category/techniques"
                  className="text-gray-400 hover:text-[#3b82f6] transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full mr-2 transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
                  Cooking Techniques
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-xl mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#3b82f6] mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-400">Email:</p>
                  <a href="mailto:hello@foodyaari.com" className="text-white hover:text-[#3b82f6] transition-colors">
                    hello@foodyaari.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[#3b82f6] mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-400">Phone:</p>
                  <a href="tel:+919876543210" className="text-white hover:text-[#3b82f6] transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#3b82f6] mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-400">Address:</p>
                  <address className="text-white not-italic">
                    123 Culinary Street
                    <br />
                    Mumbai, Maharashtra 400001
                    <br />
                    India
                  </address>
                </div>
              </li>
            </ul>
            <Link href="/contact" className="inline-block mt-4">
              <Button className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] hover:from-[#2563eb] hover:to-[#7c3aed] text-white shadow-lg shadow-[#3b82f6]/10">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-[#334155] py-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-400 mb-4 md:mb-0">&copy; {currentYear} Foodyaari. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/terms" className="text-gray-400 hover:text-[#3b82f6] transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-[#3b82f6] transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/refund" className="text-gray-400 hover:text-[#3b82f6] transition-colors text-sm">
              Refund Policy
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-[#3b82f6] transition-colors text-sm">
              Sitemap
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
