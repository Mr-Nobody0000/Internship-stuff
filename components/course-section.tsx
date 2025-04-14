"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from "react"
import { ChevronRight, Star, ChevronLeft, ChevronDown, Clock, Users } from "lucide-react"
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
    image: "/images/indian-cuisine.png",
    color: "#4169e1",
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
    image: "/images/italian-pasta.png",
    color: "#9C27B0",
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
    image: "/images/bread-making.png",
    color: "#4CAF50",
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
    image: "/images/healthy-meal.png",
    color: "#2196F3",
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
  {
    id: 5,
    title: "Dessert Decoration Techniques",
    category: "desserts",
    image: "/images/dessert-decoration.png",
    color: "#FF5722",
    price: "₹2,299",
    originalPrice: "₹4,599",
    rating: 4.8,
    reviews: 198,
    level: "Intermediate",
    duration: "7 hours",
    students: 680,
    link: "/courses/dessert-decoration",
    featured: false,
  },
  {
    id: 6,
    title: "South Indian Delicacies",
    category: "indian",
    image: "/images/south-indian.png",
    color: "#FF9800",
    price: "₹1,899",
    originalPrice: "₹3,799",
    rating: 4.7,
    reviews: 156,
    level: "All Levels",
    duration: "9 hours",
    students: 920,
    link: "/courses/south-indian-delicacies",
    featured: false,
  },
]

export default function CourseSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null)
  const [visibleCourses, setVisibleCourses] = useState(4)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

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

  const loadMoreCourses = () => {
    setVisibleCourses((prev) => Math.min(prev + 2, filteredCourses.length))
  }

  return (
    <section className="py-20 px-4" id="courses">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#051630] mb-4">Practical Culinary Courses</h2>
          <div className="w-24 h-1 bg-[#4169e1] mx-auto mb-6"></div>
          <h3 className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Master the art of cooking with our expert-led courses designed for both home cooks and professional chefs
          </h3>
        </div>

        <div className="relative mb-8">
          <div ref={scrollContainerRef} className="flex space-x-2 overflow-x-auto pb-4 scrollbar-hide scroll-smooth">
            {courseCategories.map((category) => (
              <Button
                key={category.id}
                variant={category.id === activeCategory ? "default" : "outline"}
                className={`rounded-full px-6 py-2 category-button whitespace-nowrap ${
                  category.id === activeCategory
                    ? "bg-[#4169e1] hover:bg-[#3a5ecc] text-white"
                    : "border-[#4169e1] text-[#4169e1] hover:bg-[#4169e1]/10"
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
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors z-10"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 text-[#051630]" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors z-10"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 text-[#051630]" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCourses.slice(0, visibleCourses).map((course) => (
            <div
              key={course.id}
              className="rounded-xl overflow-hidden shadow-lg food-card group bg-white"
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
              <div className="relative">
                <div className="absolute inset-0 opacity-20" style={{ backgroundColor: course.color }}></div>
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={300}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="course-image-overlay">
                  <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-xs font-medium">
                    {course.level}
                  </div>
                  {course.featured && (
                    <div className="absolute top-2 right-2 bg-[#4169e1] text-white px-2 py-1 rounded text-xs font-medium">
                      Featured
                    </div>
                  )}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-[#051630] line-clamp-2">{course.title}</h3>
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="ml-1 text-sm font-medium">{course.rating}</span>
                  </div>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-sm text-gray-600">{course.reviews} reviews</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  <div className="flex items-center text-xs text-gray-600">
                    <Clock className="h-3 w-3 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <Users className="h-3 w-3 mr-1" />
                    {course.students} students
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-bold text-[#051630]">{course.price}</span>
                    <span className="text-gray-500 line-through text-sm ml-2">{course.originalPrice}</span>
                  </div>
                  <Link href={course.link}>
                    <Button className="bg-[#4169e1] hover:bg-[#3a5ecc] text-white text-xs px-3 py-1 h-auto">
                      Enroll Now
                    </Button>
                  </Link>
                </div>

                {hoveredCourse === course.id && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <Link
                      href={course.link}
                      className="text-[#4169e1] text-sm font-medium flex items-center hover:underline"
                    >
                      View Course Details
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {visibleCourses < filteredCourses.length && (
          <div className="mt-10 text-center">
            <Button
              onClick={loadMoreCourses}
              className="bg-white border border-[#4169e1] text-[#4169e1] hover:bg-[#4169e1]/10 rounded-full px-6"
            >
              Load More Courses
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link href="/courses">
            <Button className="bg-[#4169e1] hover:bg-[#3a5ecc] text-white rounded-full px-8 py-6 text-lg cta-button">
              View All Courses
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
