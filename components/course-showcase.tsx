"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Star, Users, Clock } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Mastering Indian Cuisine",
    description: "Learn authentic Indian cooking techniques and recipes from expert chefs",
    image: "/images/course-indian-cuisine.jpg",
    rating: 4.9,
    students: 12500,
    duration: "24 hours",
    price: 129,
    slug: "mastering-indian-cuisine",
  },
  {
    id: 2,
    title: "Italian Pasta Perfection",
    description: "Discover the secrets to making perfect pasta dishes from scratch",
    image: "/images/course-italian-pasta.jpg",
    rating: 4.8,
    students: 9800,
    duration: "18 hours",
    price: 99,
    slug: "italian-pasta-perfection",
  },
  {
    id: 3,
    title: "Artisan Bread Making",
    description: "Master the art of baking delicious artisan breads with professional techniques",
    image: "/images/course-bread-making.jpg",
    rating: 4.9,
    students: 7500,
    duration: "16 hours",
    price: 89,
    slug: "artisan-bread-making",
  },
  {
    id: 4,
    title: "Healthy Meal Planning",
    description: "Learn to prepare nutritious and delicious meals for a balanced lifestyle",
    image: "/images/course-healthy-meal.jpg",
    rating: 4.7,
    students: 15200,
    duration: "20 hours",
    price: 109,
    slug: "healthy-meal-planning",
  },
]

export default function CourseShowcase() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden" id="courses">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0a0f18] to-[#141e2c]"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Courses</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our most popular culinary courses designed to transform your cooking skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div key={course.id}>
              <Link href={`/courses/${course.slug}`} className="group">
                <div className="glass-card rounded-2xl overflow-hidden h-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:border-[#3b82f6]/50">
                  <div className="relative overflow-hidden">
                    <Image
                      src={course.image || "/placeholder.svg?height=400&width=600"}
                      alt={course.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-[#0f172a]/80 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                      <span className="text-white text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-white group-hover:text-[#3b82f6] transition-colors duration-300">
                      {course.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm line-clamp-2">{course.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-white">${course.price}</span>
                      <div className="text-[#3b82f6] font-medium flex items-center group-hover:underline">
                        View Course
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/courses">
            <Button className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] hover:from-[#2563eb] hover:to-[#7c3aed] text-white rounded-full px-8 py-2 shadow-lg shadow-[#3b82f6]/20 group">
              View All Courses
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
