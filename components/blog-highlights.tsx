"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, ChevronRight, ArrowUpRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Indian Spices Every Home Cook Should Have",
    excerpt:
      "Discover the foundational spices that bring authentic Indian flavors to your kitchen and learn how to use them effectively.",
    image: "/images/blog-indian-spices.jpg",
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
    image: "/images/blog-pasta-techniques.jpg",
    category: "Italian Cuisine",
    date: "April 28, 2023",
    readTime: "8 min read",
    slug: "perfect-pasta-mistakes",
  },
  {
    id: 3,
    title: "Healthy Meal Prep: A Beginner's Guide to Weekly Planning",
    excerpt: "Transform your eating habits with our comprehensive guide to efficient and nutritious meal preparation.",
    image: "/images/blog-meal-prep-guide.jpg",
    category: "Healthy Cooking",
    date: "June 2, 2023",
    readTime: "10 min read",
    slug: "healthy-meal-prep-guide",
  },
]

export default function BlogHighlights() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden" id="blog">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0a0f18] to-[#141e2c]"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Culinary Insights</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our latest articles, recipes, and cooking tips to enhance your culinary journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id}>
              <Link href={`/blog/${post.slug}`} className="group">
                <div className="glass-card rounded-2xl overflow-hidden h-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:border-[#3b82f6]/50">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg?height=400&width=600"}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white text-xs font-medium px-3 py-1 rounded-full">
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
                    <h3 className="font-bold text-xl mb-3 text-white group-hover:text-[#3b82f6] transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="text-[#3b82f6] font-medium flex items-center group-hover:underline">
                      Read Article
                      <ArrowUpRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/blog">
            <Button className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] hover:from-[#2563eb] hover:to-[#7c3aed] text-white rounded-full px-8 py-2 shadow-lg shadow-[#3b82f6]/20 group">
              View All Articles
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
