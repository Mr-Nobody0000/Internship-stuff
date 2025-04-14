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

export default function WhyWebVeda() {
  return (
    <section className="py-16 px-4 bg-gray-50" id="why-foodyari">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#051630] mb-12">
          Why <span className="text-[#4169e1]">Foodyari</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link href={feature.link} key={index} className="block">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm feature-card h-full">
                <div className="mb-4 bg-[#EBF2FF] p-4 rounded-full">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#051630] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
