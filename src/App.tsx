import React, { useState, useMemo } from "react";
import { Plane, Hotel, MapPin, Search } from "lucide-react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import TripCard from "./components/TripCard";
import HotelCard from "./components/HotelCard";
import AttractionCard from "./components/AttractionCard";
import Chatbot from "./components/Chatbot";
import TripDetails from "./components/TripDetails";
import HotelDetails from "./components/HotelDetails";
import AttractionDetails from "./components/AttractionDetails";
import {
  trips,
  hotels,
  attractions,
  Trip,
  Hotel as HotelType,
  Attraction,
} from "./data/mockData";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const [selectedHotel, setSelectedHotel] = useState<HotelType | null>(null);
  const [selectedAttraction, setSelectedAttraction] =
    useState<Attraction | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedCity(query);
    setActiveSection("trips");
  };

  const handleChatbotTripSearch = (city: string) => {
    setSelectedCity(city);
    setSearchQuery(city);
    setActiveSection("trips");
  };

  const handleViewTripDetails = (trip: Trip) => {
    setSelectedTrip(trip);
  };

  const handleCloseTripDetails = () => {
    setSelectedTrip(null);
  };

  const handleViewHotelDetails = (hotel: HotelType) => {
    setSelectedHotel(hotel);
  };

  const handleCloseHotelDetails = () => {
    setSelectedHotel(null);
  };

  const handleViewAttractionDetails = (attraction: Attraction) => {
    setSelectedAttraction(attraction);
  };

  const handleCloseAttractionDetails = () => {
    setSelectedAttraction(null);
  };

  const filteredTrips = useMemo(() => {
    if (!searchQuery && !selectedCity) return trips;
    const query = searchQuery || selectedCity;
    return trips.filter(
      (trip) =>
        trip.city.toLowerCase().includes(query.toLowerCase()) ||
        trip.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [searchQuery, selectedCity]);

  const filteredHotels = useMemo(() => {
    if (!selectedCity) return hotels;
    return hotels.filter((hotel) =>
      hotel.city.toLowerCase().includes(selectedCity.toLowerCase())
    );
  }, [selectedCity]);

  const filteredAttractions = useMemo(() => {
    if (!selectedCity) return attractions;
    return attractions.filter((attraction) =>
      attraction.city.toLowerCase().includes(selectedCity.toLowerCase())
    );
  }, [selectedCity]);

  const renderHomeSection = () => (
    <div className="space-y-20">
      {/* Popular Destinations */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
            <Plane className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-semibold">
              Popular Destinations
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 px-4">
            Popular Destinations
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Discover amazing places and create unforgettable memories with our
            curated travel packages
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {trips.slice(0, 6).map((trip) => (
            <TripCard
              key={trip.id}
              trip={trip}
              onClick={() => {
                setSelectedCity(trip.city);
                setActiveSection("trips");
              }}
              onViewDetails={() => handleViewTripDetails(trip)}
            />
          ))}
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-4 shadow-md">
              <Hotel className="w-5 h-5 text-purple-600" />
              <span className="text-purple-600 font-semibold">
                Premium Hotels
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 px-4">
              Featured Hotels
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Stay in comfort and luxury at our handpicked hotels across India
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {hotels.slice(0, 3).map((hotel) => (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
                onViewDetails={() => handleViewHotelDetails(hotel)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Top Attractions */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-5 h-5 text-orange-600" />
            <span className="text-orange-600 font-semibold">
              Top Attractions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 px-4">
            Top Attractions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Explore must-visit places and create lasting memories at these
            incredible destinations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {attractions.slice(0, 6).map((attraction) => (
            <AttractionCard
              key={attraction.id}
              attraction={attraction}
              onViewDetails={() => handleViewAttractionDetails(attraction)}
            />
          ))}
        </div>
      </section>
    </div>
  );

  const renderTripsSection = () => (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 px-4">
          {selectedCity ? `Trips to ${selectedCity}` : "All Trip Packages"}
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-2 px-4">
          {filteredTrips.length} amazing packages found
        </p>
        {selectedCity && (
          <button
            onClick={() => {
              setSelectedCity("");
              setSearchQuery("");
            }}
            className="text-blue-600 hover:text-blue-700 font-medium underline"
          >
            View all destinations
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {filteredTrips.map((trip) => (
          <TripCard
            key={trip.id}
            trip={trip}
            onClick={() => setSelectedCity(trip.city)}
            onViewDetails={() => handleViewTripDetails(trip)}
          />
        ))}
      </div>

      {filteredTrips.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🏔️</div>
          <p className="text-2xl text-gray-500 mb-4">
            No trips found for your search
          </p>
          <p className="text-gray-400">
            Try searching for popular destinations like Manali, Goa, or Jaipur!
          </p>
        </div>
      )}
    </div>
  );

  const renderHotelsSection = () => (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 px-4">
          {selectedCity ? `Hotels in ${selectedCity}` : "All Hotels"}
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-2 px-4">
          {filteredHotels.length} hotels available
        </p>
        {selectedCity && (
          <button
            onClick={() => {
              setSelectedCity("");
              setSearchQuery("");
            }}
            className="text-blue-600 hover:text-blue-700 font-medium underline"
          >
            View all hotels
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {filteredHotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            onViewDetails={() => handleViewHotelDetails(hotel)}
          />
        ))}
      </div>

      {filteredHotels.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🏨</div>
          <p className="text-2xl text-gray-500 mb-4">
            No hotels found for your search
          </p>
          <p className="text-gray-400">
            Try searching for destinations with available accommodations!
          </p>
        </div>
      )}
    </div>
  );

  const renderAttractionsSection = () => (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 px-4">
          {selectedCity ? `Attractions in ${selectedCity}` : "All Attractions"}
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-2 px-4">
          {filteredAttractions.length} places to visit
        </p>
        {selectedCity && (
          <button
            onClick={() => {
              setSelectedCity("");
              setSearchQuery("");
            }}
            className="text-blue-600 hover:text-blue-700 font-medium underline"
          >
            View all attractions
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {filteredAttractions.map((attraction) => (
          <AttractionCard
            key={attraction.id}
            attraction={attraction}
            onViewDetails={() => handleViewAttractionDetails(attraction)}
          />
        ))}
      </div>

      {filteredAttractions.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🗺️</div>
          <p className="text-2xl text-gray-500 mb-4">
            No attractions found for your search
          </p>
          <p className="text-gray-400">
            Explore popular destinations to discover amazing places to visit!
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <Navigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {activeSection === "home" && (
        <>
          <Hero />
          <SearchBar onSearch={handleSearch} />
          {renderHomeSection()}
        </>
      )}

      {activeSection === "trips" && renderTripsSection()}
      {activeSection === "hotels" && renderHotelsSection()}
      {activeSection === "attractions" && renderAttractionsSection()}

      <Chatbot onTripSearch={handleChatbotTripSearch} />

      {selectedTrip && (
        <TripDetails trip={selectedTrip} onClose={handleCloseTripDetails} />
      )}

      {selectedHotel && (
        <HotelDetails hotel={selectedHotel} onClose={handleCloseHotelDetails} />
      )}

      {selectedAttraction && (
        <AttractionDetails
          attraction={selectedAttraction}
          onClose={handleCloseAttractionDetails}
        />
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 text-gray-800 py-16 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg">
                  <Search className="w-5 h-5" />
                </div>
                <span className="text-2xl font-bold">TravelBook</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Your trusted travel companion for discovering amazing
                destinations and creating unforgettable memories.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-600">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-orange-600">
                Popular Destinations
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-300 transition-colors"
                  >
                    Manali
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-300 transition-colors"
                  >
                    Goa
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-300 transition-colors"
                  >
                    Jaipur
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-orange-300 transition-colors"
                  >
                    Kerala
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-green-600">
                Contact Info
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>Email: support@travelbook.com</li>
                <li>Phone: +91 12345 67890</li>
                <li>Address: Mumbai, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-12 pt-8 text-center text-gray-600">
            <p>
              &copy; 2025 TravelBook. All rights reserved. Made with ❤️ for
              travelers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
