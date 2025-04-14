"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Utensils, Clock, Award, Users, BookOpen, BarChart } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: <Utensils className="h-10 w-10 text-[#60a5fa]" />,
    title: "Expert Chef Instructors",
    description: "Learn from professional chefs with years of culinary experience",
    link: "/about#instructors",
  },
  {
    icon: <Clock className="h-10 w-10 text-[#a78bfa]" />,
    title: "Lifetime Access",
    description: "Access course materials forever with one-time payment",
    link: "/pricing",
  },
  {
    icon: <Award className="h-10 w-10 text-[#60a5fa]" />,
    title: "Certification",
    description: "Receive a professional culinary certificate upon completion",
    link: "/certification",
  },
  {
    icon: <Users className="h-10 w-10 text-[#a78bfa]" />,
    title: "Community Learning",
    description: "Join a community of food enthusiasts for support and inspiration",
    link: "/community",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-[#60a5fa]" />,
    title: "Practical & Actionable",
    description: "Learn techniques you can apply immediately in your kitchen",
    link: "/methodology",
  },
  {
    icon: <BarChart className="h-10 w-10 text-[#a78bfa]" />,
    title: "Proven Results",
    description: "Our courses have helped thousands become better cooks",
    link: "/success-stories",
  },
]

export default function CulinaryJourney() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

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
    <section ref={sectionRef} className="py-20 px-4" id="why-foodyari">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60a5fa] to-[#a78bfa]">
              Why Foodyari?
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're more than just cooking videos. Here's what makes our culinary education special.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link href={feature.link} className="block group">
                <div className="flex flex-col items-center text-center p-8 bg-[#1e293b]/80 backdrop-blur-sm rounded-xl shadow-lg border border-[#334155] h-full transition-all duration-300 hover:border-[#60a5fa]/50 hover:shadow-[0_0_20px_rgba(96,165,250,0.15)]">
                  <div className="mb-6 bg-[#0f172a] p-5 rounded-full group-hover:bg-gradient-to-r group-hover:from-[#0f172a] group-hover:to-[#1e293b] transition-colors duration-300 border border-[#334155] group-hover:border-[#60a5fa]/30">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#60a5fa] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
