import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Foodyari - Immersive Culinary Education | Master the Art of Cooking",
  description:
    "Transform your cooking skills with expert-led courses. From Indian to Italian cuisine, desserts to healthy meals - elevate your culinary journey with Foodyari's interactive learning experience.",
  keywords:
    "cooking courses, culinary education, Indian cuisine, Italian cooking, dessert making, healthy cooking, food blog, recipes, chef training, online cooking classes",
  creator: "Harish Kumar",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'