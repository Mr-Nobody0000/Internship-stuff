"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Home Cook",
    image: "/images/testimonial-priya.jpg",
    text: "The Indian cuisine course completely transformed my cooking. I can now make authentic dishes that my family loves. The techniques are easy to follow and the results are amazing!",
    rating: 5,
    link: "/testimonials/priya-sharma",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Food Blogger",
    image: "/images/testimonial-rahul.jpg",
    text: "The pasta masterclass gave me the knowledge and confidence to create restaurant-quality Italian dishes at home. My blog readers have noticed the improvement in my recipes!",
    rating: 5,
    link: "/testimonials/rahul-verma",
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Culinary Student",
    image: "/images/testimonial-ananya.jpg",
    text: "As a culinary student, the bread making course helped me develop techniques that weren't covered in my formal education. My bread now has the perfect crust and texture!",
    rating: 4,
    link: "/testimonials/ananya-patel",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Restaurant Owner",
    image: "/images/testimonial-vikram.jpg",
    text: "The dessert course helped me expand my restaurant's menu with innovative sweet offerings. Our customers are raving about the new desserts!",
    rating: 5,
    link: "/testimonials/vikram-singh",
  },
]

const stats = {
  students: "25K+",
  courses: "15",
  rating: "4.8/5",
  reviews: "3,842",
}

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextTestimonial()
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [isAnimating])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  }

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden" id="testimonials">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#141e2c] to-[#0a0f18]"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Student Success Stories</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hear from our students who have transformed their cooking skills with Foodyari
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <motion.div
              className="lg:w-1/3 glass-card p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="glass-effect p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-gradient mb-1">{stats.students}</div>
                  <div className="text-sm text-gray-400">Students</div>
                </div>
                <div className="glass-effect p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-gradient mb-1">{stats.courses}</div>
                  <div className="text-sm text-gray-400">Courses</div>
                </div>
                <div className="glass-effect p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-gradient mb-1">{stats.rating}</div>
                  <div className="text-sm text-gray-400">Rating</div>
                </div>
                <div className="glass-effect p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-gradient mb-1">{stats.reviews}</div>
                  <div className="text-sm text-gray-400">Reviews</div>
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="glass-effect p-3 rounded-full hover:bg-[#334155]/50 transition-colors disabled:opacity-50"
                  disabled={isAnimating}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="glass-effect p-3 rounded-full hover:bg-[#334155]/50 transition-colors disabled:opacity-50"
                  disabled={isAnimating}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
              </div>
            </motion.div>

            <div className="lg:w-2/3 relative h-[400px] md:h-[350px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={testimonials[currentIndex].id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 glass-card p-8 rounded-2xl"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-6">
                      <div className="relative mr-4">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] blur-sm opacity-50"></div>
                        <Image
                          src={testimonials[currentIndex].image || "/placeholder.svg?height=70&width=70"}
                          alt={testimonials[currentIndex].name}
                          width={70}
                          height={70}
                          className="rounded-full relative z-10 border-2 border-[#334155]"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">{testimonials[currentIndex].name}</h4>
                        <p className="text-sm text-gray-400">{testimonials[currentIndex].role}</p>
                      </div>
                      <div className="ml-auto flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonials[currentIndex].rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="relative flex-1">
                      <Quote className="absolute -top-2 -left-2 h-8 w-8 text-[#3b82f6]/30" />
                      <p className="text-gray-300 text-lg pl-6">{testimonials[currentIndex].text}</p>
                    </div>
                    <div className="mt-6 text-right">
                      <Link
                        href={testimonials[currentIndex].link}
                        className="text-[#3b82f6] hover:text-[#2563eb] transition-colors text-sm inline-flex items-center"
                      >
                        Read Full Story
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
