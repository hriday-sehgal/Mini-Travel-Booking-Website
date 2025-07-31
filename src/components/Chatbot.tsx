import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Bot, User, Sparkles } from "lucide-react";
import { openRouterAPI } from "../services/openRouterApi";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatbotProps {
  onTripSearch: (city: string) => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onTripSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm your travel assistant. I can help you find trips, hotels, and attractions. Try asking me something like 'Show me trips to Manali' or 'What hotels are available in Goa?'",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    openRouterAPI.setTripSearchCallback(onTripSearch);
  }, [onTripSearch]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const currentInput = inputText; // Store the current input
    setInputText(""); // Clear input immediately

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: currentInput,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Show typing indicator
    const typingMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: "Thinking...",
      isBot: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, typingMessage]);

    try {
      // Get AI response from OpenRouter API
      const botResponse = await openRouterAPI.sendMessage(currentInput);

      // Remove typing indicator and add actual response
      setMessages((prev) => {
        const filtered = prev.filter((msg) => msg.id !== typingMessage.id);
        return [
          ...filtered,
          {
            id: (Date.now() + 2).toString(),
            text: botResponse,
            isBot: true,
            timestamp: new Date(),
          },
        ];
      });
    } catch (error) {
      console.error("Error getting AI response:", error);

      // Remove typing indicator and add error message
      setMessages((prev) => {
        const filtered = prev.filter((msg) => msg.id !== typingMessage.id);
        return [
          ...filtered,
          {
            id: (Date.now() + 2).toString(),
            text: "Sorry, I'm having trouble connecting right now. Please try again in a moment! 🤖",
            isBot: true,
            timestamp: new Date(),
          },
        ];
      });
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 z-50 hover:scale-110 border-2 border-white/20"
      >
        {isOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 absolute -top-1 -right-1 text-yellow-300" />
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 sm:bottom-24 right-2 sm:right-6 left-2 sm:left-auto w-auto sm:w-96 h-[400px] sm:h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white p-3 sm:p-4 rounded-t-2xl">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative">
                <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
                <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 absolute -top-1 -right-1 text-yellow-300" />
              </div>
              <div>
                <span className="font-bold text-base sm:text-lg">
                  Travel Assistant
                </span>
                <div className="text-blue-100 text-xs">
                  Powered by AI • Always Online
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gradient-to-b from-blue-50/30 to-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isBot ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[80%] p-2 sm:p-3 rounded-lg ${
                    message.isBot
                      ? "bg-white text-gray-800 shadow-md border border-gray-100"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  }`}
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    {message.isBot && (
                      <div className="relative">
                        <Bot className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0 text-blue-600" />
                        <Sparkles className="w-1.5 h-1.5 sm:w-2 sm:h-2 absolute -top-0.5 -right-0.5 text-yellow-500" />
                      </div>
                    )}
                    {!message.isBot && (
                      <User className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" />
                    )}
                    <span className="text-xs sm:text-sm whitespace-pre-line leading-relaxed">
                      {message.text}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 sm:p-4 border-t border-gray-200 bg-gray-50"
          >
            <div className="flex gap-2 sm:gap-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask me about trips, hotels, attractions..."
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-xs sm:text-sm bg-white"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 sm:p-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
