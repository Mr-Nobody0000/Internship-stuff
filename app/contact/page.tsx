"use client"

import { useState } from "react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, Clock, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#051630] to-[#0a2955] text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] bg-repeat opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get In <span className="text-[#4169e1]">Touch</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have questions about our courses? Want to collaborate? We'd love to hear from you!
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg flex items-center">
              <Mail className="h-6 w-6 text-[#4169e1] mr-3" />
              <div className="text-left">
                <p className="text-sm text-gray-300">Email Us At</p>
                <p className="font-medium">hello@foodyaari.com</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg flex items-center">
              <Phone className="h-6 w-6 text-[#4169e1] mr-3" />
              <div className="text-left">
                <p className="text-sm text-gray-300">Call Us At</p>
                <p className="font-medium">+91 98765 43210</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg flex items-center">
              <MapPin className="h-6 w-6 text-[#4169e1] mr-3" />
              <div className="text-left">
                <p className="text-sm text-gray-300">Visit Our Office</p>
                <p className="font-medium">Mumbai, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gradient-to-r from-[#051630] to-[#0a2955] p-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2" />
                  Send Us a Message
                </h2>
                <p className="text-gray-300 mt-2">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} className="bg-[#4169e1] hover:bg-[#3a5ecc] text-white">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#4169e1] focus:border-[#4169e1] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#4169e1] focus:border-[#4169e1] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#4169e1] focus:border-[#4169e1] transition-colors"
                      placeholder="Course Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#4169e1] focus:border-[#4169e1] transition-colors"
                      placeholder="I'm interested in learning more about your Indian Cuisine course..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#4169e1] hover:bg-[#3a5ecc] text-white py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4169e1] disabled:opacity-70 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold text-[#051630] mb-6">Contact Information</h2>
              <p className="text-lg text-gray-600 mb-8">
                Reach out to us through any of the following channels. We aim to respond to all inquiries within 24
                hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-[#EBF2FF] p-4 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-[#4169e1]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#051630] mb-1">Email Us</h3>
                    <p className="text-gray-600 mb-1">For general inquiries:</p>
                    <a href="mailto:hello@foodyaari.com" className="text-[#4169e1] hover:underline">
                      hello@foodyaari.com
                    </a>
                    <p className="text-gray-600 mt-2 mb-1">For course support:</p>
                    <a href="mailto:support@foodyaari.com" className="text-[#4169e1] hover:underline">
                      support@foodyaari.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#EBF2FF] p-4 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-[#4169e1]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#051630] mb-1">Call Us</h3>
                    <p className="text-gray-600 mb-1">Customer Support:</p>
                    <a href="tel:+919876543210" className="text-[#4169e1] hover:underline">
                      +91 98765 43210
                    </a>
                    <p className="text-gray-600 mt-2 mb-1">Business Inquiries:</p>
                    <a href="tel:+919876543211" className="text-[#4169e1] hover:underline">
                      +91 98765 43211
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#EBF2FF] p-4 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-[#4169e1]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#051630] mb-1">Visit Us</h3>
                    <p className="text-gray-600 mb-1">Our Office:</p>
                    <address className="text-gray-700 not-italic">
                      123 Culinary Street
                      <br />
                      Mumbai, Maharashtra 400001
                      <br />
                      India
                    </address>
                    <p className="text-gray-600 mt-2">
                      <span className="font-medium">Hours:</span> Monday-Friday, 9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 space-y-6">
                <h3 className="font-bold text-[#051630] mb-4">Frequently Asked Questions</h3>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#051630] mb-2">How do I enroll in a course?</h4>
                  <p className="text-gray-600">
                    You can browse our courses and click on the "Enroll Now" button on any course page. Follow the
                    checkout process to complete your enrollment.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#051630] mb-2">Do you offer refunds?</h4>
                  <p className="text-gray-600">
                    Yes, we offer a 7-day money-back guarantee for all our courses. If you're not satisfied, you can
                    request a refund within 7 days of purchase.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#051630] mb-2">How long do I have access to a course?</h4>
                  <p className="text-gray-600">
                    Once enrolled, you have lifetime access to the course materials, including any future updates.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schedule a Call Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#051630] to-[#0a2955] rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-white mb-4">Schedule a Call With Us</h2>
                <p className="text-gray-300 mb-6">
                  Want to discuss a custom course or have specific questions? Schedule a call with our team at your
                  convenience.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center text-white">
                    <Calendar className="h-5 w-5 text-[#4169e1] mr-3" />
                    <span>Choose a date and time that works for you</span>
                  </div>

                  <div className="flex items-center text-white">
                    <Clock className="h-5 w-5 text-[#4169e1] mr-3" />
                    <span>Calls typically last 15-30 minutes</span>
                  </div>

                  <div className="flex items-center text-white">
                    <MessageSquare className="h-5 w-5 text-[#4169e1] mr-3" />
                    <span>Get personalized advice from our experts</span>
                  </div>
                </div>

                <Button className="mt-8 bg-white text-[#051630] hover:bg-gray-100">Schedule a Call</Button>
              </div>

              <div className="relative h-64 lg:h-auto">
                <Image src="/images/chef-instructor-avatar.jpg" alt="Chef Instructor" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#051630] mb-8 text-center">Find Us</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Foodyaari Location"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
