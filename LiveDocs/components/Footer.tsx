"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Chatbot from "@/components/chatbot"
import { FiMessageSquare } from "react-icons/fi"

const Footer = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  return (
    <footer className="bg-gray-900 text-white w-full relative">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-gray-300">
          Made with ❤️ by{" Kriti Mahajan "}
        </p>
        <div className="flex justify-center gap-6 mt-3">
          <a href="/about" className="text-gray-300 hover:text-white">
            About Us
          </a>
          <a href="/privacy" className="text-gray-300 hover:text-white">
            Privacy Policy
          </a>
          <a href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
      </div>

      {/* Chatbot Icon */}
      <div className="fixed bottom-5 right-5 z-50">
        <Button
          className="p-3 rounded-full bg-blue-500 text-black"
          onClick={() => setIsChatbotOpen(!isChatbotOpen)}
        >
          <FiMessageSquare size={24} />
        </Button>
      </div>

      {/* Chatbot */}
      {isChatbotOpen && (
        <div className="fixed bottom-20 right-5 z-50">
          <Chatbot />
        </div>
      )}
    </footer>
  )
}

export default Footer
