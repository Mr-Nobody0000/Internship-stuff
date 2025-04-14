"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Utensils, Clock, Award, Users, BookOpen, BarChart, Star } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: <Utensils className="h-10 w-10 text-[#3b82f6]" />,
    title: "Expert Chef Instructors",
    description: "Learn from professional chefs with years of culinary experience",
    link: "/about#instructors",
  },
  {
    icon: <Clock className="h-10 w-10 text-[#8b5cf6]" />,
    title: "Lifetime Access",
    description: "Access course materials forever with one-time payment",
    link: "/pricing",
  },
  {
    icon: <Award className="h-10 w-10 text-[#3b82f6]" />,
    title: "Certification",
    description: "Receive a professional culinary certificate upon completion",
    link: "/certification",
  },
  {
    icon: <Users className="h-10 w-10 text-[#8b5cf6]" />,
    title: "Community Learning",
    description: "Join a community of food enthusiasts for support and inspiration",
    link: "/community",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-[#3b82f6]" />,
    title: "Practical & Actionable",
    description: "Learn techniques you can apply immediately in your kitchen",
    link: "/methodology",
  },
  {
    icon: <BarChart className="h-10 w-10 text-[#8b5cf6]" />,
    title: "Proven Results",
    description: "Our courses have helped thousands become better cooks",
    link: "/success-stories",
  },
]

export default function CulinaryExperience() {
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
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden" id="experience">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0a0f18] to-[#141e2c]"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass-card border border-[#3b82f6]/20">
              <Image
                src="/images/culinary-experience-showcase.jpg"
                alt="Culinary Experience"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18] via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="glass-effect p-4 rounded-xl">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#3b82f6] mr-4">
                      <Image
                        src="/images/chef-instructor-avatar.jpg"
                        alt="Chef Instructor"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Chef Harish Kumar</h3>
                      <p className="text-sm text-gray-300">Master Chef & Founder</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    "Our mission is to make professional culinary education accessible to everyone, regardless of their
                    background or experience level."
                  </p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-5 -right-5 glass-effect p-4 rounded-xl"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 0.3,
              }}
            >
              <div className="flex items-center">
                <Award className="h-6 w-6 text-[#3b82f6] mr-2" />
                <span className="text-white font-bold">25K+ Graduates</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-5 -left-5 glass-effect p-4 rounded-xl"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: [0, 15, 0],
              }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 0.5,
              }}
            >
              <div className="flex items-center">
                <Star className="h-6 w-6 text-yellow-500 fill-yellow-500 mr-2" />
                <span className="text-white font-bold">4.9/5 Rating</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Transformative Culinary Experience</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              At Foodyari, we believe that cooking is more than just following recipes—it's about understanding
              techniques, ingredients, and the science behind great food. Our courses are designed to transform your
              relationship with cooking, giving you the confidence and skills to create exceptional dishes.
            </p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {features.slice(0, 4).map((feature, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="flex items-start">
                    <div className="glass-effect p-3 rounded-lg mr-4">{feature.icon}</div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <Link href="/about">
              <Button className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] hover:from-[#2563eb] hover:to-[#7c3aed] text-white rounded-full px-6 py-2 shadow-lg shadow-[#3b82f6]/20 group">
                Learn More About Us
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
