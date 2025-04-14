"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ThreeDFoodScene() {
  return (
    <section className="py-20 px-4 relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Interactive Culinary Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Explore our immersive culinary world</p>
        </div>

        <div className="w-full h-[500px] rounded-2xl overflow-hidden glass-card border border-[#3b82f6]/20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f18] to-[#141e2c]"></div>

          <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center gap-8 p-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4 text-white">Immersive Learning Environment</h3>
              <p className="text-gray-300 mb-6">
                Our interactive 3D culinary experiences bring cooking to life. Learn techniques from every angle and
                master the art of cooking with our innovative approach to culinary education.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="glass-effect px-4 py-2 rounded-full text-[#60a5fa]">Culinary Excellence</div>
                <div className="glass-effect px-4 py-2 rounded-full text-[#8b5cf6]">Expert Chefs</div>
                <div className="glass-effect px-4 py-2 rounded-full text-[#60a5fa]">Immersive Learning</div>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotateY: [0, 180, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/images/3d-cooking-experience.jpg"
                    alt="3D Culinary Experience"
                    width={300}
                    height={300}
                    className="object-contain rounded-xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
