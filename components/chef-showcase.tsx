"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Twitter, Instagram, Linkedin } from "lucide-react"

const chefs = [
  {
    name: "Harish Kumar",
    role: "Founder & Head Chef",
    image: "/images/chef-harish-kumar.jpg",
    bio: "With over 15 years of experience in various cuisines, Harish founded Foodyari to make professional culinary education accessible to everyone.",
    specialties: ["Indian Cuisine", "Culinary Education", "Recipe Development"],
    social: {
      instagram: "https://instagram.com/harishkumar",
      linkedin: "https://linkedin.com/in/harish-kumar",
      twitter: "https://twitter.com/harishkumar",
    },
  },
  {
    name: "Priya Sharma",
    role: "Nutrition Expert & Chef",
    image: "/images/chef-priya-sharma.jpg",
    bio: "Priya combines her expertise in nutrition with culinary skills to create healthy, flavorful recipes that don't compromise on taste.",
    specialties: ["Nutritional Cooking", "Plant-Based Recipes", "Meal Planning"],
    social: {
      instagram: "https://instagram.com/priyasharma",
      linkedin: "https://linkedin.com/in/priya-sharma",
      twitter: "https://twitter.com/priyasharma",
    },
  },
  {
    name: "Rahul Verma",
    role: "Chef & Culinary Instructor",
    image: "/images/chef-rahul-verma.jpg",
    bio: "Rahul is a professional chef with experience in top restaurants across India, specializing in traditional cooking techniques.",
    specialties: ["Traditional Techniques", "Spice Blending", "Regional Indian Cuisine"],
    social: {
      instagram: "https://instagram.com/rahulverma",
      linkedin: "https://linkedin.com/in/rahul-verma",
      twitter: "https://twitter.com/rahulverma",
    },
  },
  {
    name: "Ananya Patel",
    role: "Pastry Chef & Instructor",
    image: "/images/chef-ananya-patel.jpg",
    bio: "Ananya is a skilled pastry chef with a background in both Indian and European desserts, making complex techniques accessible to home bakers.",
    specialties: ["Pastry Arts", "Bread Making", "Dessert Decoration"],
    social: {
      instagram: "https://instagram.com/ananyapatel",
      linkedin: "https://linkedin.com/in/ananya-patel",
      twitter: "https://twitter.com/ananyapatel",
    },
  },
]

export default function ChefShowcase() {
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
    <section ref={sectionRef} className="py-20 px-4" id="chefs">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Meet Our Culinary Experts</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Learn from passionate chefs with years of professional experience
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {chefs.map((chef, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="glass-card rounded-2xl overflow-hidden group h-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:border-[#3b82f6]/50">
                <div className="relative">
                  <Image
                    src={chef.image || "/placeholder.svg"}
                    alt={chef.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f18] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-center space-x-3 mb-2">
                        {Object.entries(chef.social).map(([platform, url], idx) => (
                          <a
                            key={idx}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-effect p-2 rounded-full hover:bg-[#3b82f6]/20 transition-colors"
                          >
                            {platform === "instagram" && <Instagram className="h-4 w-4 text-white" />}
                            {platform === "linkedin" && <Linkedin className="h-4 w-4 text-white" />}
                            {platform === "twitter" && <Twitter className="h-4 w-4 text-white" />}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-white mb-1 group-hover:text-[#3b82f6] transition-colors">
                    {chef.name}
                  </h3>
                  <p className="text-[#3b82f6] text-sm mb-3">{chef.role}</p>
                  <p className="text-gray-300 text-sm mb-4">{chef.bio}</p>
                  <div>
                    <p className="text-xs font-medium text-gray-400 mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {chef.specialties.map((specialty, idx) => (
                        <span key={idx} className="glass-effect text-gray-300 text-xs px-2 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
