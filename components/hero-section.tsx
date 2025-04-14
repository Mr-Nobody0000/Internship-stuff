"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, ChevronRight, ArrowRight, ChefHat, Clock, Users, Star } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const slides = [
    {
      title: "Discover Global Flavors & Techniques",
      subtitle: "Journey through authentic cuisines from around the world",
      cta: "Explore Courses",
      image: "/images/hero-food-1.jpg",
    },
    {
      title: "Master the Art of Culinary Excellence",
      subtitle: "Transform your cooking skills with expert-led immersive courses",
      cta: "Start Learning",
      image: "/images/hero-food-2.jpg",
    },
    {
      title: "Elevate Your Home Cooking Experience",
      subtitle: "Learn professional techniques to create restaurant-quality dishes",
      cta: "View Courses",
      image: "/images/hero-food-3.jpg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPlaying && !videoModalOpen) {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
      }
    }, 6000)

    return () => clearInterval(interval)
  }, [isPlaying, videoModalOpen, slides.length])

  const handlePlayVideo = () => {
    setVideoModalOpen(true)
    setIsPlaying(true)
  }

  const handleCloseVideo = () => {
    setVideoModalOpen(false)
    setIsPlaying(false)

    // Pause video when modal closes
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  return (
    <section ref={containerRef} className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f18]/80 via-transparent to-[#0a0f18] z-10"></div>
            <Image
              src={slides[currentSlide].image || "/placeholder.svg"}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4 px-4 py-1 rounded-full glass-effect border border-[#3b82f6]/30 text-sm font-medium"
            >
              <span className="text-gradient">The Future of Culinary Education</span>
            </motion.div>

            <div className="h-32 md:h-40 mb-4 relative">
              {slides.map((slide, index) => (
                <motion.h1
                  key={index}
                  className={`text-4xl md:text-6xl font-bold absolute inset-0 transition-all duration-700 flex items-center justify-center lg:justify-start
                    ${currentSlide === index ? "opacity-100 transform-none" : "opacity-0 translate-y-8"}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {slide.title}
                </motion.h1>
              ))}
            </div>

            <div className="h-16 mb-8 relative">
              {slides.map((slide, index) => (
                <motion.p
                  key={index}
                  className={`text-lg md:text-xl text-gray-300 absolute inset-0 transition-all duration-700 delay-100 flex items-center justify-center lg:justify-start
                    ${currentSlide === index ? "opacity-100 transform-none" : "opacity-0 translate-y-8"}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {slide.subtitle}
                </motion.p>
              ))}
            </div>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center glass-effect px-4 py-2 rounded-full">
                <ChefHat className="h-4 w-4 text-[#3b82f6] mr-2" />
                <span>Expert Chefs</span>
              </div>
              <div className="flex items-center glass-effect px-4 py-2 rounded-full">
                <Clock className="h-4 w-4 text-[#3b82f6] mr-2" />
                <span>Lifetime Access</span>
              </div>
              <div className="flex items-center glass-effect px-4 py-2 rounded-full">
                <Users className="h-4 w-4 text-[#3b82f6] mr-2" />
                <span>25K+ Students</span>
              </div>
            </motion.div>

            <div className="relative h-14 mb-10">
              {slides.map((slide, index) => (
                <motion.div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 delay-200 flex justify-center lg:justify-start
                    ${currentSlide === index ? "opacity-100 transform-none" : "opacity-0 translate-y-8"}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Link href="/courses">
                    <Button className="bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] hover:from-[#2563eb] hover:to-[#7c3aed] text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-[#3b82f6]/20 group">
                      {slide.cta}
                      <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex justify-center lg:justify-start space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] w-8"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </motion.div>
          </div>

          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
            <motion.div
              className="relative w-full max-w-md aspect-video rounded-2xl overflow-hidden glass-card border border-[#3b82f6]/20 shadow-xl"
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0f18]/80 to-transparent z-10"></div>
              <Image
                src="/images/cooking-class-preview.jpg"
                alt="Cooking Class Preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-6 z-20">
                <div className="flex justify-between items-start">
                  <div className="glass-effect px-3 py-1 rounded-full text-xs font-medium inline-flex items-center">
                    <Star className="h-3 w-3 text-yellow-400 fill-yellow-400 mr-1" />
                    <span>4.9 (2.4k reviews)</span>
                  </div>
                  <div className="glass-effect px-3 py-1 rounded-full text-xs font-medium">Bestseller</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Mastering Indian Spices</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Learn the art of blending spices to create authentic Indian flavors
                  </p>
                  <button
                    onClick={handlePlayVideo}
                    className="glass-effect flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium hover:bg-[#3b82f6]/20 transition-colors"
                  >
                    <Play className="h-4 w-4 fill-white" />
                    <span>Watch Preview</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute top-[10%] right-[10%] glass-effect p-3 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: [0, 5, 0],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 0.8,
              }}
            >
              <ChefHat className="h-8 w-8 text-[#3b82f6]" />
            </motion.div>

            <motion.div
              className="absolute bottom-[20%] left-[15%] glass-effect p-3 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: [0, -5, 0],
                y: [0, 15, 0],
              }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1,
              }}
            >
              <Clock className="h-8 w-8 text-[#8b5cf6]" />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="animate-bounce glass-effect p-2 rounded-full">
            <ArrowRight className="h-5 w-5 text-[#3b82f6] rotate-90" />
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleCloseVideo}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                autoPlay
                poster="/images/cooking-video-preview.jpg"
              >
                <source src="/videos/cooking-promo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
