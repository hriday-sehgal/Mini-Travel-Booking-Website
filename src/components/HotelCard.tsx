import React from "react";
import { Star, MapPin, Wifi, Car, Coffee, Waves } from "lucide-react";
import { Hotel } from "../data/mockData";

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case "wifi":
        return <Wifi className="w-4 h-4" />;
      case "parking":
        return <Car className="w-4 h-4" />;
      case "restaurant":
        return <Coffee className="w-4 h-4" />;
      case "pool":
        return <Waves className="w-4 h-4" />;
      default:
        return <Coffee className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
      <div className="relative">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-52 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-white/20">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-bold text-gray-800">
              {hotel.rating}
            </span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6 bg-gradient-to-b from-white to-gray-50/50">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
          {hotel.name}
        </h3>

        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-medium">
            {hotel.location}, {hotel.city}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-5 leading-relaxed">
          {hotel.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {hotel.amenities.slice(0, 4).map((amenity, index) => (
            <div
              key={index}
              className="flex items-center gap-1 bg-blue-50 px-3 py-2 rounded-full text-xs text-blue-700 font-medium border border-blue-100"
            >
              {getAmenityIcon(amenity)}
              <span>{amenity}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-green-600 flex items-baseline gap-1">
              ₹{hotel.pricePerNight.toLocaleString()}
              <span className="text-sm text-gray-500 font-normal">/night</span>
            </span>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Book Hotel
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
