"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, ChevronRight, ArrowUpRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Indian Spices Every Home Cook Should Have",
    excerpt:
      "Discover the foundational spices that bring authentic Indian flavors to your kitchen and learn how to use them effectively.",
    image: "/images/blog-spices.png",
    category: "Indian Cuisine",
    date: "May 15, 2023",
    readTime: "6 min read",
    slug: "essential-indian-spices",
  },
  {
    id: 2,
    title: "The Art of Perfect Pasta: Common Mistakes to Avoid",
    excerpt:
      "Learn the techniques professional chefs use to create perfect pasta every time and the mistakes that might be ruining your dishes.",
    image: "/images/blog-pasta.png",
    category: "Italian Cuisine",
    date: "April 28, 2023",
    readTime: "8 min read",
    slug: "perfect-pasta-mistakes",
  },
  {
    id: 3,
    title: "Healthy Meal Prep: A Beginner's Guide to Weekly Planning",
    excerpt: "Transform your eating habits with our comprehensive guide to efficient and nutritious meal preparation.",
    image: "/images/blog-meal-prep.png",
    category: "Healthy Cooking",
    date: "June 2, 2023",
    readTime: "10 min read",
    slug: "healthy-meal-prep-guide",
  },
]

export default function BlogExperience() {
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
    <section ref={sectionRef} className="py-20 px-4" id="blog">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60a5fa] to-[#a78bfa]">
              Culinary Insights
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our latest articles, recipes, and cooking tips to enhance your culinary journey
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Link href={`/blog/${post.slug}`} className="group">
                <div className="bg-[#1e293b]/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg h-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(96,165,250,0.15)] border border-[#334155] hover:border-[#60a5fa]/50">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] text-white text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-white group-hover:text-[#60a5fa] transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="text-[#60a5fa] font-medium flex items-center group-hover:underline">
                      Read Article
                      <ArrowUpRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/blog">
            <Button className="bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] hover:from-[#3b82f6] hover:to-[#8b5cf6] text-white rounded-full px-8 py-2 shadow-lg shadow-[#60a5fa]/20 group">
              View All Articles
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
