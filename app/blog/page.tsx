"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingAssistant from "@/components/floating-assistant"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Clock, ChevronRight, Search, Tag, ArrowUpRight, Filter, Calendar, Bookmark, BookmarkCheck } from "lucide-react"
import { motion } from "framer-motion"

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Indian Spices Every Home Cook Should Have",
    excerpt:
      "Discover the foundational spices that bring authentic Indian flavors to your kitchen and learn how to use them effectively.",
    content:
      "Indian cuisine is renowned for its complex and aromatic spice blends. In this comprehensive guide, we explore the 10 essential spices that form the backbone of Indian cooking, from the warming notes of cardamom to the earthy complexity of cumin. Learn how to select, store, and combine these spices to create authentic Indian flavors in your home kitchen.",
    image: "/images/blog-indian-spices.jpg",
    category: "Indian Cuisine",
    date: "May 15, 2023",
    readTime: "6 min read",
    slug: "essential-indian-spices",
    author: {
      name: "Harish Kumar",
      image: "/images/chef-harish-kumar.jpg",
      role: "Founder & Head Chef",
    },
    tags: ["spices", "indian", "basics"],
    featured: true,
  },
  {
    id: 2,
    title: "The Art of Perfect Pasta: Common Mistakes to Avoid",
    excerpt:
      "Learn the techniques professional chefs use to create perfect pasta every time and the mistakes that might be ruining your dishes.",
    content:
      "Pasta is seemingly simple but achieving restaurant-quality results requires attention to detail. This article explores the most common pasta-making mistakes, from not salting the water enough to overcooking the noodles. Discover professional techniques for cooking pasta to the perfect al dente texture, pairing it with complementary sauces, and elevating this everyday dish to gourmet status.",
    image: "/images/blog-pasta-techniques.jpg",
    category: "Italian Cuisine",
    date: "April 28, 2023",
    readTime: "8 min read",
    slug: "perfect-pasta-mistakes",
    author: {
      name: "Sophia Rossi",
      image: "/images/chef-priya-sharma.jpg",
      role: "Italian Cuisine Expert",
    },
    tags: ["pasta", "italian", "techniques"],
  },
  {
    id: 3,
    title: "Healthy Meal Prep: A Beginner's Guide to Weekly Planning",
    excerpt: "Transform your eating habits with our comprehensive guide to efficient and nutritious meal preparation.",
    content:
      "Meal prepping is a game-changer for maintaining a healthy diet in our busy lives. This beginner-friendly guide walks you through the entire process of weekly meal planning, from selecting nutritious recipes to efficient cooking methods and proper storage techniques. Learn how to save time, reduce food waste, and ensure you have delicious, balanced meals throughout the week.",
    image: "/images/blog-meal-prep-guide.jpg",
    category: "Healthy Cooking",
    date: "June 2, 2023",
    readTime: "10 min read",
    slug: "healthy-meal-prep-guide",
    author: {
      name: "Priya Sharma",
      image: "/images/chef-priya-sharma.jpg",
      role: "Nutritionist & Chef",
    },
    tags: ["meal prep", "healthy", "planning"],
  },
  {
    id: 4,
    title: "The Science Behind Perfect Chocolate Chip Cookies",
    excerpt:
      "Understand the chemistry and techniques that create the ideal balance of chewy, crispy, and gooey in chocolate chip cookies.",
    content:
      "The humble chocolate chip cookie is a perfect laboratory for understanding baking science. This deep dive explores how different ingredients and techniques affect texture and flavor, from the role of brown sugar in creating chewiness to how resting your dough develops complex flavors. Learn the secrets to customizing your cookies to your exact preferences, whether you prefer them crispy, chewy, or somewhere in between.",
    image: "/images/course-bread-making.jpg",
    category: "Baking",
    date: "March 12, 2023",
    readTime: "7 min read",
    slug: "science-perfect-cookies",
    author: {
      name: "Ananya Patel",
      image: "/images/chef-ananya-patel.jpg",
      role: "Pastry Chef",
    },
    tags: ["baking", "desserts", "science"],
  },
  {
    id: 5,
    title: "Knife Skills: The Foundation of Efficient Cooking",
    excerpt: "Master the basic cutting techniques that will improve your speed, precision, and safety in the kitchen.",
    content:
      "Proper knife skills are the foundation of culinary expertise, dramatically improving your efficiency and results in the kitchen. This practical guide covers everything from choosing the right knife for different tasks to mastering essential cutting techniques like dicing, julienning, and chiffonade. Learn proper hand positioning for maximum safety and how to maintain your knives for optimal performance and longevity.",
    image: "/images/cooking-class-preview.jpg",
    category: "Techniques",
    date: "July 8, 2023",
    readTime: "9 min read",
    slug: "knife-skills-foundation",
    author: {
      name: "Rahul Verma",
      image: "/images/chef-rahul-verma.jpg",
      role: "Professional Chef",
    },
    tags: ["techniques", "basics", "tools"],
  },
  {
    id: 6,
    title: "Fermentation Fundamentals: Unlocking Flavor and Health Benefits",
    excerpt: "Explore the ancient practice of fermentation and learn how to create delicious fermented foods at home.",
    content:
      "Fermentation is both an ancient preservation method and a powerful technique for developing complex flavors and enhancing nutritional value. This comprehensive introduction covers the science of fermentation, its health benefits, and step-by-step guides for creating fermented foods like sauerkraut, kimchi, yogurt, and sourdough bread. Discover how this traditional practice can transform simple ingredients into culinary treasures.",
    image: "/images/culinary-experience-showcase.jpg",
    category: "Techniques",
    date: "August 22, 2023",
    readTime: "12 min read",
    slug: "fermentation-fundamentals",
    author: {
      name: "Vikram Singh",
      image: "/images/testimonial-vikram.jpg",
      role: "Fermentation Specialist",
    },
    tags: ["fermentation", "techniques", "health"],
  },
]

const categories = [
  { name: "All Categories", count: blogPosts.length },
  { name: "Indian Cuisine", count: 4 },
  { name: "Italian Cuisine", count: 3 },
  { name: "Healthy Cooking", count: 5 },
  { name: "Baking", count: 6 },
  { name: "Techniques", count: 8 },
]

const popularTags = [
  "indian",
  "italian",
  "desserts",
  "healthy",
  "techniques",
  "baking",
  "spices",
  "pasta",
  "meal prep",
  "breakfast",
  "dinner",
  "lunch",
]

export default function BlogPage() {
  const [savedPosts, setSavedPosts] = useState<number[]>([])
  const [activeFilter, setActiveFilter] = useState("All Categories")
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const toggleSavePost = (id: number) => {
    if (savedPosts.includes(id)) {
      setSavedPosts(savedPosts.filter((postId) => postId !== id))
    } else {
      setSavedPosts([...savedPosts, id])
    }
  }

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeFilter === "All Categories" || post.category === activeFilter
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesCategory && matchesSearch
  })

  const handleSearch = (e) => {
    e.preventDefault()
    // Search functionality is implemented directly with the filter above
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0f18] to-[#1e293b] text-white">
      <div className="absolute inset-0 bg-[url('/images/noise-pattern.png')] opacity-[0.03] pointer-events-none"></div>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#60a5fa]/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-[#a78bfa]/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Foodyaari{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60a5fa] to-[#a78bfa]">Blog</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Culinary insights, cooking tips, and delicious recipes to enhance your food journey
          </motion.p>

          <motion.form
            onSubmit={handleSearch}
            className="max-w-2xl mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full py-4 px-6 pr-12 rounded-full bg-[#1e293b]/80 backdrop-blur-sm border border-[#334155] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#60a5fa] focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </motion.form>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              <motion.div
                className="flex justify-between items-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-white">
                  {activeFilter === "All Categories" ? "All Articles" : activeFilter}
                  <span className="ml-2 text-lg text-gray-400">({filteredPosts.length})</span>
                </h2>
                <div className="flex items-center bg-[#1e293b] rounded-lg border border-[#334155] p-1">
                  <button className="px-3 py-1 rounded bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] text-white text-sm">
                    Latest
                  </button>
                  <button className="px-3 py-1 rounded text-gray-300 text-sm hover:bg-[#334155]/50 transition-colors">
                    Popular
                  </button>
                </div>
              </motion.div>

              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className="glass-card rounded-xl overflow-hidden h-[400px] animate-pulse">
                      <div className="h-48 bg-[#334155]/50"></div>
                      <div className="p-6 space-y-4">
                        <div className="h-6 bg-[#334155]/50 rounded w-3/4"></div>
                        <div className="h-4 bg-[#334155]/50 rounded w-1/2"></div>
                        <div className="h-4 bg-[#334155]/50 rounded w-full"></div>
                        <div className="h-4 bg-[#334155]/50 rounded w-full"></div>
                        <div className="flex justify-between">
                          <div className="h-10 bg-[#334155]/50 rounded w-1/3"></div>
                          <div className="h-6 bg-[#334155]/50 rounded w-1/4"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * post.id }}
                      className="h-full"
                    >
                      <div className="bg-[#1e293b]/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg h-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(96,165,250,0.15)] border border-[#334155] hover:border-[#60a5fa]/50 group">
                        <div className="relative overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg?height=400&width=600"}
                            alt={post.title}
                            width={600}
                            height={400}
                            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] text-white text-xs font-medium px-3 py-1 rounded-full">
                            {post.category}
                          </div>
                          <button
                            className="absolute top-4 right-4 bg-[#0f172a]/80 backdrop-blur-sm p-2 rounded-full border border-[#334155] hover:bg-[#334155] transition-colors"
                            onClick={() => toggleSavePost(post.id)}
                            aria-label={savedPosts.includes(post.id) ? "Unsave article" : "Save article"}
                          >
                            {savedPosts.includes(post.id) ? (
                              <BookmarkCheck className="h-4 w-4 text-[#60a5fa]" />
                            ) : (
                              <Bookmark className="h-4 w-4 text-white" />
                            )}
                          </button>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center text-sm text-gray-400 mb-3">
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>{post.date}</span>
                            </div>
                            <span className="mx-2">•</span>
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <Link href={`/blog/${post.slug}`}>
                            <h3 className="font-bold text-xl mb-3 text-white group-hover:text-[#60a5fa] transition-colors duration-300 line-clamp-2">
                              {post.title}
                            </h3>
                          </Link>
                          <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Image
                                src={post.author.image || "/placeholder.svg?height=40&width=40"}
                                alt={post.author.name}
                                width={40}
                                height={40}
                                className="rounded-full mr-3 border border-[#334155]"
                              />
                              <div>
                                <p className="text-sm font-medium text-white">{post.author.name}</p>
                                <p className="text-xs text-gray-400">{post.author.role}</p>
                              </div>
                            </div>

                            <Link href={`/blog/${post.slug}`}>
                              <div className="text-[#60a5fa] font-medium flex items-center text-sm group-hover:underline">
                                Read
                                <ArrowUpRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="col-span-2 py-12 text-center">
                  <div className="bg-[#1e293b]/80 backdrop-blur-sm rounded-xl p-8 border border-[#334155]">
                    <Search className="h-12 w-12 mx-auto mb-4 text-gray-500" />
                    <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
                    <p className="text-gray-400 mb-4">
                      We couldn't find any articles matching your search criteria. Try adjusting your filters or search
                      terms.
                    </p>
                    <Button
                      className="bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] hover:from-[#3b82f6] hover:to-[#8b5cf6] text-white"
                      onClick={() => {
                        setSearchQuery("")
                        setActiveFilter("All Categories")
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                </div>
              )}

              {filteredPosts.length > 6 && (
                <motion.div
                  className="mt-12 flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      className="border-[#334155] text-white hover:bg-[#334155]/50 hover:text-white"
                    >
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#60a5fa] bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] text-white hover:from-[#3b82f6] hover:to-[#8b5cf6]"
                    >
                      1
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#334155] text-white hover:bg-[#334155]/50 hover:text-white"
                    >
                      2
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#334155] text-white hover:bg-[#334155]/50 hover:text-white"
                    >
                      3
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#334155] text-white hover:bg-[#334155]/50 hover:text-white"
                    >
                      Next
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              {/* Categories */}
              <motion.div
                className="bg-[#1e293b]/80 backdrop-blur-sm rounded-xl p-6 mb-8 border border-[#334155]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Categories</h3>
                  <Filter className="h-5 w-5 text-[#60a5fa]" />
                </div>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        className={`flex justify-between items-center w-full text-left p-2 rounded-lg transition-colors ${
                          activeFilter === category.name
                            ? "bg-gradient-to-r from-[#60a5fa]/20 to-[#a78bfa]/20 text-white"
                            : "text-gray-300 hover:bg-[#334155]/50"
                        }`}
                        onClick={() => setActiveFilter(category.name)}
                      >
                        <span>{category.name}</span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            activeFilter === category.name
                              ? "bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] text-white"
                              : "bg-[#0f172a] text-gray-400"
                          }`}
                        >
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Popular Tags */}
              <motion.div
                className="bg-[#1e293b]/80 backdrop-blur-sm rounded-xl p-6 mb-8 border border-[#334155]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <button
                      key={index}
                      className="bg-[#0f172a] border border-[#334155] text-gray-300 text-sm px-3 py-1 rounded-full hover:bg-gradient-to-r hover:from-[#60a5fa] hover:to-[#a78bfa] hover:text-white hover:border-transparent transition-colors"
                      onClick={() => setSearchQuery(tag)}
                    >
                      <Tag className="h-3 w-3 inline-block mr-1" />
                      {tag}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Featured Post */}
              <motion.div
                className="bg-[#1e293b]/80 backdrop-blur-sm rounded-xl overflow-hidden mb-8 border border-[#334155]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="relative">
                  <Image
                    src="/images/blog-indian-spices.jpg"
                    alt="Featured Post"
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] text-white text-xs font-medium px-3 py-1 rounded-full inline-block mb-2">
                      Featured
                    </div>
                    <h4 className="text-white font-bold text-lg">The Ultimate Guide to Indian Spices</h4>
                  </div>
                </div>
                <div className="p-6 text-white">
                  <p className="text-gray-300 mb-4">
                    Explore the rich world of Indian spices and learn how to use them to create authentic flavors in
                    your cooking.
                  </p>
                  <Link
                    href="/blog/ultimate-guide-indian-spices"
                    className="text-[#60a5fa] hover:text-white flex items-center text-sm font-medium"
                  >
                    Read the full guide
                    <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                className="bg-[#1e293b]/80 backdrop-blur-sm rounded-xl p-6 border border-[#334155]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-gray-300 mb-4">
                  Get the latest recipes, cooking tips, and exclusive content delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full p-3 rounded-lg bg-[#0f172a] border border-[#334155] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#60a5fa] focus:border-transparent"
                  />
                  <Button className="w-full bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] hover:from-[#3b82f6] hover:to-[#8b5cf6] text-white">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-gray-400 mt-3">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingAssistant />
    </main>
  )
}
