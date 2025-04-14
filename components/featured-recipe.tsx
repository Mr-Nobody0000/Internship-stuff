"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, Users, ChefHat, ChevronRight, Sparkles } from "lucide-react"

export default function FeaturedRecipe() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0f172a] opacity-50"></div>
      <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10"></div>

      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#60a5fa]/20 to-transparent"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      ></motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60a5fa] to-[#a78bfa]">
              Featured Recipe
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Try this delicious recipe from our collection of culinary delights
          </p>
        </motion.div>

        <motion.div
          className="bg-[#1e293b]/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-[#334155]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative overflow-hidden">
              <motion.div
                initial={{ scale: 1.1 }}
                animate={isInView ? { scale: 1 } : { scale: 1.1 }}
                transition={{ duration: 1.5 }}
              >
                <Image
                  src="/images/butter-chicken.jpg"
                  alt="Butter Chicken"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-transparent flex flex-col justify-end p-6 lg:hidden">
                <div className="bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-3 w-fit">
                  <Sparkles className="h-3 w-3 inline-block mr-1" />
                  Indian Cuisine
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Authentic Butter Chicken</h3>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="hidden lg:block">
                <div className="bg-[#0f172a] text-[#60a5fa] text-sm font-medium px-3 py-1 rounded-full inline-block mb-4 w-fit border border-[#334155]">
                  <Sparkles className="h-3 w-3 inline-block mr-1 text-[#a78bfa]" />
                  Indian Cuisine
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Authentic Butter Chicken</h3>
              </div>

              <p className="text-gray-300 mb-6 text-lg">
                A rich and creamy tomato-based curry with tender chicken pieces, this butter chicken recipe captures the
                authentic flavors of North Indian cuisine while being accessible for home cooks.
              </p>

              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center bg-[#0f172a]/50 px-3 py-2 rounded-lg border border-[#334155]">
                  <Clock className="h-5 w-5 text-[#60a5fa] mr-2" />
                  <span className="text-gray-300">45 mins</span>
                </div>
                <div className="flex items-center bg-[#0f172a]/50 px-3 py-2 rounded-lg border border-[#334155]">
                  <Users className="h-5 w-5 text-[#60a5fa] mr-2" />
                  <span className="text-gray-300">Serves 4</span>
                </div>
                <div className="flex items-center bg-[#0f172a]/50 px-3 py-2 rounded-lg border border-[#334155]">
                  <ChefHat className="h-5 w-5 text-[#60a5fa] mr-2" />
                  <span className="text-gray-300">Intermediate</span>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-white mb-3">Key Ingredients:</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center text-gray-300 bg-[#0f172a]/50 px-3 py-2 rounded-lg border border-[#334155]">
                    <span className="w-2 h-2 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] rounded-full mr-2"></span>
                    Chicken thighs
                  </div>
                  <div className="flex items-center text-gray-300 bg-[#0f172a]/50 px-3 py-2 rounded-lg border border-[#334155]">
                    <span className="w-2 h-2 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] rounded-full mr-2"></span>
                    Tomato puree
                  </div>
                  <div className="flex items-center text-gray-300 bg-[#0f172a]/50 px-3 py-2 rounded-lg border border-[#334155]">
                    <span className="w-2 h-2 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] rounded-full mr-2"></span>
                    Heavy cream
                  </div>
                  <div className="flex items-center text-gray-300 bg-[#0f172a]/50 px-3 py-2 rounded-lg border border-[#334155]">
                    <span className="w-2 h-2 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] rounded-full mr-2"></span>
                    Garam masala
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/recipes/butter-chicken">
                  <Button className="bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] hover:from-[#3b82f6] hover:to-[#8b5cf6] text-white rounded-full px-6 py-2 shadow-lg shadow-[#60a5fa]/20 group">
                    View Full Recipe
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/courses/indian-cuisine">
                  <Button className="bg-transparent hover:bg-[#334155] text-white border border-[#60a5fa]/30 rounded-full px-6 py-2">
                    Learn in Our Course
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
