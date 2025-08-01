interface OpenRouterResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export class OpenRouterAPI {
  private apiKey: string;
  private siteUrl: string;
  private siteName: string;
  private onTripSearch?: (city: string) => void;

  constructor() {
    this.apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
    this.siteUrl =
      import.meta.env.VITE_SITE_URL || "https://travelbookwebsite.vercel.app/";
    this.siteName = import.meta.env.VITE_SITE_NAME || "TravelBook";
  }

  setTripSearchCallback(callback: (city: string) => void) {
    this.onTripSearch = callback;
  }

  private isTravelRelatedQuery(userMessage: string): boolean {
    const message = userMessage.toLowerCase();

    // Travel-related keywords
    const travelKeywords = [
      // Destinations
      "travel",
      "trip",
      "visit",
      "destination",
      "place",
      "city",
      "town",
      "village",
      "manali",
      "goa",
      "jaipur",
      "kerala",
      "shimla",
      "udaipur",
      "delhi",
      "mumbai",
      "varanasi",
      "rishikesh",
      "dharamshala",
      "coorg",
      "ooty",
      "darjeeling",
      "munnar",
      "alleppey",
      "thekkady",
      "wayanad",
      "jodhpur",
      "jaisalmer",
      "spiti",
      "kashmir",
      "ladakh",
      "sikkim",
      "assam",
      "meghalaya",
      "arunachal",
      "nagaland",
      "manipur",

      // Accommodation
      "hotel",
      "resort",
      "guesthouse",
      "homestay",
      "accommodation",
      "stay",
      "lodging",
      "booking",
      "reservation",
      "room",
      "suite",
      "villa",
      "cabin",
      "camp",

      // Activities and attractions
      "attraction",
      "sightseeing",
      "tour",
      "tourist",
      "monument",
      "fort",
      "palace",
      "temple",
      "museum",
      "park",
      "garden",
      "beach",
      "mountain",
      "hill",
      "valley",
      "river",
      "lake",
      "waterfall",
      "forest",
      "wildlife",
      "sanctuary",
      "national park",

      // Travel planning
      "plan",
      "itinerary",
      "schedule",
      "route",
      "journey",
      "adventure",
      "explore",
      "discover",
      "experience",
      "vacation",
      "holiday",
      "getaway",
      "escape",

      // Transportation
      "flight",
      "train",
      "bus",
      "car",
      "taxi",
      "transport",
      "travel",
      "commute",
      "airport",
      "station",
      "terminal",
      "port",
      "ferry",
      "boat",
      "cruise",

      // Seasons and weather
      "summer",
      "winter",
      "monsoon",
      "rainy",
      "season",
      "weather",
      "climate",
      "hot",
      "cold",
      "warm",
      "cool",
      "temperature",

      // Travel types
      "adventure",
      "trekking",
      "hiking",
      "camping",
      "rafting",
      "paragliding",
      "yoga",
      "meditation",
      "spiritual",
      "wellness",
      "retreat",
      "pilgrimage",
      "heritage",
      "cultural",
      "historical",
      "traditional",
      "local",
      "authentic",
      "luxury",
      "budget",
      "backpacking",
      "family",
      "romantic",
      "honeymoon",

      // Food and dining
      "food",
      "cuisine",
      "restaurant",
      "dining",
      "local food",
      "street food",
      "traditional",
      "authentic",
      "spice",
      "flavor",
      "taste",

      // Shopping and markets
      "shopping",
      "market",
      "bazaar",
      "mall",
      "store",
      "shop",
      "buy",
      "purchase",
      "souvenir",
      "craft",
      "handicraft",
      "textile",
      "jewelry",
      "art",

      // Travel services
      "guide",
      "tour guide",
      "travel agent",
      "package",
      "deal",
      "offer",
      "discount",
      "price",
      "cost",
      "budget",
      "expensive",
      "cheap",
      "affordable",

      // General travel terms
      "india",
      "indian",
      "himalayas",
      "rajasthan",
      "kerala",
      "goa",
      "himachal",
      "uttarakhand",
      "tamil nadu",
      "karnataka",
      "maharashtra",
      "gujarat",
      "west bengal",
      "assam",
      "northeast",
      "south india",
      "north india",
      "east india",
      "west india",
      "central india",
    ];

    // Check if any travel keyword is present in the message
    return travelKeywords.some((keyword) => message.includes(keyword));
  }

  async sendMessage(userMessage: string): Promise<string> {
    // Check if the query is travel-related
    if (!this.isTravelRelatedQuery(userMessage)) {
      return "I'm a travel assistant focused on helping you plan trips to India. I can help you with:\n\n• Finding destinations and attractions\n• Hotel recommendations\n• Travel planning and itineraries\n• Seasonal travel advice\n• Adventure and spiritual journeys\n\nPlease ask me about travel-related topics!";
    }

    // Handle trip searches first
    const message = userMessage.toLowerCase();
    if (message.includes("trip") || message.includes("show me")) {
      const cities = ["manali", "goa", "jaipur", "kerala", "shimla", "udaipur"];
      for (const city of cities) {
        if (message.includes(city)) {
          this.onTripSearch?.(city.charAt(0).toUpperCase() + city.slice(1));
          break;
        }
      }
    }

    // Always try AI first, only fallback if API fails
    try {
      const systemPrompt = `You are an expert Indian travel assistant for TravelBook. You ONLY respond to travel-related queries about India. If a question is not travel-related, politely redirect the user to ask about travel topics.

## Response Guidelines:
- Keep responses crisp and to the point (max 200-300 words)
- Use clear headings and bullet points for easy reading
- Include essential details: prices, best time to visit, key attractions
- No emojis - use clean, professional formatting
- Focus on practical information travelers need
- Suggest one follow-up question at the end
- Do not include any asterisks or bold text.
- ONLY answer travel-related questions about India

## Key Information to Include:
- Top 3-4 hotels/attractions/activities
- Price ranges (budget, mid-range, luxury)
- Best time to visit
- Duration recommendations
- Key highlights only

## Format Example:
Destination Name
- Best Time: Month - Month
- Duration: X days
- Budget: ₹X,000 - ₹X,000

Top Attractions:
• Place 1 - Brief description
• Place 2 - Brief description

Where to Stay:
• Hotel 1 (₹X,000/night) - Location
• Hotel 2 (₹X,000/night) - Location

Next Steps: What would you like to know about this destination?

IMPORTANT: Only answer travel-related questions about India. For non-travel queries, politely redirect to travel topics.`;

      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            "HTTP-Referer": this.siteUrl,
            "X-Title": this.siteName,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "qwen/qwen3-coder:free",
            messages: [
              {
                role: "system",
                content: systemPrompt,
              },
              {
                role: "user",
                content: userMessage,
              },
            ],
            max_tokens: 230,
            temperature: 0.5,
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `API request failed: ${response.status} - ${errorText}`
        );
      }

      const data: OpenRouterResponse = await response.json();

      const aiResponse = data.choices[0]?.message?.content;

      if (aiResponse && aiResponse.trim()) {
        return aiResponse;
      } else {
        throw new Error("Empty response from AI");
      }
    } catch {
      return this.getFallbackResponse(userMessage);
    }
  }

  private getFallbackResponse(userMessage: string): string {
    const message = userMessage.toLowerCase();

    // Best places for summer
    if (message.includes("summer") || message.includes("hot weather")) {
      return "Best Places for Summer in India\n\nHill Stations:\n• Manali, Himachal Pradesh - Adventure sports, Rohtang Pass\n• Shimla, Himachal Pradesh - Colonial charm, Mall Road\n• Ooty, Tamil Nadu - Tea gardens, botanical gardens\n• Darjeeling, West Bengal - Tea estates, Himalayan Railway\n• Munnar, Kerala - Rolling hills, spice plantations\n\nWhy Hill Stations in Summer?\n• Escape the heat (15-25°C vs 35-45°C in plains)\n• Breathtaking mountain landscapes\n• Adventure activities (trekking, paragliding, rafting)\n• Fresh mountain air and scenic beauty\n\nBudget Range: ₹12,000 - ₹25,000 for 4-5 days\n\nWhich hill station would you like to explore?";
    }

    // Best places for monsoon
    if (message.includes("monsoon") || message.includes("rainy season")) {
      return "Best Places for Monsoon in India\n\nKerala Backwaters:\n• Alleppey - Houseboat cruises, traditional cuisine\n• Munnar - Misty tea gardens, waterfalls\n• Thekkady - Wildlife spotting, boat safaris\n• Wayanad - Coffee plantations, tribal culture\n\nGoa (Post-Monsoon - Sept-Oct):\n• Fresh greenery - Lush landscapes after monsoon\n• Dudhsagar Falls - Magnificent waterfalls\n• Spice plantations - Guided tours\n• Fewer crowds - Peaceful beach experiences\n\nCoorg, Karnataka:\n• Coffee estates - Misty plantations, coffee tasting\n• Waterfalls - Abbey Falls, Iruppu Falls\n• Adventure - River rafting in swollen rivers\n\nWhy Monsoon Travel?\n• Lush green landscapes everywhere\n• Fewer tourists, more authentic experiences\n• Lower prices on hotels and packages\n\nBudget Range: ₹15,000 - ₹30,000 for 5-6 days\n\nWhich monsoon destination interests you?";
    }

    // Best places to travel in India
    if (
      message.includes("best places") ||
      message.includes("where to go") ||
      message.includes("destinations") ||
      message.includes("travel in india")
    ) {
      return "Best Places to Travel in India\n\nRajasthan - The Royal State:\n• Jaipur - Pink City, Amber Fort, City Palace\n• Udaipur - Lake City, romantic palaces\n• Jodhpur - Blue City, Mehrangarh Fort\n• Jaisalmer - Golden Fort, desert safaris\n\nKerala - God's Own Country:\n• Alleppey - Backwater houseboats\n• Munnar - Tea gardens, rolling hills\n• Kochi - Historic port city\n• Thekkady - Wildlife sanctuary\n\nHimachal Pradesh - Mountain Paradise:\n• Manali - Adventure sports, snow activities\n• Shimla - Colonial hill station\n• Dharamshala - Tibetan culture\n• Spiti Valley - High-altitude desert\n\nGoa - Beach Paradise:\n• North Goa - Party beaches, nightlife\n• South Goa - Serene beaches, luxury resorts\n• Old Goa - Historic churches\n\nBudget Guide:\n• Budget: ₹8,000 - ₹15,000 (3-5 days)\n• Premium: ₹16,000 - ₹30,000 (5-7 days)\n• Luxury: ₹35,000+ (7+ days)\n\nWhich type of experience interests you most?";
    }

    // Adventure travel
    if (
      message.includes("adventure") ||
      message.includes("trekking") ||
      message.includes("sports")
    ) {
      return "Adventure Destinations in India\n\nManali, Himachal Pradesh:\n• Rohtang Pass - Snow activities, mountain views\n• Solang Valley - Paragliding, zorbing, skiing\n• Beas River - White water rafting\n• Trekking - Hampta Pass, Bhrigu Lake\n\nRishikesh, Uttarakhand:\n• River Rafting - Ganga rapids (Grade 1-4)\n• Bungee Jumping - India's highest jump\n• Rock Climbing - Professional courses\n• Camping - Riverside camps\n\nSpiti Valley, Himachal Pradesh:\n• High-altitude trekking - Pin Parvati, Hampta Pass\n• Mountain biking - Challenging terrain\n• Monastery visits - Ancient Buddhist culture\n• Stargazing - Clear night skies\n\nAdventure Package Costs:\n• Manali Adventure: ₹15,000 - ₹25,000 (5 days)\n• Rishikesh Thrills: ₹12,000 - ₹20,000 (4 days)\n• Spiti Expedition: ₹25,000 - ₹40,000 (7 days)\n\nWhich adventure experience interests you?";
    }

    // Spiritual/Wellness travel
    if (
      message.includes("spiritual") ||
      message.includes("yoga") ||
      message.includes("wellness") ||
      message.includes("meditation")
    ) {
      return "Spiritual & Wellness Destinations\n\nRishikesh, Uttarakhand:\n• Yoga Capital - World-renowned yoga schools\n• Meditation - Silent retreats, Vipassana\n• Ganga Aarti - Evening spiritual ceremony\n• Adventure Yoga - Combine yoga with rafting\n\nVaranasi, Uttar Pradesh:\n• Spiritual Capital - Ancient temples, ghats\n• Ganga Aarti - Mesmerizing evening ceremony\n• Boat Rides - Sunrise on the Ganges\n• Temple Tours - Kashi Vishwanath, Sarnath\n\nDharamshala, Himachal Pradesh:\n• Tibetan Culture - McLeod Ganj, Dalai Lama\n• Meditation - Buddhist retreats, monasteries\n• Trekking - Triund, Indrahar Pass\n• Local Cafes - Tibetan cuisine\n\nWellness Package Costs:\n• Rishikesh Yoga: ₹8,000 - ₹15,000 (7 days)\n• Varanasi Spiritual: ₹10,000 - ₹18,000 (5 days)\n• Kerala Ayurveda: ₹20,000 - ₹35,000 (7 days)\n\nWhich spiritual journey interests you?";
    }

    // Family travel
    if (
      message.includes("family") ||
      message.includes("kids") ||
      message.includes("children")
    ) {
      return "Family-Friendly Destinations\n\nJaipur, Rajasthan:\n• Amber Fort - Elephant rides, light shows\n• City Palace - Royal museums, cultural shows\n• Hawa Mahal - Beautiful architecture\n• Elephant Village - Interactive experiences\n\nGoa:\n• Beach Activities - Sand castles, water sports\n• Spice Plantations - Educational tours\n• Dudhsagar Falls - Family picnic spot\n• Old Goa Churches - Historical education\n\nManali, Himachal Pradesh:\n• Hadimba Temple - Ancient cedar temple\n• Solang Valley - Kid-friendly adventure sports\n• Beas River - Safe water activities\n• Mall Road - Shopping, local food\n\nFamily Package Costs:\n• Jaipur Heritage: ₹25,000 - ₹40,000 (4 days, 4 people)\n• Goa Beach: ₹30,000 - ₹50,000 (5 days, 4 people)\n• Manali Adventure: ₹35,000 - ₹60,000 (5 days, 4 people)\n\nWhich family destination interests you?";
    }

    // Delhi hotels
    if (message.includes("delhi") && message.includes("hotel")) {
      return "Best Hotels in Delhi\n\nLuxury Hotels (₹15,000+/night):\n• The Leela Palace - 5-star luxury, Chanakyapuri\n• Taj Palace - Iconic luxury, diplomatic enclave\n• The Oberoi - Premium service, Connaught Place\n• The Imperial - Heritage luxury, Janpath\n\nMid-range Hotels (₹5,000-12,000/night):\n• The Claridges - Colonial charm, Lutyens Delhi\n• The Park - Modern luxury, Connaught Place\n• Shangri-La - 5-star comfort, Ashoka Road\n• The Lalit - Contemporary luxury, Barakhamba Road\n\nBudget Hotels (₹2,000-5,000/night):\n• Hotel Bloomrooms - Clean, modern, Paharganj\n• Hotel Bloomrooms @ Link Road - Near airport\n• Hotel Amax Inn - Comfortable, Karol Bagh\n• Hotel Tara Palace - Heritage charm, Old Delhi\n\nBest Areas to Stay:\n• Connaught Place - Central location, shopping\n• Paharganj - Budget-friendly, near railway station\n• Karol Bagh - Local markets, good food\n• Chanakyapuri - Diplomatic area, luxury hotels\n• Old Delhi - Heritage experience, near Red Fort\n\nPackage Deals:\n• Delhi Heritage Tour: ₹8,000 - ₹15,000 (3 days)\n• Delhi Food Tour: ₹5,000 - ₹10,000 (2 days)\n• Delhi Shopping Tour: ₹3,000 - ₹8,000 (1 day)\n\nWhich area of Delhi interests you most?";
    }

    // Varanasi hotels
    if (message.includes("varanasi") && message.includes("hotel")) {
      return "Best Hotels in Varanasi\n\nLuxury Hotels (₹8,000+/night):\n• Taj Ganges Varanasi - 5-star luxury, riverfront location\n• BrijRama Palace - Heritage luxury, ghat views\n• Taj Nadesar Palace - Royal luxury, palace experience\n• Radisson Hotel Varanasi - Modern luxury, city center\n\nMid-range Hotels (₹3,000-8,000/night):\n• Hotel Surya - Comfortable, near ghats\n• Hotel Alka - Heritage charm, ghat views\n• Hotel Temple on Ganges - Riverside, spiritual atmosphere\n• Hotel Ganges View - Panoramic river views\n\nBudget Hotels (₹1,500-3,000/night):\n• Hotel Buddha - Clean, near railway station\n• Hotel Ganga Fuji - Riverside, budget-friendly\n• Hotel Alka - Heritage charm, affordable\n• Hotel Temple on Ganges - Spiritual atmosphere\n\nBest Areas to Stay:\n• Dashashwamedh Ghat - Central location, main ghat\n• Assi Ghat - Peaceful, yoga and meditation\n• Manikarnika Ghat - Spiritual, cremation ghat\n• Lahartara - Near airport, modern area\n• Lanka - Near BHU, student area\n\nPackage Deals:\n• Varanasi Spiritual Tour: ₹5,000 - ₹12,000 (3 days)\n• Varanasi Heritage Tour: ₹8,000 - ₹15,000 (4 days)\n• Varanasi Food Tour: ₹3,000 - ₹8,000 (2 days)\n\nWhich area of Varanasi interests you most?";
    }

    // Default response
    return "I'd love to help you plan your perfect Indian adventure! Here are some things you can ask me:\n\nSeasonal Travel:\n• 'Best places for summer'\n• 'Where to go in monsoon'\n• 'Winter destinations'\n\nDestination Types:\n• 'Best places to travel in India'\n• 'Adventure destinations'\n• 'Spiritual and wellness places'\n• 'Family-friendly destinations'\n\nSpecific Queries:\n• 'Hotels in Manali'\n• 'Hotels in Delhi'\n• 'Attractions in Goa'\n• 'Kerala backwaters'\n• 'Rajasthan heritage tours'\n\nWhat kind of travel experience are you looking for?";
  }
}

export const openRouterAPI = new OpenRouterAPI();
