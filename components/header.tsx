"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Menu,
  X,
  ChevronDown,
  Search,
  User,
  ShoppingCart,
  Sparkles,
  BookOpen,
  GraduationCap,
  Coffee,
  LogIn,
} from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [courseMenuOpen, setCourseMenuOpen] = useState(false)
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const [signupModalOpen, setSignupModalOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [noResults, setNoResults] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    return pathname === path
  }

  // Mock search data
  const searchData = [
    { type: "course", title: "Indian Cuisine Masterclass", url: "/courses/indian-cuisine" },
    { type: "course", title: "Italian Pasta Techniques", url: "/courses/italian-pasta" },
    { type: "blog", title: "10 Essential Indian Spices", url: "/blog/essential-indian-spices" },
    { type: "blog", title: "The Art of Perfect Pasta", url: "/blog/perfect-pasta-mistakes" },
    { type: "page", title: "About Foodyaari", url: "/about" },
    { type: "page", title: "Contact Us", url: "/contact" },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    if (!searchQuery.trim()) {
      return
    }

    const query = searchQuery.toLowerCase()
    const results = searchData.filter((item) => item.title.toLowerCase().includes(query))

    setSearchResults(results)
    setNoResults(results.length === 0)

    if (results.length === 0) {
      // Don't navigate, just show "no results" in the search overlay
    } else if (results.length === 1) {
      // Navigate directly to the single result
      router.push(results[0].url)
      setSearchOpen(false)
      setSearchQuery("")
      setSearchResults([])
    }
    // If multiple results, they'll be shown in the search overlay for user to select
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login submitted")
    setLoginModalOpen(false)
  }

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Signup submitted")
    setSignupModalOpen(false)
  }

  return (
    <>
      <header
        className={`w-full py-4 px-4 md:px-8 fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-effect shadow-lg py-3" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center group relative z-10">
            <div className="text-2xl font-bold relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] group-hover:from-white group-hover:to-white transition-all duration-300">
                Foody
              </span>
              <span className="text-white group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#3b82f6] group-hover:to-[#8b5cf6] transition-all duration-300">
                aari
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </div>
            <div className="text-xs text-gray-400 ml-1">by Harish</div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-white hover:text-[#3b82f6] transition-colors relative group ${
                isActive("/") ? "text-[#3b82f6] font-medium" : ""
              }`}
            >
              Home
              <motion.span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#3b82f6] ${isActive("/") ? "w-full" : "w-0"}`}
                initial={false}
                animate={{ width: isActive("/") ? "100%" : "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setCourseMenuOpen(true)}
              onMouseLeave={() => setCourseMenuOpen(false)}
            >
              <button
                className={`flex items-center text-white hover:text-[#3b82f6] transition-colors focus:outline-none ${
                  isActive("/courses") ? "text-[#3b82f6] font-medium" : ""
                }`}
              >
                Courses{" "}
                <ChevronDown
                  className={`h-4 w-4 ml-1 transition-transform duration-300 ${courseMenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {courseMenuOpen && (
                  <motion.div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 rounded-xl overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="glass-card rounded-xl overflow-hidden">
                      <div className="p-4 border-b border-[#334155]">
                        <h3 className="text-sm font-medium text-gray-300">Explore Courses</h3>
                      </div>
                      <div className="p-2">
                        <Link
                          href="/courses"
                          className="flex items-center p-3 rounded-lg hover:bg-[#334155]/50 transition-colors"
                        >
                          <BookOpen className="h-5 w-5 text-[#3b82f6] mr-3" />
                          <div>
                            <div className="font-medium">All Courses</div>
                            <div className="text-xs text-gray-400">Browse our full catalog</div>
                          </div>
                        </Link>
                        <Link
                          href="/courses/category/indian"
                          className="flex items-center p-3 rounded-lg hover:bg-[#334155]/50 transition-colors"
                        >
                          <GraduationCap className="h-5 w-5 text-[#8b5cf6] mr-3" />
                          <div>
                            <div className="font-medium">Indian Cuisine</div>
                            <div className="text-xs text-gray-400">Master authentic flavors</div>
                          </div>
                        </Link>
                        <Link
                          href="/courses/category/italian"
                          className="flex items-center p-3 rounded-lg hover:bg-[#334155]/50 transition-colors"
                        >
                          <Coffee className="h-5 w-5 text-[#3b82f6] mr-3" />
                          <div>
                            <div className="font-medium">Italian Cuisine</div>
                            <div className="text-xs text-gray-400">Perfect pasta & more</div>
                          </div>
                        </Link>
                        <Link
                          href="/courses/category/desserts"
                          className="flex items-center p-3 rounded-lg hover:bg-[#334155]/50 transition-colors"
                        >
                          <Sparkles className="h-5 w-5 text-[#8b5cf6] mr-3" />
                          <div>
                            <div className="font-medium">Desserts</div>
                            <div className="text-xs text-gray-400">Sweet culinary arts</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/blog"
              className={`text-white hover:text-[#3b82f6] transition-colors relative group ${
                isActive("/blog") ? "text-[#3b82f6] font-medium" : ""
              }`}
            >
              Blog
              <motion.span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#3b82f6] ${isActive("/blog") ? "w-full" : "w-0"}`}
                initial={false}
                animate={{ width: isActive("/blog") ? "100%" : "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </Link>

            <Link
              href="/about"
              className={`text-white hover:text-[#3b82f6] transition-colors relative group ${
                isActive("/about") ? "text-[#3b82f6] font-medium" : ""
              }`}
            >
              About
              <motion.span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#3b82f6] ${isActive("/about") ? "w-full" : "w-0"}`}
                initial={false}
                animate={{ width: isActive("/about") ? "100%" : "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </Link>

            <Link
              href="/contact"
              className={`text-white hover:text-[#3b82f6] transition-colors relative group ${
                isActive("/contact") ? "text-[#3b82f6] font-medium" : ""
              }`}
            >
              Contact
              <motion.span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#3b82f6] ${isActive("/contact") ? "w-full" : "w-0"}`}
                initial={false}
                animate={{ width: isActive("/contact") ? "100%" : "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </Link>
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <motion.button
              className="text-white hover:text-[#3b82f6] transition-colors p-2 rounded-full hover:bg-[#334155]/50"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Search className="h-5 w-5" />
            </motion.button>

            <motion.button
              className="text-white hover:text-[#3b82f6] transition-colors p-2 rounded-full hover:bg-[#334155]/50 relative"
              onClick={() => setCartOpen(true)}
              aria-label="Cart"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-[#3b82f6] text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </motion.button>

            <div className="hidden md:block">
              <motion.button
                onClick={() => setLoginModalOpen(true)}
                className="bg-transparent hover:bg-[#334155]/50 text-white border border-[#3b82f6]/30 rounded-full px-4 py-2 transition-all duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LogIn className="h-4 w-4 mr-2" />
                Log In
              </motion.button>
            </div>

            <div className="hidden md:block">
              <motion.button
                onClick={() => setSignupModalOpen(true)}
                className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] hover:from-[#2563eb] hover:to-[#7c3aed] text-white rounded-full px-4 py-2 shadow-lg shadow-[#3b82f6]/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up
              </motion.button>
            </div>

            <motion.button
              className="lg:hidden text-white p-2 rounded-full hover:bg-[#334155]/50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="fixed inset-0 glass-effect z-50 flex items-start justify-center pt-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-full max-w-3xl px-4">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for courses, recipes, blogs..."
                    className="w-full py-4 px-6 pr-12 rounded-full bg-[#1e293b]/80 border border-[#334155] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <Search className="h-5 w-5 text-gray-400 hover:text-[#3b82f6] transition-colors" />
                  </button>
                </div>
              </form>

              {/* Search Results */}
              {searchQuery.trim() !== "" && (
                <div className="mt-6 bg-[#1e293b]/90 rounded-xl border border-[#334155] overflow-hidden">
                  {noResults ? (
                    <div className="p-6 text-center">
                      <Search className="h-10 w-10 mx-auto text-gray-500 mb-2" />
                      <h3 className="text-lg font-medium text-white mb-1">No results found</h3>
                      <p className="text-gray-400">
                        We couldn't find anything matching "{searchQuery}". Try different keywords.
                      </p>
                    </div>
                  ) : searchResults.length > 0 ? (
                    <div className="divide-y divide-[#334155]">
                      {searchResults.map((result, index) => (
                        <Link
                          key={index}
                          href={result.url}
                          className="block p-4 hover:bg-[#334155]/50 transition-colors"
                          onClick={() => {
                            setSearchOpen(false)
                            setSearchQuery("")
                            setSearchResults([])
                          }}
                        >
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-[#3b82f6]/20 flex items-center justify-center mr-3">
                              {result.type === "course" && <BookOpen className="h-4 w-4 text-[#3b82f6]" />}
                              {result.type === "blog" && <Coffee className="h-4 w-4 text-[#8b5cf6]" />}
                              {result.type === "page" && <Sparkles className="h-4 w-4 text-[#3b82f6]" />}
                            </div>
                            <div>
                              <div className="font-medium text-white">{result.title}</div>
                              <div className="text-xs text-gray-400 capitalize">{result.type}</div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              )}

              <div className="mt-6 flex justify-between">
                <div className="text-gray-400 text-sm">Press ESC to close</div>
                <button
                  className="text-[#3b82f6] hover:text-white transition-colors text-sm"
                  onClick={() => {
                    setSearchOpen(false)
                    setSearchQuery("")
                    setSearchResults([])
                    setNoResults(false)
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-[72px] glass-effect z-40"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="flex flex-col p-6 space-y-6">
              <Link
                href="/"
                className={`text-xl text-white hover:text-[#3b82f6] transition-colors ${
                  isActive("/") ? "text-[#3b82f6] font-medium" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <div className="space-y-3">
                <div className="text-xl text-white font-medium flex items-center">
                  Courses <ChevronDown className="h-5 w-5 ml-2" />
                </div>
                <div className="pl-4 space-y-4 border-l border-[#334155]">
                  <Link
                    href="/courses"
                    className="block text-white hover:text-[#3b82f6] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 text-[#3b82f6] mr-3" />
                      All Courses
                    </div>
                  </Link>
                  <Link
                    href="/courses/category/indian"
                    className="block text-white hover:text-[#3b82f6] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <GraduationCap className="h-5 w-5 text-[#8b5cf6] mr-3" />
                      Indian Cuisine
                    </div>
                  </Link>
                  <Link
                    href="/courses/category/italian"
                    className="block text-white hover:text-[#3b82f6] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <Coffee className="h-5 w-5 text-[#3b82f6] mr-3" />
                      Italian Cuisine
                    </div>
                  </Link>
                  <Link
                    href="/courses/category/desserts"
                    className="block text-white hover:text-[#3b82f6] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <Sparkles className="h-5 w-5 text-[#8b5cf6] mr-3" />
                      Desserts
                    </div>
                  </Link>
                </div>
              </div>

              <Link
                href="/blog"
                className={`text-xl text-white hover:text-[#3b82f6] transition-colors ${
                  isActive("/blog") ? "text-[#3b82f6] font-medium" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <Link
                href="/about"
                className={`text-xl text-white hover:text-[#3b82f6] transition-colors ${
                  isActive("/about") ? "text-[#3b82f6] font-medium" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={`text-xl text-white hover:text-[#3b82f6] transition-colors ${
                  isActive("/contact") ? "text-[#3b82f6] font-medium" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4 flex flex-col space-y-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setLoginModalOpen(true)
                  }}
                  className="w-full bg-transparent hover:bg-[#334155]/50 text-white border border-[#3b82f6]/30 rounded-full py-2"
                >
                  <User className="h-4 w-4 inline-block mr-2" />
                  Log In
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setSignupModalOpen(true)
                  }}
                  className="w-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] hover:from-[#2563eb] hover:to-[#7c3aed] text-white rounded-full py-2 shadow-lg shadow-[#3b82f6]/20"
                >
                  Sign Up
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Login Modal */}
      <AnimatePresence>
        {loginModalOpen && (
          <motion.div
            className="fixed inset-0 glass-effect z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="glass-card rounded-2xl w-full max-w-md overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 border-b border-[#334155]">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-white">Log In</h2>
                  <button
                    onClick={() => setLoginModalOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <form onSubmit={handleLogin} className="p-6 space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-[#1e293b]/80 border-[#334155] text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label htmlFor="password" className="text-sm font-medium text-gray-300">
                      Password
                    </label>
                    <a href="#" className="text-xs text-[#3b82f6] hover:text-[#2563eb] transition-colors">
                      Forgot password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    className="bg-[#1e293b]/80 border-[#334155] text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] hover:from-[#2563eb] hover:to-[#7c3aed] text-white"
                  >
                    Log In
                  </Button>
                </div>
                <div className="text-center text-sm text-gray-400">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setLoginModalOpen(false)
                      setSignupModalOpen(true)
                    }}
                    className="text-[#3b82f6] hover:text-[#2563eb] transition-colors"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Signup Modal */}
      <AnimatePresence>
        {signupModalOpen && (
          <motion.div
            className="fixed inset-0 glass-effect z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="glass-card rounded-2xl w-full max-w-md overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 border-b border-[#334155]">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-white">Create Account</h2>
                  <button
                    onClick={() => setSignupModalOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <form onSubmit={handleSignup} className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-300">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      required
                      className="bg-[#1e293b]/80 border-[#334155] text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-300">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      required
                      className="bg-[#1e293b]/80 border-[#334155] text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="signupEmail" className="text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <Input
                    id="signupEmail"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-[#1e293b]/80 border-[#334155] text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="signupPassword" className="text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <Input
                    id="signupPassword"
                    type="password"
                    placeholder="••••••••"
                    required
                    className="bg-[#1e293b]/80 border-[#334155] text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="rounded border-[#334155] bg-[#1e293b]/80 text-[#3b82f6] focus:ring-[#3b82f6]"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-300">
                    I agree to the{" "}
                    <a href="#" className="text-[#3b82f6] hover:text-[#2563eb] transition-colors">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#3b82f6] hover:text-[#2563eb] transition-colors">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] hover:from-[#2563eb] hover:to-[#7c3aed] text-white"
                  >
                    Create Account
                  </Button>
                </div>
                <div className="text-center text-sm text-gray-400">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setSignupModalOpen(false)
                      setLoginModalOpen(true)
                    }}
                    className="text-[#3b82f6] hover:text-[#2563eb] transition-colors"
                  >
                    Log in
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {cartOpen && (
          <motion.div
            className="fixed inset-0 z-50 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setCartOpen(false)}></div>
            <motion.div
              className="absolute top-0 right-0 h-full w-full max-w-md glass-card shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-[#334155] flex justify-between items-center">
                  <h2 className="text-xl font-bold text-white flex items-center">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Your Cart (2)
                  </h2>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  <div className="flex gap-4 pb-4 border-b border-[#334155]">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src="/images/indian-cuisine.png"
                        alt="Indian Cuisine Course"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-white">Authentic Indian Cuisine Masterclass</h3>
                      <p className="text-sm text-gray-400">Beginner Level</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-bold text-[#3b82f6]">₹1,999</span>
                        <button className="text-gray-400 hover:text-red-500 transition-colors">
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 pb-4 border-b border-[#334155]">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src="/images/italian-pasta.png"
                        alt="Italian Pasta Course"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-white">Italian Pasta & Sauce Techniques</h3>
                      <p className="text-sm text-gray-400">Intermediate Level</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-bold text-[#3b82f6]">₹2,499</span>
                        <button className="text-gray-400 hover:text-red-500 transition-colors">
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 border-t border-[#334155] space-y-4">
                  <div className="flex justify-between text-white">
                    <span>Subtotal</span>
                    <span>₹4,498</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Discount</span>
                    <span className="text-green-500">-₹500</span>
                  </div>
                  <div className="flex justify-between text-white font-bold">
                    <span>Total</span>
                    <span>₹3,998</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] hover:from-[#2563eb] hover:to-[#7c3aed] text-white">
                    Checkout
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
