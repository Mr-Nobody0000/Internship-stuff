import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Clock } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Indian Spices Every Home Cook Should Have",
    excerpt:
      "Discover the foundational spices that bring authentic Indian flavors to your kitchen and learn how to use them effectively.",
    image: "/images/blog-spices.png",
    category: "Indian Cuisine",
    date: "May 15, 2023",
    readTime: "6 min read",
    slug: "essential-indian-spices",
  },
  {
    id: 2,
    title: "The Art of Perfect Pasta: Common Mistakes to Avoid",
    excerpt:
      "Learn the techniques professional chefs use to create perfect pasta every time and the mistakes that might be ruining your dishes.",
    image: "/images/blog-pasta.png",
    category: "Italian Cuisine",
    date: "April 28, 2023",
    readTime: "8 min read",
    slug: "perfect-pasta-mistakes",
  },
  {
    id: 3,
    title: "Healthy Meal Prep: A Beginner's Guide to Weekly Planning",
    excerpt: "Transform your eating habits with our comprehensive guide to efficient and nutritious meal preparation.",
    image: "/images/blog-meal-prep.png",
    category: "Healthy Cooking",
    date: "June 2, 2023",
    readTime: "10 min read",
    slug: "healthy-meal-prep-guide",
  },
]

export default function BlogPreview() {
  return (
    <section className="py-20 px-4 bg-gray-50" id="blog">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#051630] mb-4">
            Latest From Our <span className="text-[#4169e1]">Blog</span>
          </h2>
          <div className="w-24 h-1 bg-[#4169e1] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Culinary insights, tips, and recipes to enhance your cooking journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm h-full transition-all duration-300 hover:shadow-md border border-transparent hover:border-[#4169e1]/20">
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#4169e1] text-white text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-[#051630] group-hover:text-[#4169e1] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="text-[#4169e1] font-medium flex items-center group-hover:underline">
                    Read More
                    <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/blog">
            <Button className="bg-[#4169e1] hover:bg-[#3a5ecc] text-white rounded-full px-8 py-2">
              View All Articles
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
