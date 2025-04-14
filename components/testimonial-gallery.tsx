"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Home Cook",
    image: "/images/testimonial1.png",
    text: "The Indian cuisine course completely transformed my cooking. I can now make authentic dishes that my family loves. The techniques are easy to follow and the results are amazing!",
    rating: 5,
    link: "/testimonials/priya-sharma",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Food Blogger",
    image: "/images/testimonial2.png",
    text: "The pasta masterclass gave me the knowledge and confidence to create restaurant-quality Italian dishes at home. My blog readers have noticed the improvement in my recipes!",
    rating: 5,
    link: "/testimonials/rahul-verma",
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Culinary Student",
    image: "/images/testimonial3.png",
    text: "As a culinary student, the bread making course helped me develop techniques that weren't covered in my formal education. My bread now has the perfect crust and texture!",
    rating: 4,
    link: "/testimonials/ananya-patel",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Restaurant Owner",
    image: "/images/testimonial4.png",
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

export default function TestimonialGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 2 : prevIndex - 1))
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
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
    }),
  }

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-[#0f172a]" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#60a5fa] to-[#a78bfa]">
              Student Success Stories
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] mx-auto mb-6"></div>
          <div className="flex justify-center items-center mt-2">
            <span className="text-xl text-gray-300">Transformations from</span>
            <span className="text-xl font-bold text-[#60a5fa] ml-2">{stats.courses} Courses</span>
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[#1e293b]/80 backdrop-blur-sm text-white p-8 rounded-xl md:w-1/3 shadow-lg border border-[#334155]">
              <div className="flex items-center mb-6">
                <div className="mr-8">
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#60a5fa] to-[#a78bfa]">
                    {stats.rating}
                  </div>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#60a5fa] to-[#a78bfa]">
                    {stats.reviews}
                  </div>
                  <div className="text-sm text-gray-400">Reviews</div>
                </div>
              </div>
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-6 w-6 text-[#60a5fa]/30" />
                <p className="text-gray-300 text-lg pl-4">
                  Foodyari's courses have helped me develop culinary skills that I use every day. The teaching style is
                  engaging and the recipes are delicious.
                </p>
              </div>
            </div>

            <div className="hidden md:flex gap-4">
              <button
                onClick={prevTestimonial}
                className="bg-[#1e293b] p-3 rounded-full shadow-md hover:bg-[#334155] transition-colors disabled:opacity-50 border border-[#334155]"
                disabled={isAnimating}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-[#1e293b] p-3 rounded-full shadow-md hover:bg-[#334155] transition-colors disabled:opacity-50 border border-[#334155]"
                disabled={isAnimating}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Link href={testimonial.link} className="block">
                    <div className="bg-[#1e293b]/80 backdrop-blur-sm p-8 rounded-xl shadow-lg testimonial-card h-full border border-[#334155] hover:border-[#60a5fa]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(96,165,250,0.15)]">
                      <div className="flex items-center mb-6">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] blur-sm opacity-50"></div>
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={70}
                            height={70}
                            className="rounded-full relative z-10 border-2 border-[#334155]"
                          />
                        </div>
                        <div className="ml-4">
                          <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                          <p className="text-sm text-gray-400">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
                          />
                        ))}
                      </div>
                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 h-6 w-6 text-[#60a5fa]/30" />
                        <p className="text-gray-300 text-lg pl-4">{testimonial.text}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 md:hidden">
            <button
              onClick={prevTestimonial}
              className="bg-[#1e293b] p-3 rounded-full shadow-md hover:bg-[#334155] transition-colors mx-2 disabled:opacity-50 border border-[#334155]"
              disabled={isAnimating}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-[#1e293b] p-3 rounded-full shadow-md hover:bg-[#334155] transition-colors mx-2 disabled:opacity-50 border border-[#334155]"
              disabled={isAnimating}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
