"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
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

export default function StudentTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 2 : prevIndex - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#051630] mb-4">From Our Students</h2>
          <div className="w-24 h-1 bg-[#4169e1] mx-auto mb-6"></div>
          <div className="flex justify-center items-center mt-2">
            <span className="text-xl text-gray-600">Success stories from</span>
            <span className="text-xl font-bold text-[#4169e1] ml-2">{stats.courses} Courses</span>
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            <div className="bg-[#051630] text-white p-8 rounded-xl md:w-1/3 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="mr-8">
                  <div className="text-4xl font-bold text-[#4169e1]">{stats.rating}</div>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#4169e1]">{stats.reviews}</div>
                  <div className="text-sm text-gray-300">Reviews</div>
                </div>
              </div>
              <p className="text-gray-300 text-lg">
                "Foodyari's courses have helped me develop culinary skills that I use every day. The teaching style is
                engaging and the recipes are delicious."
              </p>
            </div>

            <div className="hidden md:flex gap-4">
              <button
                onClick={prevTestimonial}
                className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors disabled:opacity-50"
                disabled={isAnimating}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-[#051630]" />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors disabled:opacity-50"
                disabled={isAnimating}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-[#051630]" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial) => (
              <Link href={testimonial.link} key={testimonial.id} className="block">
                <div className="bg-white p-8 rounded-xl shadow-md testimonial-card h-full border border-gray-100 hover:border-[#4169e1]/20">
                  <div className="flex items-center mb-6">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={70}
                      height={70}
                      className="rounded-full mr-4 border-2 border-[#4169e1]/20"
                    />
                    <div>
                      <h4 className="font-bold text-[#051630] text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg">{testimonial.text}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-8 md:hidden">
            <button
              onClick={prevTestimonial}
              className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors mx-2 disabled:opacity-50"
              disabled={isAnimating}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-[#051630]" />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors mx-2 disabled:opacity-50"
              disabled={isAnimating}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-[#051630]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
