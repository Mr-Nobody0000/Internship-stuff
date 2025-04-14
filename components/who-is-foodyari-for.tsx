import { Briefcase, Home, GraduationCap, Users, Heart, ChefHat } from "lucide-react"
import Link from "next/link"

const audiences = [
  {
    icon: <Home className="h-10 w-10 text-white" />,
    title: "Home Cooks",
    description: "Elevate your everyday cooking with professional techniques and recipes",
    link: "/audience/home-cooks",
  },
  {
    icon: <ChefHat className="h-10 w-10 text-white" />,
    title: "Aspiring Chefs",
    description: "Build foundational skills to start your journey in professional cooking",
    link: "/audience/aspiring-chefs",
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-white" />,
    title: "Culinary Students",
    description: "Supplement your formal education with practical, hands-on techniques",
    link: "/audience/culinary-students",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-white" />,
    title: "Food Entrepreneurs",
    description: "Learn the culinary skills needed to launch your food business",
    link: "/audience/food-entrepreneurs",
  },
  {
    icon: <Heart className="h-10 w-10 text-white" />,
    title: "Health Enthusiasts",
    description: "Master nutritious cooking without sacrificing flavor or satisfaction",
    link: "/audience/health-enthusiasts",
  },
  {
    icon: <Users className="h-10 w-10 text-white" />,
    title: "Food Lovers",
    description: "Expand your culinary horizons and impress friends and family",
    link: "/audience/food-lovers",
  },
]

export default function WhoIsFoodyariFor() {
  return (
    <section className="py-20 px-4 bg-[#051630] text-white" id="who-is-it-for">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Who Is <span className="text-[#4169e1]">Foodyari</span> For?
          </h2>
          <div className="w-24 h-1 bg-[#4169e1] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our courses are designed for anyone passionate about food, from beginners to professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Link href={audience.link} key={index} className="block group">
              <div className="bg-[#0a2a5e] rounded-xl p-8 transition-all duration-300 audience-card h-full border border-transparent group-hover:border-[#4169e1] group-hover:bg-[#0d3272]">
                <div className="bg-[#4169e1] p-4 rounded-xl inline-block mb-6 group-hover:bg-[#3a5ecc] transition-colors">
                  {audience.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{audience.title}</h3>
                <p className="text-gray-300">{audience.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
