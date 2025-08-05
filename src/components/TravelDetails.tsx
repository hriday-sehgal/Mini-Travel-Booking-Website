import React from "react";
import {
  X,
  Star,
  Clock,
  MapPin,
  Plane,
  Train,
  Bus,
  Users,
  Calendar,
  Heart,
} from "lucide-react";
import { Travel } from "../data/mockData";

interface TravelDetailsProps {
  travel: Travel;
  onClose: () => void;
}

const TravelDetails: React.FC<TravelDetailsProps> = ({ travel, onClose }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Flight":
        return <Plane className="w-4 h-4 sm:w-5 sm:h-5" />;
      case "Train":
        return <Train className="w-4 h-4 sm:w-5 sm:h-5" />;
      case "Bus":
        return <Bus className="w-4 h-4 sm:w-5 sm:h-5" />;
      default:
        return <Plane className="w-4 h-4 sm:w-5 sm:h-5" />;
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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="relative">
          <img
            src={travel.image}
            alt={`${travel.from} to ${travel.to}`}
            className="w-full h-48 sm:h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
          <div
            className={`absolute top-2 left-2 sm:top-4 sm:left-4 bg-gradient-to-r ${getTypeColor(
              travel.type
            )} text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg flex items-center gap-2`}
          >
            {getTypeIcon(travel.type)}
            {travel.type}
          </div>
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-white/95 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 rounded-full shadow-lg">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
              <span className="text-xs sm:text-sm font-bold text-gray-800">
                {travel.rating}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="flex items-start justify-between mb-4 sm:mb-6">
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                {travel.operator}
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
                  <span className="text-sm font-medium">
                    {travel.from} → {travel.to}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
                  <span className="text-sm font-medium">{travel.duration}</span>
                </div>
              </div>
            </div>
            <button className="bg-gray-100 hover:bg-gray-200 p-2 sm:p-3 rounded-full transition-colors ml-2">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <span className="font-semibold text-gray-900 text-sm sm:text-base">
                  Departure
                </span>
              </div>
              <p className="text-gray-600 text-sm">{travel.departureTime}</p>
              <p className="text-gray-500 text-xs mt-1">
                {travel.departureStation}
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                <span className="font-semibold text-gray-900 text-sm sm:text-base">
                  Arrival
                </span>
              </div>
              <p className="text-gray-600 text-sm">{travel.arrivalTime}</p>
              <p className="text-gray-500 text-xs mt-1">
                {travel.arrivalStation}
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 sm:p-6 rounded-xl sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                <span className="font-semibold text-gray-900 text-sm sm:text-base">
                  Rating
                </span>
              </div>
              <p className="text-gray-600 text-sm">{travel.rating}/5.0</p>
            </div>
          </div>

          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
              About This {travel.type}
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
              {travel.description}
            </p>
          </div>

          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
              Amenities & Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {travel.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600 text-sm">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
              Journey Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                  Departure Details
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">
                      Time: {travel.departureTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">
                      Station: {travel.departureStation}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Duration: {travel.duration}</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                  Arrival Details
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Time: {travel.arrivalTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">
                      Station: {travel.arrivalStation}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Operator: {travel.operator}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 sm:pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-green-600">
                  ₹{travel.price.toLocaleString()}
                </div>
                <div className="text-gray-500 text-sm">per person</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-colors text-sm sm:text-base">
                  Contact Operator
                </button>
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelDetails;
