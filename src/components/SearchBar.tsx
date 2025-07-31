import React, { useState } from "react";
import { Search, MapPin, Calendar, Users, ChevronDown } from "lucide-react";
import { indianCities } from "../data/indianCities";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredCities, setFilteredCities] = useState<typeof indianCities>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(destination);
  };

  const handleDestinationChange = (value: string) => {
    setDestination(value);
    if (value.length > 0) {
      const filtered = indianCities
        .filter(
          (city) =>
            city.name.toLowerCase().includes(value.toLowerCase()) ||
            city.state.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 8);
      setFilteredCities(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleCitySelect = (cityName: string) => {
    setDestination(cityName);
    setShowSuggestions(false);
  };
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 mx-2 sm:mx-4 -mt-12 relative z-10 border border-gray-100">
      <form
        onSubmit={handleSearch}
        className="flex flex-col lg:flex-row gap-4 sm:gap-6"
      >
        {/* Destination Input */}
        <div className="flex-1 relative">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Destination
          </label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Where do you want to go? (e.g., Delhi, Goa, Manali)"
              value={destination}
              onChange={(e) => handleDestinationChange(e.target.value)}
              onFocus={() => destination && setShowSuggestions(true)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 font-medium placeholder-gray-400 text-base"
            />
          </div>

          {/* Search Suggestions Dropdown */}
          {showSuggestions && filteredCities.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white border-2 border-gray-200 rounded-xl mt-2 shadow-xl z-50 max-h-64 overflow-y-auto">
              {filteredCities.map((city, index) => (
                <div
                  key={index}
                  onClick={() => handleCitySelect(city.name)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"
                >
                  <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-800">{city.name}</div>
                    <div className="text-sm text-gray-500">
                      {city.state} • {city.type}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Date Inputs */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:flex-1">
          <div className="relative flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Check In
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500 w-5 h-5" />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900 font-medium text-base bg-white"
              />
            </div>
          </div>

          <div className="relative flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Check Out
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500 w-5 h-5" />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900 font-medium text-base bg-white"
              />
            </div>
          </div>
        </div>

        {/* Guests Select */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Guests
          </label>
          <div className="relative">
            <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all appearance-none bg-white text-gray-900 font-medium text-base"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5+">5+ Guests</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-3 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 text-base"
          >
            <Search className="w-5 h-5" />
            Search Trips
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
