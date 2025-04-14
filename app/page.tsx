import { Suspense } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturedCourses from "@/components/featured-courses"
import CulinaryExperience from "@/components/culinary-experience"
import ChefShowcase from "@/components/chef-showcase"
import BlogHighlights from "@/components/blog-highlights"
import TestimonialCarousel from "@/components/testimonial-carousel"
import CookingInspiration from "@/components/cooking-inspiration"
import NewsletterSignup from "@/components/newsletter-signup"
import Footer from "@/components/footer"
import FloatingAssistant from "@/components/floating-assistant"
import LoadingSpinner from "@/components/loading-spinner"
import ThreeDFoodScene from "@/components/three-d-food-scene"
// Add error boundaries around the components to prevent the entire page from crashing
import { ErrorBoundary } from "@/components/error-boundary"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0f18] to-[#141e2c] text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/noise-texture.png')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-[#3b82f6]/10 to-[#8b5cf6]/10 blur-3xl"
              style={{
                width: `${Math.random() * 40 + 10}vw`,
                height: `${Math.random() * 40 + 10}vh`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float-around ${Math.random() * 50 + 30}s linear ${Math.random() * -50}s infinite`,
                opacity: Math.random() * 0.3 + 0.1,
              }}
            />
          ))}
        </div>
      </div>

      <Header />

      <Suspense fallback={<LoadingSpinner />}>
        <ErrorBoundary fallback={<div className="py-20 text-center">Error loading hero section</div>}>
          <HeroSection />
        </ErrorBoundary>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ErrorBoundary fallback={<div className="py-20 text-center">Error loading 3D scene</div>}>
          <ThreeDFoodScene />
        </ErrorBoundary>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <CookingInspiration />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <FeaturedCourses />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <CulinaryExperience />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <TestimonialCarousel />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ChefShowcase />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <BlogHighlights />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <NewsletterSignup />
      </Suspense>

      <Footer />
      <FloatingAssistant />
    </main>
  )
}
