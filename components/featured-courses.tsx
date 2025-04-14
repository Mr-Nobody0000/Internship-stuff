"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Star, ChevronLeft, Clock, Users, Sparkles } from "lucide-react"
import Link from "next/link"

const courseCategories = [
  { id: "all", name: "All" },
  { id: "indian", name: "Indian" },
  { id: "italian", name: "Italian" },
  { id: "desserts", name: "Desserts" },
  { id: "healthy", name: "Healthy" },
]

const courses = [
  {
    id: 1,
    title: "Authentic Indian Cuisine Masterclass",
    category: "indian",
    image: "/images/course-indian-cuisine.jpg",
    color: "#3b82f6",
    price: "₹1,999",
    originalPrice: "₹4,999",
    rating: 4.8,
    reviews: 342,
    level: "Beginner",
    duration: "12 hours",
    students: 1240,
    link: "/courses/authentic-indian-cuisine",
    featured: true,
  },
  {
    id: 2,
    title: "Italian Pasta & Sauce Techniques",
    category: "italian",
    image: "/images/course-italian-pasta.jpg",
    color: "#8b5cf6",
    price: "₹2,499",
    originalPrice: "₹5,999",
    rating: 4.9,
    reviews: 215,
    level: "Intermediate",
    duration: "8 hours",
    students: 890,
    link: "/courses/italian-pasta-masterclass",
    featured: true,
  },
  {
    id: 3,
    title: "Artisanal Bread Making Workshop",
    category: "desserts",
    image: "/images/course-bread-making.jpg",
    color: "#10b981",
    price: "₹1,799",
    originalPrice: "₹3,999",
    rating: 4.7,
    reviews: 189,
    level: "All Levels",
    duration: "6 hours",
    students: 750,
    link: "/courses/artisanal-bread-making",
    featured: false,
  },
  {
    id: 4,
    title: "Healthy Meal Prep Fundamentals",
    category: "healthy",
    image: "/images/course-healthy-meal.jpg",
    color: "#3b82f6",
    price: "₹2,999",
    originalPrice: "₹6,999",
    rating: 4.9,
    reviews: 276,
    level: "Beginner",
    duration: "10 hours",
    students: 1560,
    link: "/courses/healthy-meal-prep",
    featured: true,
  },
]

export default function FeaturedCourses() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const filteredCourses =
    activeCategory === "all" ? courses : courses.filter((course) => course.category === activeCategory)

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollButtons)
      checkScrollButtons()
      return () => scrollContainer.removeEventListener("scroll", checkScrollButtons)
    }
  }, [activeCategory])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current
      const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

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
    <section ref={sectionRef} className="py-20 px-4" id="courses">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Courses</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our most popular culinary courses designed by expert chefs
          </p>
        </motion.div>

        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div ref={scrollContainerRef} className="flex space-x-2 overflow-x-auto pb-4 scrollbar-hide scroll-smooth">
            {courseCategories.map((category) => (
              <Button
                key={category.id}
                variant={category.id === activeCategory ? "default" : "outline"}
                className={`rounded-full px-6 py-2 category-button whitespace-nowrap ${
                  category.id === activeCategory
                    ? "bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] hover:from-[#2563eb] hover:to-[#7c3aed] text-white border-none"
                    : "border-[#334155] text-white hover:bg-[#334155]/50 hover:text-white"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 glass-effect rounded-full p-2 shadow-md hover:bg-[#334155]/50 transition-colors z-10"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 glass-effect rounded-full p-2 shadow-md hover:bg-[#334155]/50 transition-colors z-10"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          )}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              variants={itemVariants}
              className="glass-card rounded-xl overflow-hidden shadow-lg group hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-500 hover:border-[#3b82f6]/50"
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
              <div className="relative">
                <div className="absolute inset-0 opacity-20" style={{ backgroundColor: course.color }}></div>
                <Image
                  src={course.image || "/placeholder.svg?height=400&width=300"}
                  alt={course.title}
                  width={300}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="course-image-overlay">
                  <div className="absolute bottom-2 left-2 glass-effect text-white px-2 py-1 rounded text-xs font-medium">
                    {course.level}
                  </div>
                  {course.featured && (
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white px-2 py-1 rounded text-xs font-medium">
                      <Sparkles className="h-3 w-3 inline-block mr-1" />
                      Featured
                    </div>
                  )}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-white line-clamp-2 group-hover:text-[#3b82f6] transition-colors duration-300">
                  {course.title}
                </h3>
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="ml-1 text-sm font-medium text-white">{course.rating}</span>
                  </div>
                  <span className="mx-2 text-gray-500">•</span>
                  <span className="text-sm text-gray-400">{course.reviews} reviews</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  <div className="flex items-center text-xs text-gray-400 glass-effect px-2 py-1 rounded-full">
                    <Clock className="h-3 w-3 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-xs text-gray-400 glass-effect px-2 py-1 rounded-full">
                    <Users className="h-3 w-3 mr-1" />
                    {course.students} students
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-bold text-white">{course.price}</span>
                    <span className="text-gray-500 line-through text-sm ml-2">{course.originalPrice}</span>
                  </div>
                  <Link href={course.link}>
                    <Button className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] hover:from-[#2563eb] hover:to-[#7c3aed] text-white text-xs px-3 py-1 h-auto rounded-full">
                      Enroll Now
                    </Button>
                  </Link>
                </div>

                {hoveredCourse === course.id && (
                  <div className="mt-3 pt-3 border-t border-[#334155]">
                    <Link
                      href={course.link}
                      className="text-[#3b82f6] text-sm font-medium flex items-center hover:underline"
                    >
                      View Course Details
                      <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/courses">
            <Button className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] hover:from-[#2563eb] hover:to-[#7c3aed] text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-[#3b82f6]/20 group">
              View All Courses
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
