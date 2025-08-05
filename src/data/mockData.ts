export interface Trip {
  id: string;
  title: string;
  city: string;
  duration: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  category: string;
}

export interface Hotel {
  id: string;
  name: string;
  city: string;
  pricePerNight: number;
  rating: number;
  image: string;
  description: string;
  amenities: string[];
  location: string;
}

export interface Attraction {
  id: string;
  name: string;
  city: string;
  image: string;
  description: string;
  location: string;
  category: string;
  timings: string;
}

export const trips: Trip[] = [
  {
    id: "1",
    title: "Magical Manali Adventure",
    city: "Manali",
    duration: "5 Days 4 Nights",
    price: 15999,
    description:
      "Experience the breathtaking beauty of Manali with adventure activities, snow-capped mountains, and serene valleys.",
    image:
      "https://images.pexels.com/photos/2387866/pexels-photo-2387866.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.5,
    category: "Adventure",
  },
  {
    id: "2",
    title: "Goa Beach Paradise",
    city: "Goa",
    duration: "4 Days 3 Nights",
    price: 12999,
    description:
      "Relax on pristine beaches, enjoy water sports, and experience the vibrant nightlife of Goa.",
    image:
      "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.3,
    category: "Beach",
  },
  {
    id: "3",
    title: "Royal Jaipur Heritage",
    city: "Jaipur",
    duration: "3 Days 2 Nights",
    price: 9999,
    description:
      "Explore the Pink City with its magnificent palaces, forts, and rich cultural heritage.",
    image:
      "https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.7,
    category: "Heritage",
  },
  {
    id: "4",
    title: "Kerala Backwaters",
    city: "Kerala",
    duration: "6 Days 5 Nights",
    price: 18999,
    description:
      "Cruise through tranquil backwaters, spice plantations, and experience Gods Own Country.",
    image:
      "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.6,
    category: "Nature",
  },
  {
    id: "5",
    title: "Shimla Hill Station",
    city: "Shimla",
    duration: "4 Days 3 Nights",
    price: 11999,
    description:
      "Enjoy the colonial charm and cool weather of this beautiful hill station.",
    image:
      "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.2,
    category: "Hill Station",
  },
  {
    id: "6",
    title: "Udaipur City of Lakes",
    city: "Udaipur",
    duration: "3 Days 2 Nights",
    price: 13999,
    description:
      "Experience the romance of lake palaces and royal architecture in the Venice of the East.",
    image:
      "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.8,
    category: "Heritage",
  },
  {
    id: "7",
    title: "Rishikesh River Rafting",
    city: "Rishikesh",
    duration: "3 Days 2 Nights",
    price: 8999,
    description:
      "Adventure capital of India with white water rafting, yoga, and spiritual experiences.",
    image:
      "https://images.pexels.com/photos/2387866/pexels-photo-2387866.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.4,
    category: "Adventure",
  },
  {
    id: "8",
    title: "Darjeeling Tea Gardens",
    city: "Darjeeling",
    duration: "4 Days 3 Nights",
    price: 14999,
    description:
      "Explore the Queen of Hills with tea gardens, toy train, and Himalayan views.",
    image:
      "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.5,
    category: "Hill Station",
  },
  {
    id: "9",
    title: "Varanasi Spiritual Journey",
    city: "Varanasi",
    duration: "3 Days 2 Nights",
    price: 7999,
    description:
      "Experience the spiritual capital with Ganga Aarti, ancient temples, and cultural heritage.",
    image:
      "https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.6,
    category: "Spiritual",
  },
  {
    id: "10",
    title: "Mumbai City Lights",
    city: "Mumbai",
    duration: "3 Days 2 Nights",
    price: 12999,
    description:
      "Explore the city that never sleeps with Bollywood, Gateway of India, and Marine Drive.",
    image:
      "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.3,
    category: "City",
  },
  {
    id: "11",
    title: "Agra Taj Mahal",
    city: "Agra",
    duration: "2 Days 1 Night",
    price: 6999,
    description:
      "Witness the wonder of the world - Taj Mahal, along with Agra Fort and Fatehpur Sikri.",
    image:
      "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.7,
    category: "Heritage",
  },
  {
    id: "12",
    title: "Ooty Nilgiri Hills",
    city: "Ooty",
    duration: "4 Days 3 Nights",
    price: 13999,
    description:
      "Queen of Hill Stations with botanical gardens, tea estates, and scenic beauty.",
    image:
      "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=500",
    rating: 4.4,
    category: "Hill Station",
  },
];

export const hotels: Hotel[] = [
  {
    id: "1",
    name: "Snow Valley Resort",
    city: "Manali",
    pricePerNight: 3500,
    rating: 4.4,
    image:
      "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Luxury resort with mountain views and spa facilities.",
    amenities: ["Spa", "Restaurant", "WiFi", "Parking"],
    location: "Old Manali",
  },
  {
    id: "2",
    name: "Beach Bliss Hotel",
    city: "Goa",
    pricePerNight: 2800,
    rating: 4.2,
    image:
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Beachfront hotel with modern amenities and ocean views.",
    amenities: ["Pool", "Beach Access", "Restaurant", "Bar"],
    location: "Calangute Beach",
  },
  {
    id: "3",
    name: "Heritage Palace Hotel",
    city: "Jaipur",
    pricePerNight: 4200,
    rating: 4.6,
    image: "https://images.pexels.com/photos/8180457/pexels-photo-8180457.jpeg",
    description:
      "Royal experience in a heritage property with traditional architecture.",
    amenities: ["Heritage Property", "Restaurant", "Cultural Shows", "Garden"],
    location: "City Palace Area",
  },
  {
    id: "4",
    name: "Backwater Resort",
    city: "Kerala",
    pricePerNight: 5500,
    rating: 4.7,
    image:
      "https://images.pexels.com/photos/1743373/pexels-photo-1743373.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Floating resort on backwaters with traditional houseboats.",
    amenities: ["Houseboat", "Ayurvedic Spa", "Local Cuisine", "Boating"],
    location: "Alleppey Backwaters",
  },
  {
    id: "5",
    name: "Mountain View Lodge",
    city: "Shimla",
    pricePerNight: 2200,
    rating: 4.1,
    image:
      "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=500",
    description:
      "Cozy lodge with panoramic mountain views and colonial architecture.",
    amenities: ["Mountain Views", "Fireplace", "Restaurant", "Library"],
    location: "Mall Road",
  },
  {
    id: "6",
    name: "Lake Palace Resort",
    city: "Udaipur",
    pricePerNight: 6800,
    rating: 4.9,
    image:
      "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Luxury resort overlooking Lake Pichola with royal suites.",
    amenities: ["Lake Views", "Royal Suites", "Fine Dining", "Boat Service"],
    location: "Lake Pichola",
  },
  {
    id: "7",
    name: "Riverside Retreat",
    city: "Rishikesh",
    pricePerNight: 1800,
    rating: 4.3,
    image:
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Eco-friendly resort by the Ganges with yoga and meditation.",
    amenities: ["Yoga Classes", "Riverside", "Organic Food", "Meditation"],
    location: "Laxman Jhula",
  },
  {
    id: "8",
    name: "Tea Garden Hotel",
    city: "Darjeeling",
    pricePerNight: 3200,
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=500",
    description:
      "Colonial-style hotel surrounded by tea gardens and mountain views.",
    amenities: ["Tea Garden", "Mountain Views", "Restaurant", "Toy Train"],
    location: "Mall Road",
  },
  {
    id: "9",
    name: "Ghat View Hotel",
    city: "Varanasi",
    pricePerNight: 2500,
    rating: 4.2,
    image: "https://images.pexels.com/photos/8180457/pexels-photo-8180457.jpeg",
    description: "Hotel with views of the sacred Ganges and ancient ghats.",
    amenities: [
      "Ghat Views",
      "Spiritual Tours",
      "Restaurant",
      "Cultural Shows",
    ],
    location: "Dashashwamedh Ghat",
  },
  {
    id: "10",
    name: "Marine Drive Hotel",
    city: "Mumbai",
    pricePerNight: 4500,
    rating: 4.4,
    image:
      "https://images.pexels.com/photos/1743373/pexels-photo-1743373.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Luxury hotel with views of the Arabian Sea and city skyline.",
    amenities: ["Sea Views", "Rooftop Pool", "Fine Dining", "Spa"],
    location: "Marine Drive",
  },
  {
    id: "11",
    name: "Taj View Hotel",
    city: "Agra",
    pricePerNight: 3800,
    rating: 4.6,
    image:
      "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=500",
    description:
      "Hotel with spectacular views of the Taj Mahal from every room.",
    amenities: ["Taj Views", "Restaurant", "Garden", "Cultural Tours"],
    location: "Taj Ganj",
  },
  {
    id: "12",
    name: "Botanical Garden Resort",
    city: "Ooty",
    pricePerNight: 2900,
    rating: 4.3,
    image:
      "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=500",
    description:
      "Resort near the famous botanical gardens with colonial charm.",
    amenities: [
      "Garden Views",
      "Colonial Architecture",
      "Restaurant",
      "Tea Estate",
    ],
    location: "Botanical Gardens",
  },
];

export const attractions: Attraction[] = [
  {
    id: "1",
    name: "Rohtang Pass",
    city: "Manali",
    image:
      "https://images.pexels.com/photos/2387866/pexels-photo-2387866.jpeg?auto=compress&cs=tinysrgb&w=500",
    description:
      "High mountain pass offering spectacular views and adventure activities.",
    location: "51 km from Manali",
    category: "Adventure",
    timings: "6:00 AM - 6:00 PM",
  },
  {
    id: "2",
    name: "Baga Beach",
    city: "Goa",
    image:
      "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=500",
    description:
      "Popular beach known for water sports, shacks, and vibrant nightlife.",
    location: "North Goa",
    category: "Beach",
    timings: "24 Hours",
  },
  {
    id: "3",
    name: "Amber Fort",
    city: "Jaipur",
    image:
      "https://images.pexels.com/photos/33178455/pexels-photo-33178455.jpeg",
    description:
      "Magnificent fort palace showcasing Rajput architecture and history.",
    location: "Amer, Jaipur",
    category: "Heritage",
    timings: "8:00 AM - 6:00 PM",
  },
  {
    id: "4",
    name: "Munnar Tea Gardens",
    city: "Kerala",
    image: "https://images.pexels.com/photos/3848200/pexels-photo-3848200.jpeg",
    description:
      "Rolling hills covered with lush tea plantations and scenic beauty.",
    location: "Munnar, Kerala",
    category: "Nature",
    timings: "6:00 AM - 7:00 PM",
  },
  {
    id: "5",
    name: "The Ridge",
    city: "Shimla",
    image:
      "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=500",
    description:
      "Heart of Shimla with colonial architecture and panoramic views.",
    location: "Mall Road, Shimla",
    category: "Scenic",
    timings: "24 Hours",
  },
  {
    id: "6",
    name: "City Palace",
    city: "Udaipur",
    image:
      "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=500",
    description:
      "Majestic palace complex overlooking Lake Pichola with royal artifacts.",
    location: "City Palace Complex",
    category: "Heritage",
    timings: "9:00 AM - 5:00 PM",
  },
  {
    id: "7",
    name: "Laxman Jhula",
    city: "Rishikesh",
    image:
      "https://images.pexels.com/photos/2387866/pexels-photo-2387866.jpeg?auto=compress&cs=tinysrgb&w=500",
    description:
      "Iconic suspension bridge over the Ganges with spiritual significance.",
    location: "Rishikesh",
    category: "Spiritual",
    timings: "24 Hours",
  },
  {
    id: "8",
    name: "Tiger Hill",
    city: "Darjeeling",
    image:
      "https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=500",
    description:
      "Famous viewpoint for sunrise over Kanchenjunga and Himalayan peaks.",
    location: "Darjeeling",
    category: "Scenic",
    timings: "4:00 AM - 8:00 AM",
  },
  {
    id: "9",
    name: "Dashashwamedh Ghat",
    city: "Varanasi",
    image:
      "https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=500",
    description:
      "Most sacred ghat where the famous Ganga Aarti ceremony takes place.",
    location: "Varanasi",
    category: "Spiritual",
    timings: "5:00 AM - 9:00 PM",
  },
  {
    id: "10",
    name: "Gateway of India",
    city: "Mumbai",
    image:
      "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=500",
    description:
      "Historic monument and popular tourist spot overlooking the Arabian Sea.",
    location: "Colaba, Mumbai",
    category: "Heritage",
    timings: "24 Hours",
  },
  {
    id: "11",
    name: "Taj Mahal",
    city: "Agra",
    image:
      "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=500",
    description:
      "Iconic white marble mausoleum, one of the Seven Wonders of the World.",
    location: "Agra",
    category: "Heritage",
    timings: "6:00 AM - 7:00 PM",
  },
  {
    id: "12",
    name: "Ooty Botanical Gardens",
    city: "Ooty",
    image:
      "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=500",
    description:
      "Beautiful gardens with rare plants, glasshouse, and colonial architecture.",
    location: "Ooty",
    category: "Nature",
    timings: "7:00 AM - 6:30 PM",
  },
];
