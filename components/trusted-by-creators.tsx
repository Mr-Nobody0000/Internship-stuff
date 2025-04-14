import Image from "next/image"
import Link from "next/link"

const creators = [
  {
    name: "Priya Sharma",
    role: "Food Blogger",
    image: "/images/creator1.png",
    testimonial:
      "As a food blogger, I highly recommend Foodyari's courses. They've helped me improve my cooking techniques and content quality.",
    link: "/creators/priya-sharma",
  },
  {
    name: "Arjun Kapoor",
    role: "YouTube Chef",
    image: "/images/creator2.png",
    testimonial:
      "The skills I learned from Foodyari courses have been instrumental in growing my cooking channel and engaging with my audience.",
    link: "/creators/arjun-kapoor",
  },
  {
    name: "Neha Gupta",
    role: "Restaurant Owner",
    image: "/images/creator3.png",
    testimonial:
      "As someone who runs a restaurant, I found the courses incredibly practical and immediately applicable to my business.",
    link: "/creators/neha-gupta",
  },
]

export default function TrustedByCreators() {
  return (
    <section className="py-16 px-4" id="creators">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#051630] mb-12">
          Trusted By <span className="text-[#4169e1]">Creators</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {creators.map((creator, index) => (
            <Link href={creator.link} key={index} className="block">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
                <div className="flex items-center mb-4">
                  <Image
                    src={creator.image || "/placeholder.svg"}
                    alt={creator.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-[#051630]">{creator.name}</h3>
                    <p className="text-sm text-[#4169e1]">{creator.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{creator.testimonial}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
