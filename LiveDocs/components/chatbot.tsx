"use client"
import { useState } from "react"
import axios from "axios"

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", from: "bot" },
  ])
  const [userMessage, setUserMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false) // To show loading state

  const sendMessage = async () => {
    if (!userMessage) return

    const newMessages = [...messages, { text: userMessage, from: "user" }]
    setMessages(newMessages)
    setUserMessage("")
    setIsLoading(true)

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_APP_API_KEY}`, // Use the key from .env
        {
          contents: [
            {
              parts: [{ text: userMessage }], // User's message
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json", // Required headers
          },
        }
      )

      // Extract the bot's response
      const botResponse =
        response.data?.contents?.[0]?.parts?.[0]?.text || "helloo"
      setMessages([...newMessages, { text: botResponse, from: "bot" }])
    } catch (error) {
      console.error("Error communicating with the API:", error)
      setMessages([
        ...newMessages,
        { text: "Something went wrong. Please try again later.", from: "bot" },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="chatbot-container bg-white p-4 rounded-lg shadow-lg w-80 h-96">
      {/* Chat messages */}
      <div className="chat-messages overflow-y-auto h-4/5">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${
              msg.from === "user" ? "text-right" : "text-left"
            }`}
          >
            <p
              className={`${
                msg.from === "user"
                  ? "bg-blue-500 text-black p-2 rounded-md"
                  : "bg-gray-200 p-2 rounded-md"
              }`}
            >
              {msg.text}
            </p>
          </div>
        ))}
        {isLoading && (
          <div className="chat-message text-left">
            <p className="bg-gray-200 p-2 rounded-md">Typing...</p>
          </div>
        )}
      </div>

      {/* Chat input */}
      <div className="chat-input mt-2 flex">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          className="flex-grow p-2 border rounded-l-md"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-black px-4 rounded-r-md"
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default Chatbot
