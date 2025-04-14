"use client"

import { Utensils, Clock, Award, Users, BookOpen, BarChart } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: <Utensils className="h-10 w-10 text-[#4169e1]" />,
    title: "Expert Chef Instructors",
    description: "Learn from professional chefs with years of culinary experience",
    link: "/about#instructors",
  },
  {
    icon: <Clock className="h-10 w-10 text-[#4169e1]" />,
    title: "Lifetime Access",
    description: "Access course materials forever with one-time payment",
    link: "/pricing",
  },
  {
    icon: <Award className="h-10 w-10 text-[#4169e1]" />,
    title: "Certification",
    description: "Receive a professional culinary certificate upon completion",
    link: "/certification",
  },
  {
    icon: <Users className="h-10 w-10 text-[#4169e1]" />,
    title: "Community Learning",
    description: "Join a community of food enthusiasts for support and inspiration",
    link: "/community",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-[#4169e1]" />,
    title: "Practical & Actionable",
    description: "Learn techniques you can apply immediately in your kitchen",
    link: "/methodology",
  },
  {
    icon: <BarChart className="h-10 w-10 text-[#4169e1]" />,
    title: "Proven Results",
    description: "Our courses have helped thousands become better cooks",
    link: "/success-stories",
  },
]

export default function WhyFoodyari() {
  return (
    <section className="py-20 px-4 bg-gray-50" id="why-foodyari">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#051630] mb-4">
            Why <span className="text-[#4169e1]">Foodyari</span>?
          </h2>
          <div className="w-24 h-1 bg-[#4169e1] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're more than just cooking videos. Here's what makes our culinary education special.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link href={feature.link} key={index} className="block group">
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm feature-card h-full border border-transparent transition-all duration-300 hover:border-[#4169e1]/20 hover:shadow-md">
                <div className="mb-6 bg-[#EBF2FF] p-5 rounded-full group-hover:bg-[#4169e1]/10 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#051630] mb-3 group-hover:text-[#4169e1] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
