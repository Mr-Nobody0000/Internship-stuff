"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Sparkles } from "lucide-react"
import Image from "next/image"

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState<{ type: "user" | "bot"; message: string }[]>([
    { type: "bot", message: "Hi there! 👋 How can I help you with your culinary journey today?" },
  ])
  const [isTyping, setIsTyping] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = () => {
    if (message.trim() === "") return

    // Add user message to chat
    setChatHistory([...chatHistory, { type: "user", message }])
    setMessage("")

    // Simulate bot typing
    setIsTyping(true)

    // Simulate bot response after delay
    setTimeout(() => {
      setIsTyping(false)

      // Predefined responses based on keywords
      let botResponse = "I'm not sure I understand. Could you please provide more details about your cooking question?"

      const lowerCaseMessage = message.toLowerCase()

      if (lowerCaseMessage.includes("course") || lowerCaseMessage.includes("class")) {
        botResponse =
          "We offer a variety of cooking courses for all skill levels. You can browse our full catalog at foodyari.com/courses or let me know what cuisine you're interested in learning!"
      } else if (lowerCaseMessage.includes("recipe") || lowerCaseMessage.includes("cook")) {
        botResponse =
          "Looking for recipe ideas? Check out our blog for free recipes or consider our courses for in-depth culinary techniques. What kind of dish are you interested in making?"
      } else if (
        lowerCaseMessage.includes("price") ||
        lowerCaseMessage.includes("cost") ||
        lowerCaseMessage.includes("discount")
      ) {
        botResponse =
          "Our courses range from ₹1,499 to ₹4,999 depending on the complexity and duration. We also offer special discounts for new students and seasonal promotions. Would you like me to notify you of our next sale?"
      } else if (
        lowerCaseMessage.includes("hello") ||
        lowerCaseMessage.includes("hi") ||
        lowerCaseMessage.includes("hey")
      ) {
        botResponse = "Hello! Welcome to Foodyari. How can I help you with your culinary journey today?"
      }

      setChatHistory((prev) => [...prev, { type: "bot", message: botResponse }])
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  useEffect(() => {
    // Auto-scroll to bottom of chat when new messages arrive
    const chatContainer = document.getElementById("chat-messages")
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight
    }
  }, [chatHistory, isTyping])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mb-4 mr-4 w-80 sm:w-96 bg-[#1e293b] rounded-2xl shadow-2xl overflow-hidden border border-[#334155]"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] p-4 flex justify-between items-center border-b border-[#334155]">
              <div className="flex items-center">
                <div className="relative">
                  <Image
                    src="/images/chef-avatar.png"
                    alt="Chef Assistant"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-[#60a5fa]"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1e293b]"></span>
                </div>
                <div className="ml-3">
                  <h3 className="font-bold text-white">Chef Assistant</h3>
                  <p className="text-xs text-gray-400">Online | Typically replies in minutes</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div
              id="chat-messages"
              className="p-4 h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-[#334155] scrollbar-track-transparent"
            >
              {chatHistory.map((chat, index) => (
                <div key={index} className={`mb-4 flex ${chat.type === "user" ? "justify-end" : "justify-start"}`}>
                  {chat.type === "bot" && (
                    <div className="mr-2 flex-shrink-0">
                      <Image
                        src="/images/chef-avatar.png"
                        alt="Chef Assistant"
                        width={32}
                        height={32}
                        className="rounded-full border border-[#334155]"
                      />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      chat.type === "user"
                        ? "bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] text-white"
                        : "bg-[#0f172a] text-white border border-[#334155]"
                    }`}
                  >
                    {chat.message}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="mb-4 flex justify-start">
                  <div className="mr-2 flex-shrink-0">
                    <Image
                      src="/images/chef-avatar.png"
                      alt="Chef Assistant"
                      width={32}
                      height={32}
                      className="rounded-full border border-[#334155]"
                    />
                  </div>
                  <div className="bg-[#0f172a] p-3 rounded-lg text-white border border-[#334155]">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-[#334155] bg-[#0f172a]">
              <div className="flex items-center">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-grow bg-[#1e293b] border border-[#334155] rounded-lg p-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#60a5fa] resize-none h-10 min-h-[40px] max-h-32"
                  rows={1}
                ></textarea>
                <button
                  onClick={handleSendMessage}
                  className={`ml-2 p-2 rounded-full ${
                    message.trim() === ""
                      ? "bg-[#334155] text-gray-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] text-white"
                  }`}
                  disabled={message.trim() === ""}
                  aria-label="Send message"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-2 text-xs text-gray-500 flex items-center justify-center">
                <Sparkles className="h-3 w-3 mr-1 text-[#60a5fa]" />
                Powered by Foodyari AI Assistant
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        <AnimatePresence>
          {isHovered && !isOpen && (
            <motion.div
              className="absolute bottom-full right-0 mb-2 bg-white text-[#0f172a] py-2 px-4 rounded-lg shadow-lg text-sm font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              Chat with our culinary assistant!
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          className="bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] text-white p-4 rounded-full flex items-center justify-center shadow-lg shadow-[#60a5fa]/20"
          onClick={toggleChat}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Chat with us"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </motion.button>
      </div>
    </div>
  )
}
