import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Award, Users, BookOpen, Clock, Globe, Check } from "lucide-react"

const team = [
  {
    name: "Harish Kumar",
    role: "Founder & Head Chef",
    image: "/images/founder.png",
    bio: "Harish is a renowned chef with over 15 years of experience in various cuisines. He founded Foodyari to share his passion for cooking and help people discover the joy of creating delicious meals.",
    specialties: ["Indian Cuisine", "Culinary Education", "Recipe Development"],
    social: {
      instagram: "https://instagram.com/harishkumar",
      linkedin: "https://linkedin.com/in/harish-kumar",
      twitter: "https://twitter.com/harishkumar",
    },
  },
  {
    name: "Priya Sharma",
    role: "Nutrition Expert & Chef",
    image: "/images/team-priya.png",
    bio: "Priya combines her expertise in nutrition with her culinary skills to create healthy, flavorful recipes. She specializes in developing courses that focus on nutritious cooking without sacrificing taste.",
    specialties: ["Nutritional Cooking", "Plant-Based Recipes", "Meal Planning"],
    social: {
      instagram: "https://instagram.com/priyasharma",
      linkedin: "https://linkedin.com/in/priya-sharma",
      twitter: "https://twitter.com/priyasharma",
    },
  },
  {
    name: "Rahul Verma",
    role: "Chef & Culinary Instructor",
    image: "/images/team-rahul.png",
    bio: "Rahul is a professional chef with experience in top restaurants across India. He specializes in traditional Indian cooking techniques and is passionate about preserving authentic flavors.",
    specialties: ["Traditional Techniques", "Spice Blending", "Regional Indian Cuisine"],
    social: {
      instagram: "https://instagram.com/rahulverma",
      linkedin: "https://linkedin.com/in/rahul-verma",
      twitter: "https://twitter.com/rahulverma",
    },
  },
  {
    name: "Ananya Patel",
    role: "Pastry Chef & Instructor",
    image: "/images/team-ananya.png",
    bio: "Ananya is a skilled pastry chef with a background in both Indian and European desserts. She brings creativity and precision to her baking courses, making complex techniques accessible to home bakers.",
    specialties: ["Pastry Arts", "Bread Making", "Dessert Decoration"],
    social: {
      instagram: "https://instagram.com/ananyapatel",
      linkedin: "https://linkedin.com/in/ananya-patel",
      twitter: "https://twitter.com/ananyapatel",
    },
  },
]

const milestones = [
  {
    year: "2018",
    title: "Foodyari Founded",
    description:
      "Harish Kumar established Foodyari with a mission to make professional culinary education accessible to home cooks.",
  },
  {
    year: "2019",
    title: "First 1,000 Students",
    description: "Reached our first major milestone of 1,000 enrolled students across our initial course offerings.",
  },
  {
    year: "2020",
    title: "Online Platform Launch",
    description:
      "Expanded our reach with a comprehensive online learning platform, making our courses available globally.",
  },
  {
    year: "2021",
    title: "10,000 Students Milestone",
    description:
      "Celebrated reaching 10,000 students worldwide and expanded our course catalog to include specialized cuisine tracks.",
  },
  {
    year: "2022",
    title: "Blog & Recipe Platform",
    description:
      "Launched our comprehensive blog and recipe platform to share culinary knowledge beyond our structured courses.",
  },
  {
    year: "2023",
    title: "25,000+ Student Community",
    description:
      "Grew our community to over 25,000 students and introduced advanced certification programs for professional development.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#051630] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="text-[#4169e1]">Foodyari</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We're on a mission to transform home cooks into confident culinary artists through accessible,
                expert-led education
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-[#0a2a5e]/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-[#4169e1]">25K+</div>
                  <div className="text-sm text-gray-300">Students</div>
                </div>
                <div className="bg-[#0a2a5e]/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-[#4169e1]">15+</div>
                  <div className="text-sm text-gray-300">Courses</div>
                </div>
                <div className="bg-[#0a2a5e]/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-[#4169e1]">4.8</div>
                  <div className="text-sm text-gray-300">Average Rating</div>
                </div>
                <div className="bg-[#0a2a5e]/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-[#4169e1]">5+</div>
                  <div className="text-sm text-gray-300">Years</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute -inset-4 bg-[#4169e1] rounded-xl opacity-10 transform rotate-3"></div>
              <div className="absolute -inset-4 bg-[#051630] rounded-xl opacity-10 transform -rotate-3"></div>
              <Image
                src="/images/about-hero.png"
                alt="Foodyari Team"
                width={600}
                height={400}
                className="rounded-xl relative z-10 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#051630] mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-[#4169e1] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The journey from a passionate chef's kitchen to a global culinary education platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Foodyari began in 2018 when Harish Kumar, a professional chef with 15 years of experience, recognized a
                gap in culinary education. While working in restaurants and teaching cooking classes, he noticed that
                many home cooks struggled with the same fundamental techniques and lacked confidence in the kitchen.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Inspired to make professional culinary education more accessible, Harish started recording cooking
                lessons from his home kitchen. What began as simple tutorial videos quickly evolved as students
                responded enthusiastically to his practical, approachable teaching style.
              </p>
              <p className="text-lg text-gray-700">
                Today, Foodyari has grown into a comprehensive culinary education platform with a team of expert
                instructors, serving over 25,000 students worldwide. We remain committed to our founding mission:
                empowering people to cook with confidence, creativity, and joy.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/our-story.png"
                alt="Foodyari Story"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#051630] text-white p-6 rounded-xl shadow-lg max-w-xs">
                <p className="text-lg font-medium mb-2">
                  "Cooking is a language through which we share culture, heritage, and love. Our mission is to make this
                  language accessible to everyone."
                </p>
                <p className="text-sm text-gray-300">— Harish Kumar, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#051630] mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-[#4169e1] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Foodyari
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-[#4169e1]/20 transition-all duration-300 hover:shadow-md">
              <div className="bg-[#EBF2FF] p-4 rounded-full inline-block mb-6">
                <Award className="h-8 w-8 text-[#4169e1]" />
              </div>
              <h3 className="text-xl font-bold text-[#051630] mb-3">Excellence</h3>
              <p className="text-gray-700">
                We are committed to delivering the highest quality culinary education, with meticulous attention to
                detail in every recipe, technique, and course we create.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-[#4169e1]/20 transition-all duration-300 hover:shadow-md">
              <div className="bg-[#EBF2FF] p-4 rounded-full inline-block mb-6">
                <Users className="h-8 w-8 text-[#4169e1]" />
              </div>
              <h3 className="text-xl font-bold text-[#051630] mb-3">Inclusivity</h3>
              <p className="text-gray-700">
                We believe everyone deserves access to quality culinary education, regardless of background or
                experience level. Our courses are designed to be approachable for all.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-[#4169e1]/20 transition-all duration-300 hover:shadow-md">
              <div className="bg-[#EBF2FF] p-4 rounded-full inline-block mb-6">
                <BookOpen className="h-8 w-8 text-[#4169e1]" />
              </div>
              <h3 className="text-xl font-bold text-[#051630] mb-3">Authenticity</h3>
              <p className="text-gray-700">
                We honor culinary traditions while making them accessible to modern cooks. Our courses preserve
                authentic techniques and flavors from cuisines around the world.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-[#4169e1]/20 transition-all duration-300 hover:shadow-md">
              <div className="bg-[#EBF2FF] p-4 rounded-full inline-block mb-6">
                <Clock className="h-8 w-8 text-[#4169e1]" />
              </div>
              <h3 className="text-xl font-bold text-[#051630] mb-3">Practicality</h3>
              <p className="text-gray-700">
                We focus on practical, applicable skills that students can immediately use in their own kitchens, with
                clear instructions and realistic expectations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-[#4169e1]/20 transition-all duration-300 hover:shadow-md">
              <div className="bg-[#EBF2FF] p-4 rounded-full inline-block mb-6">
                <Globe className="h-8 w-8 text-[#4169e1]" />
              </div>
              <h3 className="text-xl font-bold text-[#051630] mb-3">Cultural Respect</h3>
              <p className="text-gray-700">
                We approach each cuisine with respect for its cultural context and history, sharing not just recipes but
                the stories and traditions behind them.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-[#4169e1]/20 transition-all duration-300 hover:shadow-md">
              <div className="bg-[#EBF2FF] p-4 rounded-full inline-block mb-6">
                <Check className="h-8 w-8 text-[#4169e1]" />
              </div>
              <h3 className="text-xl font-bold text-[#051630] mb-3">Continuous Growth</h3>
              <p className="text-gray-700">
                We believe in lifelong learning and constantly evolve our content and teaching methods to provide the
                best possible experience for our students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 px-4" id="team">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#051630] mb-4">Meet Our Team</h2>
            <div className="w-24 h-1 bg-[#4169e1] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The culinary experts behind Foodyari's courses and content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 group hover:border-[#4169e1]/20 transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051630]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <div className="flex space-x-3 mb-2">
                        {Object.entries(member.social).map(([platform, url], idx) => (
                          <a
                            key={idx}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                          >
                            {platform === "instagram" && (
                              <Image src="/icons/instagram.svg" alt="Instagram" width={16} height={16} />
                            )}
                            {platform === "linkedin" && (
                              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={16} height={16} />
                            )}
                            {platform === "twitter" && (
                              <Image src="/icons/twitter.svg" alt="Twitter" width={16} height={16} />
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-[#051630] mb-1 group-hover:text-[#4169e1] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[#4169e1] text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div>
                    <p className="text-xs font-medium text-gray-700 mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 px-4 bg-[#051630] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-[#4169e1]">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-[#4169e1] mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Key milestones in Foodyari's growth and evolution</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#4169e1]/30"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className="w-1/2"></div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#4169e1] z-10 border-4 border-[#051630]"></div>

                  <div className={`w-1/2 ${index % 2 === 0 ? "pl-12" : "pr-12"}`}>
                    <div className="bg-[#0a2a5e] p-6 rounded-xl">
                      <div className="text-[#4169e1] font-bold text-2xl mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#051630] mb-6">Join Our Culinary Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Become part of our growing community of food enthusiasts and transform your cooking skills
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/courses">
              <Button className="bg-[#4169e1] hover:bg-[#3a5ecc] text-white rounded-full px-8 py-6 text-lg cta-button">
                Explore Our Courses
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-transparent hover:bg-[#4169e1]/10 text-[#4169e1] border border-[#4169e1] rounded-full px-8 py-6 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
