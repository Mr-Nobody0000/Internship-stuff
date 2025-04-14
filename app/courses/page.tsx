"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingAssistant from "@/components/floating-assistant"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Star, Clock, Users, Sparkles, Search, Filter, ChevronLeft } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Authentic Indian Cuisine Masterclass",
    category: "indian",
    image: "/images/indian-cuisine.png",
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
    description:
      "Master the art of authentic Indian cooking with our comprehensive course covering regional specialties, spice blending, and traditional techniques.",
  },
  {
    id: 2,
    title: "Italian Pasta & Sauce Techniques",
    category: "italian",
    image: "/images/italian-pasta.png",
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
    description:
      "Learn to make fresh pasta from scratch and create authentic Italian sauces that will transform your home cooking into restaurant-quality meals.",
  },
  {
    id: 3,
    title: "Artisanal Bread Making Workshop",
    category: "desserts",
    image: "/images/bread-making.png",
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
    description:
      "Discover the secrets to baking perfect artisanal bread with our step-by-step workshop covering sourdough, focaccia, baguettes, and more.",
  },
  {
    id: 4,
    title: "Healthy Meal Prep Fundamentals",
    category: "healthy",
    image: "/images/healthy-meal.png",
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
    description:
      "Transform your eating habits with our comprehensive healthy meal preparation course, focusing on nutritious ingredients and efficient cooking methods.",
  },
  {
    id: 5,
    title: "Dessert Decoration Techniques",
    category: "desserts",
    image: "/images/dessert-decoration.png",
    color: "#f97316",
    price: "₹2,299",
    originalPrice: "₹4,599",
    rating: 4.8,
    reviews: 198,
    level: "Intermediate",
    duration: "7 hours",
    students: 680,
    link: "/courses/dessert-decoration",
    featured: false,
    description:
      "Master the art of dessert decoration with professional techniques for cakes, pastries, and plated desserts that will wow your guests.",
  },
  {
    id: 6,
    title: "South Indian Delicacies",
    category: "indian",
    image: "/images/south-indian.png",
    color: "#f59e0b",
    price: "₹1,899",
    originalPrice: "₹3,799",
    rating: 4.7,
    reviews: 156,
    level: "All Levels",
    duration: "9 hours",
    students: 920,
    link: "/courses/south-indian-delicacies",
    featured: false,
    description:
      "Explore the rich and diverse flavors of South Indian cuisine, from crispy dosas to flavorful sambars and aromatic biryanis.",
  },
  {
    id: 7,
    title: "Professional Knife Skills",
    category: "techniques",
    image: "/images/knife-skills.png",
    color: "#64748b",
    price: "₹1,499",
    originalPrice: "₹2,999",
    rating: 4.9,
    reviews: 312,
    level: "All Levels",
    duration: "4 hours",
    students: 1820,
    link: "/courses/professional-knife-skills",
    featured: false,
    description:
      "Develop essential knife skills that will improve your efficiency, precision, and safety in the kitchen with guidance from professional chefs.",
  },
  {
    id: 8,
    title: "Gourmet Chocolate Making",
    category: "desserts",
    image: "/images/chocolate-making.png",
    color: "#78350f",
    price: "₹2,699",
    originalPrice: "₹5,399",
    rating: 4.8,
    reviews: 178,
    level: "Intermediate",
    duration: "8 hours",
    students: 560,
    link: "/courses/gourmet-chocolate-making",
    featured: false,
    description:
      "Learn the art of chocolate making from bean to bar, including tempering, molding, and creating gourmet truffles and bonbons.",
  },
]

const categories = [
  { id: "all", name: "All Categories", count: courses.length },
  { id: "indian", name: "Indian Cuisine", count: courses.filter((course) => course.category === "indian").length },
  { id: "italian", name: "Italian Cuisine", count: courses.filter((course) => course.category === "italian").length },
  {
    id: "desserts",
    name: "Desserts & Baking",
    count: courses.filter((course) => course.category === "desserts").length,
  },
  { id: "healthy", name: "Healthy Cooking", count: courses.filter((course) => course.category === "healthy").length },
  {
    id: "techniques",
    name: "Cooking Techniques",
    count: courses.filter((course) => course.category === "techniques").length,
  },
]

const levels = [
  { id: "all", name: "All Levels" },
  { id: "beginner", name: "Beginner" },
  { id: "intermediate", name: "Intermediate" },
  { id: "advanced", name: "Advanced" },
]

const priceRanges = [
  { id: "all", name: "All Prices" },
  { id: "free", name: "Free" },
  { id: "paid", name: "Paid" },
  { id: "under-2000", name: "Under ₹2,000" },
  { id: "2000-3000", name: "₹2,000 - ₹3,000" },
]

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeLevel, setActiveLevel] = useState("all")
  const [activePriceRange, setActivePriceRange] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState("popular")
  const [isLoading, setIsLoading] = useState(true)
  const coursesPerPage = 6

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Filter courses based on active filters
  const filteredCourses = courses.filter((course) => {
    // Category filter
    const categoryMatch = activeCategory === "all" || course.category === activeCategory

    // Level filter
    const levelMatch =
      activeLevel === "all" ||
      course.level.toLowerCase() === activeLevel ||
      (activeLevel === "all levels" && course.level === "All Levels")

    // Price filter
    let priceMatch = true
    if (activePriceRange === "free") {
      priceMatch = course.price === "Free"
    } else if (activePriceRange === "paid") {
      priceMatch = course.price !== "Free"
    } else if (activePriceRange === "under-2000") {
      const price = Number.parseFloat(course.price.replace("₹", "").replace(",", ""))
      priceMatch = price < 2000
    } else if (activePriceRange === "2000-3000") {
      const price = Number.parseFloat(course.price.replace("₹", "").replace(",", ""))
      priceMatch = price >= 2000 && price <= 3000
    }

    // Search query
    const searchMatch =
      searchQuery === "" ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase())

    return categoryMatch && levelMatch && priceMatch && searchMatch
  })

  // Sort courses
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortBy === "popular") {
      return b.students - a.students
    } else if (sortBy === "newest") {
      // For demo purposes, we'll just use the id as a proxy for "newest"
      return b.id - a.id
    } else if (sortBy === "price-low-high") {
      const priceA = Number.parseFloat(a.price.replace("₹", "").replace(",", ""))
      const priceB = Number.parseFloat(b.price.replace("₹", "").replace(",", ""))
      return priceA - priceB
    } else if (sortBy === "price-high-low") {
      const priceA = Number.parseFloat(a.price.replace("₹", "").replace(",", ""))
      const priceB = Number.parseFloat(b.price.replace("₹", "").replace(",", ""))
      return priceB - priceA
    } else if (sortBy === "highest-rated") {
      return b.rating - a.rating
    }
    return 0
  })

  // Pagination
  const indexOfLastCourse = currentPage * coursesPerPage
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage
  const currentCourses = sortedCourses.slice(indexOfFirstCourse, indexOfLastCourse)
  const totalPages = Math.ceil(sortedCourses.length / coursesPerPage)

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const applyFilters = () => {
    setCurrentPage(1)
  }

  const resetFilters = () => {
    setActiveCategory("all")
    setActiveLevel("all")
    setActivePriceRange("all")
    setSearchQuery("")
    setCurrentPage(1)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setCurrentPage(1)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0f18] to-[#141e2c] text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/courses-hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f18] via-[#0a0f18]/80 to-[#0a0f18]"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gradient">Culinary Courses</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our expert-led courses designed to transform your cooking skills and inspire your culinary journey
          </motion.p>

          <motion.form
            onSubmit={handleSearch}
            className="max-w-2xl mx-auto relative mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Input
              type="text"
              placeholder="Search for courses..."
              className="w-full py-6 px-6 pr-12 rounded-full bg-[#1e293b]/80 backdrop-blur-sm border border-[#334155] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] p-2 rounded-full"
            >
              <Search className="h-5 w-5 text-white" />
            </button>
          </motion.form>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4">
              <div className="glass-card rounded-xl p-6 mb-6 sticky top-24">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Filters</h2>
                  <button onClick={resetFilters} className="text-[#3b82f6] hover:text-white text-sm transition-colors">
                    Reset All
                  </button>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3 flex items-center">
                    <Filter className="h-4 w-4 mr-2 text-[#3b82f6]" />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        className={`flex justify-between items-center w-full text-left p-2 rounded-lg transition-colors ${
                          activeCategory === category.id
                            ? "bg-gradient-to-r from-[#3b82f6]/20 to-[#8b5cf6]/20 text-white"
                            : "text-gray-300 hover:bg-[#334155]/50"
                        }`}
                        onClick={() => {
                          setActiveCategory(category.id)
                          applyFilters()
                        }}
                      >
                        <span>{category.name}</span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            activeCategory === category.id
                              ? "bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white"
                              : "bg-[#0f172a] text-gray-400"
                          }`}
                        >
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Levels */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Level</h3>
                  <div className="space-y-2">
                    {levels.map((level) => (
                      <button
                        key={level.id}
                        className={`flex items-center w-full text-left p-2 rounded-lg transition-colors ${
                          activeLevel === level.id
                            ? "bg-gradient-to-r from-[#3b82f6]/20 to-[#8b5cf6]/20 text-white"
                            : "text-gray-300 hover:bg-[#334155]/50"
                        }`}
                        onClick={() => {
                          setActiveLevel(level.id)
                          applyFilters()
                        }}
                      >
                        <span
                          className={`w-3 h-3 rounded-full mr-2 ${
                            activeLevel === level.id ? "bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6]" : "bg-[#334155]"
                          }`}
                        ></span>
                        <span>{level.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.id}
                        className={`flex items-center w-full text-left p-2 rounded-lg transition-colors ${
                          activePriceRange === range.id
                            ? "bg-gradient-to-r from-[#3b82f6]/20 to-[#8b5cf6]/20 text-white"
                            : "text-gray-300 hover:bg-[#334155]/50"
                        }`}
                        onClick={() => {
                          setActivePriceRange(range.id)
                          applyFilters()
                        }}
                      >
                        <span
                          className={`w-3 h-3 rounded-full mr-2 ${
                            activePriceRange === range.id
                              ? "bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6]"
                              : "bg-[#334155]"
                          }`}
                        ></span>
                        <span>{range.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Course Listings */}
            <div className="lg:w-3/4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    {activeCategory === "all" ? "All Courses" : categories.find((c) => c.id === activeCategory)?.name}
                  </h2>
                  <p className="text-gray-400">
                    Showing {indexOfFirstCourse + 1}-{Math.min(indexOfLastCourse, filteredCourses.length)} of{" "}
                    {filteredCourses.length} courses
                  </p>
                </div>

                <div className="mt-4 md:mt-0 glass-effect rounded-lg p-1">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent text-white border-none focus:ring-0 cursor-pointer"
                  >
                    <option value="popular" className="bg-[#1e293b] text-white">
                      Most Popular
                    </option>
                    <option value="newest" className="bg-[#1e293b] text-white">
                      Newest
                    </option>
                    <option value="highest-rated" className="bg-[#1e293b] text-white">
                      Highest Rated
                    </option>
                    <option value="price-low-high" className="bg-[#1e293b] text-white">
                      Price: Low to High
                    </option>
                    <option value="price-high-low" className="bg-[#1e293b] text-white">
                      Price: High to Low
                    </option>
                  </select>
                </div>
              </div>

              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="glass-card rounded-xl overflow-hidden h-[400px] animate-pulse">
                      <div className="h-48 bg-[#334155]/50"></div>
                      <div className="p-4 space-y-4">
                        <div className="h-6 bg-[#334155]/50 rounded w-3/4"></div>
                        <div className="h-4 bg-[#334155]/50 rounded w-1/2"></div>
                        <div className="h-4 bg-[#334155]/50 rounded w-full"></div>
                        <div className="h-4 bg-[#334155]/50 rounded w-full"></div>
                        <div className="flex justify-between">
                          <div className="h-6 bg-[#334155]/50 rounded w-1/4"></div>
                          <div className="h-8 bg-[#334155]/50 rounded w-1/4"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredCourses.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                      {currentCourses.map((course) => (
                        <motion.div
                          key={course.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.5 }}
                          className="glass-card rounded-xl overflow-hidden shadow-lg group hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-500 hover:border-[#3b82f6]/50"
                        >
                          <div className="relative">
                            <div
                              className="absolute inset-0 opacity-20"
                              style={{ backgroundColor: course.color }}
                            ></div>
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

                            <p className="text-gray-300 mb-4 text-sm line-clamp-2">{course.description}</p>

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
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center mt-12">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          className="border-[#334155] text-white hover:bg-[#334155]/50 hover:text-white"
                          onClick={() => paginate(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          <ChevronLeft className="h-4 w-4 mr-1" />
                          Previous
                        </Button>
                        {[...Array(totalPages)].map((_, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            className={`border-${currentPage === index + 1 ? "[#3b82f6]" : "[#334155]"} ${
                              currentPage === index + 1 ? "bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6]" : ""
                            } text-white hover:bg-[#334155]/50 hover:text-white w-10 h-10 p-0`}
                            onClick={() => paginate(index + 1)}
                          >
                            {index + 1}
                          </Button>
                        ))}
                        <Button
                          variant="outline"
                          className="border-[#334155] text-white hover:bg-[#334155]/50 hover:text-white"
                          onClick={() => paginate(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          Next
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="glass-card rounded-xl p-12 text-center">
                  <Search className="h-16 w-16 mx-auto mb-4 text-gray-500" />
                  <h3 className="text-xl font-bold text-white mb-2">No courses found</h3>
                  <p className="text-gray-400 mb-6">
                    We couldn't find any courses matching your search criteria. Try adjusting your filters or search
                    terms.
                  </p>
                  <Button
                    className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] hover:from-[#2563eb] hover:to-[#7c3aed] text-white"
                    onClick={resetFilters}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingAssistant />
    </main>
  )
}
