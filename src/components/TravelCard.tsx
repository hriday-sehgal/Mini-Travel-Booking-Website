import React from "react";
import { Star, Clock, MapPin, Plane, Train, Bus, Eye } from "lucide-react";
import { Travel } from "../data/mockData";

interface TravelCardProps {
  travel: Travel;
  onViewDetails?: () => void;
}

const TravelCard: React.FC<TravelCardProps> = ({ travel, onViewDetails }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Flight":
        return <Plane className="w-4 h-4" />;
      case "Train":
        return <Train className="w-4 h-4" />;
      case "Bus":
        return <Bus className="w-4 h-4" />;
      default:
        return <Plane className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Flight":
        return "from-blue-600 to-purple-600";
      case "Train":
        return "from-orange-600 to-red-600";
      case "Bus":
        return "from-green-600 to-emerald-600";
      default:
        return "from-blue-600 to-purple-600";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
      <div className="relative">
        <img
          src={travel.image}
          alt={`${travel.from} to ${travel.to}`}
          className="w-full h-48 sm:h-52 object-cover"
        />
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 rounded-full shadow-lg border border-white/20">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
            <span className="text-xs sm:text-sm font-bold text-gray-800">
              {travel.rating}
            </span>
          </div>
        </div>
        <div
          className={`absolute top-2 left-2 sm:top-4 sm:left-4 bg-gradient-to-r ${getTypeColor(
            travel.type
          )} text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg flex items-center gap-1 sm:gap-2`}
        >
          {getTypeIcon(travel.type)}
          <span className="hidden sm:inline">{travel.type}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-4 sm:p-6 bg-gradient-to-b from-white to-gray-50/50">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
            {travel.operator}
          </h3>
          <div className="text-xs sm:text-sm text-gray-500 font-medium">
            {travel.duration}
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-600 mb-2 sm:mb-3">
          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
          <span className="text-xs sm:text-sm font-medium">
            {travel.from} → {travel.to}
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 text-gray-600 mb-3 sm:mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
            <span className="text-xs sm:text-sm font-medium">
              {travel.departureTime}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
            <span className="text-xs sm:text-sm font-medium">
              {travel.arrivalTime}
            </span>
          </div>
        </div>

        <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-5 leading-relaxed line-clamp-2">
          {travel.description}
        </p>

        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-5">
          {travel.amenities.slice(0, 2).map((amenity, index) => (
            <div
              key={index}
              className="flex items-center gap-1 bg-blue-50 px-2 py-1 sm:px-3 sm:py-2 rounded-full text-xs text-blue-700 font-medium border border-blue-100"
            >
              <span className="hidden sm:inline">{amenity}</span>
              <span className="sm:hidden">{amenity.slice(0, 3)}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg sm:text-2xl font-bold text-green-600 flex items-baseline gap-1">
              ₹{travel.price.toLocaleString()}
              <span className="text-xs sm:text-sm text-gray-500 font-normal">
                per person
              </span>
            </span>
          </div>
          <div className="flex gap-1 sm:gap-2">
            {onViewDetails && (
              <button
                onClick={onViewDetails}
                className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-2 sm:px-4 py-1 sm:py-2 rounded-lg transition-colors font-medium flex items-center gap-1 text-xs sm:text-sm"
              >
                <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Details</span>
              </button>
            )}
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 sm:px-6 py-1 sm:py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-xs sm:text-sm">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
