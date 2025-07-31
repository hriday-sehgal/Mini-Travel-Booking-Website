const trips = [
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
];

const hotels = [
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
];

const attractions = [
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
];

module.exports = {
  trips,
  hotels,
  attractions,
};
