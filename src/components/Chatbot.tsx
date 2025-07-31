import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Bot, User, Sparkles } from "lucide-react";

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

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Greeting responses
    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hey")
    ) {
      return "Hello! 👋 Welcome to TravelBook! I'm your personal travel assistant. I can help you discover amazing destinations, find the perfect hotels, and plan your dream vacation. What would you like to explore today?";
    }

    // Trip-related queries
    if (
      message.includes("trip") &&
      (message.includes("manali") || message.includes("to manali"))
    ) {
      onTripSearch("Manali");
      return "🏔️ Excellent choice! Manali is absolutely breathtaking! I found the perfect 'Magical Manali Adventure' package for you:\n\n✨ 5 Days 4 Nights of pure mountain bliss\n🎿 Adventure activities included\n🏨 Premium accommodation\n💰 Starting at just ₹15,999\n\nThe package includes visits to Rohtang Pass, Solang Valley, and much more! Would you like to know about hotels in Manali too?";
    }

    if (
      message.includes("trip") &&
      (message.includes("goa") || message.includes("to goa"))
    ) {
      onTripSearch("Goa");
      return "🏖️ Perfect choice for beach lovers! Goa is paradise on earth! Check out our 'Goa Beach Paradise' package:\n\n🌊 4 Days 3 Nights of beach bliss\n🏄‍♂️ Water sports included\n🍹 Beach shacks & nightlife\n💰 Starting at ₹12,999\n\nYou'll love Baga Beach, Calangute, and the vibrant Goan culture! Need hotel recommendations?";
    }

    if (
      message.includes("trip") &&
      (message.includes("jaipur") || message.includes("to jaipur"))
    ) {
      onTripSearch("Jaipur");
      return "🏰 Royal choice! Jaipur, the Pink City, is absolutely magnificent! Our 'Royal Jaipur Heritage' package offers:\n\n👑 3 Days 2 Nights of royal luxury\n🏛️ Amber Fort, City Palace visits\n🎭 Cultural shows included\n💰 Starting at ₹9,999\n\nExperience the grandeur of Rajasthani culture and architecture! Shall I show you heritage hotels too?";
    }

    if (
      message.includes("trip") &&
      (message.includes("kerala") || message.includes("to kerala"))
    ) {
      onTripSearch("Kerala");
      return "🌴 Wonderful choice! Kerala truly is 'God's Own Country'! Our 'Kerala Backwaters' package includes:\n\n🛶 6 Days 5 Nights of serenity\n🌿 Houseboat experiences\n☕ Spice plantation tours\n💰 Starting at ₹18,999\n\nMunnar tea gardens, Alleppey backwaters, and Ayurvedic treatments await you! Want to see backwater resorts?";
    }

    if (
      message.includes("trip") &&
      (message.includes("shimla") || message.includes("to shimla"))
    ) {
      onTripSearch("Shimla");
      return "🏔️ Great choice! Shimla's colonial charm is irresistible! Our 'Shimla Hill Station' package features:\n\n🚂 4 Days 3 Nights in the hills\n🏛️ Colonial architecture tours\n❄️ Cool mountain weather\n💰 Starting at ₹11,999\n\nEnjoy Mall Road, The Ridge, and stunning Himalayan views! Looking for mountain lodges?";
    }

    if (
      message.includes("trip") &&
      (message.includes("udaipur") || message.includes("to udaipur"))
    ) {
      onTripSearch("Udaipur");
      return "🏰 Perfect choice! Udaipur, the 'Venice of the East', is pure romance! Our heritage package offers:\n\n💎 3 Days 2 Nights of royal elegance\n🏛️ Lake Palace & City Palace tours\n⛵ Boat rides on Lake Pichola\n💰 Starting at ₹13,999\n\nExperience the most romantic city in India! Want to see lakeside palace hotels?";
    }

    // Delhi specific
    if (
      message.includes("trip") &&
      (message.includes("delhi") || message.includes("to delhi"))
    ) {
      return "🏛️ Delhi, the heart of India! While we don't have a specific Delhi package, I can help you explore:\n\n🕌 Red Fort & India Gate\n🏛️ Lotus Temple & Qutub Minar\n🛍️ Chandni Chowk markets\n🍛 Amazing street food\n\nWould you like hotel recommendations in Delhi or nearby destinations like Agra for the Taj Mahal?";
    }

    // Mumbai specific
    if (
      message.includes("trip") &&
      (message.includes("mumbai") || message.includes("to mumbai"))
    ) {
      return "🌆 Mumbai, the City of Dreams! While we focus on leisure destinations, I can suggest:\n\n🎬 Bollywood tours\n🏖️ Marine Drive & Juhu Beach\n🏛️ Gateway of India\n🛍️ Colaba Causeway shopping\n\nFor beach experiences, I'd highly recommend our Goa packages! Shall I show you those?";
    }

    // Hotel-related queries
    if (message.includes("hotel") && message.includes("manali")) {
      return "🏔️ For Manali, I highly recommend:\n\n🏨 **Snow Valley Resort** (Old Manali)\n⭐ 4.4/5 rating\n💰 ₹3,500/night\n✨ Features: Mountain views, spa, restaurant, WiFi\n\nPerfect location with breathtaking Himalayan views! The spa services are amazing after a day of adventure activities. Book now for the best rates!";
    }

    if (message.includes("hotel") && message.includes("goa")) {
      return "🏖️ For Goa, perfect beachfront option:\n\n🏨 **Beach Bliss Hotel** (Calangute Beach)\n⭐ 4.2/5 rating\n💰 ₹2,800/night\n✨ Features: Direct beach access, pool, restaurant, bar\n\nWake up to ocean views and step directly onto the golden sands! The beachside restaurant serves amazing seafood. Ideal for beach lovers!";
    }

    if (message.includes("hotel") && message.includes("jaipur")) {
      return "🏰 For Jaipur, experience royalty:\n\n🏨 **Heritage Palace Hotel** (City Palace Area)\n⭐ 4.6/5 rating\n💰 ₹4,200/night\n✨ Features: Heritage property, cultural shows, royal dining, gardens\n\nStay like a Maharaja! This authentic heritage hotel offers traditional Rajasthani hospitality with evening cultural performances. Truly royal experience!";
    }

    if (message.includes("hotel") && message.includes("kerala")) {
      return "🌴 For Kerala, unique backwater experience:\n\n🏨 **Backwater Resort** (Alleppey)\n⭐ 4.7/5 rating\n💰 ₹5,500/night\n✨ Features: Floating houseboats, Ayurvedic spa, local cuisine, boating\n\nFloat on tranquil backwaters in traditional houseboats! Includes authentic Kerala meals and rejuvenating Ayurvedic treatments. Pure bliss!";
    }

    if (message.includes("hotel") && message.includes("shimla")) {
      return "🏔️ For Shimla, colonial charm awaits:\n\n🏨 **Mountain View Lodge** (Mall Road)\n⭐ 4.1/5 rating\n💰 ₹2,200/night\n✨ Features: Panoramic mountain views, fireplace, colonial architecture, library\n\nExperience old-world charm with modern comfort! Perfect location on Mall Road with stunning Himalayan views. Cozy fireplaces for chilly evenings!";
    }

    if (message.includes("hotel") && message.includes("udaipur")) {
      return "🏰 For Udaipur, ultimate luxury:\n\n🏨 **Lake Palace Resort** (Lake Pichola)\n⭐ 4.9/5 rating\n💰 ₹6,800/night\n✨ Features: Lake views, royal suites, fine dining, boat service\n\nThe most romantic hotel in India! Overlooking the shimmering Lake Pichola with royal suites and private boat transfers. Pure luxury and romance!";
    }

    // Attraction-related queries
    if (message.includes("visit") && message.includes("manali")) {
      return "🏔️ Top attractions in Manali:\n\n🎿 **Rohtang Pass** (51km from city)\n⏰ Open: 6 AM - 6 PM\n✨ Activities: Snow sports, mountain views, photography\n\n🏔️ **Solang Valley** - Adventure sports paradise\n🏛️ **Hadimba Temple** - Ancient cedar wood temple\n🌊 **Beas River** - Perfect for rafting\n\nRohtang Pass offers breathtaking 360° mountain views and snow activities year-round!";
    }

    if (message.includes("visit") && message.includes("goa")) {
      return "🏖️ Must-visit places in Goa:\n\n🌊 **Baga Beach** (North Goa)\n⏰ Open: 24 hours\n✨ Activities: Water sports, beach shacks, nightlife, parasailing\n\n🏖️ **Calangute Beach** - Queen of beaches\n🏛️ **Basilica of Bom Jesus** - UNESCO World Heritage\n🌅 **Anjuna Beach** - Famous for flea markets\n\nBaga Beach is the heart of Goa's party scene with amazing seafood and water adventures!";
    }

    if (message.includes("visit") && message.includes("jaipur")) {
      return "🏰 Must-visit attractions in Jaipur:\n\n🏛️ **Amber Fort** (Amer)\n⏰ Open: 8 AM - 6 PM\n✨ Features: Rajput architecture, elephant rides, mirror palace\n\n🏰 **City Palace** - Royal residence with museums\n🕌 **Hawa Mahal** - Palace of Winds\n🏛️ **Jantar Mantar** - Ancient astronomical observatory\n\nAmber Fort is absolutely magnificent with its intricate mirror work and stunning hilltop location!";
    }

    if (message.includes("visit") && message.includes("kerala")) {
      return "🌴 Must-visit places in Kerala:\n\n☕ **Munnar Tea Gardens**\n⏰ Open: 6 AM - 7 PM\n✨ Features: Rolling hills, tea plantations, scenic beauty, tea tasting\n\n🛶 **Alleppey Backwaters** - Houseboat cruises\n🌿 **Periyar Wildlife Sanctuary** - Elephant spotting\n🏖️ **Kovalam Beach** - Pristine coastline\n\nMunnar's tea gardens offer the most Instagram-worthy views in India with endless green hills!";
    }

    if (message.includes("visit") && message.includes("shimla")) {
      return "🏔️ Top attractions in Shimla:\n\n🏛️ **The Ridge** (Mall Road)\n⏰ Open: 24 hours\n✨ Features: Colonial architecture, panoramic views, shopping, cafes\n\n🚂 **Toy Train** - UNESCO World Heritage railway\n⛪ **Christ Church** - Neo-Gothic architecture\n🏔️ **Kufri** - Hill station with adventure activities\n\nThe Ridge is Shimla's beating heart with stunning mountain vistas and colonial charm!";
    }

    if (message.includes("visit") && message.includes("udaipur")) {
      return "🏰 Must-visit attractions in Udaipur:\n\n🏛️ **City Palace Complex**\n⏰ Open: 9 AM - 5 PM\n✨ Features: Lake Pichola views, royal artifacts, museums, architecture\n\n🏰 **Lake Palace** - Floating marble palace\n🏛️ **Jag Mandir** - Island palace\n🌅 **Sunset Point** - Fateh Sagar Lake views\n\nCity Palace is absolutely majestic - the largest palace complex in Rajasthan with breathtaking lake views!";
    }

    // Budget queries
    if (
      message.includes("budget") ||
      message.includes("cheap") ||
      message.includes("affordable")
    ) {
      return "💰 Budget-friendly options for you:\n\n🎯 **Most Affordable Trips:**\n• Jaipur Heritage - ₹9,999 (3D/2N)\n• Shimla Hill Station - ₹11,999 (4D/3N)\n• Goa Beach Paradise - ₹12,999 (4D/3N)\n\n🏨 **Budget Hotels:**\n• Mountain View Lodge, Shimla - ₹2,200/night\n• Beach Bliss Hotel, Goa - ₹2,800/night\n\nAll packages include accommodation, meals, and sightseeing! Which destination interests you most?";
    }

    // Luxury queries
    if (
      message.includes("luxury") ||
      message.includes("premium") ||
      message.includes("expensive")
    ) {
      return "✨ Luxury experiences for you:\n\n👑 **Premium Packages:**\n• Kerala Backwaters - ₹18,999 (6D/5N) - Houseboat luxury\n• Magical Manali Adventure - ₹15,999 (5D/4N) - Mountain luxury\n• Udaipur City of Lakes - ₹13,999 (3D/2N) - Royal luxury\n\n🏨 **Luxury Hotels:**\n• Lake Palace Resort, Udaipur - ₹6,800/night\n• Backwater Resort, Kerala - ₹5,500/night\n\nExperience royal treatment with premium amenities! Which luxury destination calls to you?";
    }

    // General queries
    if (message.includes("help") || message.includes("what can you do")) {
      return "🤖 I'm your personal travel assistant! Here's how I can help:\n\n✈️ **Trip Planning:**\n• Find perfect packages for any destination\n• Compare prices and durations\n• Suggest activities and experiences\n\n🏨 **Hotel Booking:**\n• Recommend best hotels by location\n• Compare ratings and amenities\n• Find budget to luxury options\n\n🗺️ **Destination Guide:**\n• Top attractions and timings\n• Local experiences and culture\n• Best time to visit tips\n\nJust ask me about any Indian destination! Try: 'Show me trips to Manali' or 'Best hotels in Goa'";
    }

    if (
      message.includes("price") ||
      message.includes("cost") ||
      message.includes("budget")
    ) {
      return "💰 **Our Pricing Guide:**\n\n✈️ **Trip Packages:**\n• Budget: ₹9,999 - ₹12,999 (Jaipur, Shimla, Goa)\n• Premium: ₹13,999 - ₹18,999 (Udaipur, Manali, Kerala)\n\n🏨 **Hotels per night:**\n• Budget: ₹2,200 - ₹3,500\n• Luxury: ₹4,200 - ₹6,800\n\n💡 **What's Included:**\n• Accommodation & meals\n• Sightseeing & transfers\n• Local guide services\n\nWhich price range works best for your dream vacation?";
    }

    if (message.includes("thank") || message.includes("thanks")) {
      return "🙏 You're most welcome! I'm thrilled to help make your travel dreams come true! \n\n✨ Remember, every journey begins with a single step, and I'm here to guide you through every step of your adventure planning.\n\nFeel free to ask me anything about destinations, hotels, or attractions. Happy travels! 🌟";
    }

    // Weather queries
    if (
      message.includes("weather") ||
      message.includes("climate") ||
      message.includes("temperature")
    ) {
      return "🌤️ **Best Time to Visit:**\n\n❄️ **Hill Stations** (Manali, Shimla):\n• Best: March-June, Sept-Nov\n• Avoid: Heavy monsoons (July-Aug)\n\n🏖️ **Beach Destinations** (Goa):\n• Best: Oct-March (pleasant weather)\n• Avoid: Monsoons (June-Sept)\n\n🏰 **Heritage Cities** (Jaipur, Udaipur):\n• Best: Oct-March (cool & comfortable)\n• Summer: Very hot (April-June)\n\n🌴 **Kerala:**\n• Best: Sept-March (post-monsoon)\n• Monsoons: June-Aug (lush but rainy)\n\nWhich destination's weather interests you most?";
    }

    // Food queries
    if (
      message.includes("food") ||
      message.includes("cuisine") ||
      message.includes("eat")
    ) {
      return "🍛 **Delicious Local Cuisines:**\n\n🏔️ **Manali/Shimla:** Himachali cuisine, momos, thukpa\n🏖️ **Goa:** Fresh seafood, vindaloo, bebinca dessert\n🏰 **Jaipur/Udaipur:** Dal baati churma, laal maas, ghewar\n🌴 **Kerala:** Coconut curry, appam, fish moilee, payasam\n\n🍽️ All our packages include:\n• Welcome drinks\n• Daily breakfast\n• Local specialty dinners\n• Food tours in select packages\n\nWhich cuisine excites your taste buds most?";
    }

    // Default response
    return "🤔 I'd love to help you plan your perfect trip! Here are some things you can ask me:\n\n✈️ **Trip Queries:**\n• 'Show me trips to Manali'\n• 'Best packages for Goa'\n• 'Kerala backwater tours'\n\n🏨 **Hotel Questions:**\n• 'Hotels in Jaipur'\n• 'Luxury resorts in Udaipur'\n• 'Budget stays in Shimla'\n\n🗺️ **Attraction Info:**\n• 'What to visit in Kerala'\n• 'Top places in Goa'\n• 'Jaipur sightseeing spots'\n\n💡 **Other Help:**\n• Budget planning\n• Best time to visit\n• Local cuisine info\n\nWhat destination is calling your heart? 💫";
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Get bot response
    const botResponse = getBotResponse(inputText);

    // Add bot message after a short delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);

    setInputText("");
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
