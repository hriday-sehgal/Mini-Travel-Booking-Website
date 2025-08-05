import React from "react";
import { X, MapPin, Clock, Star, Camera, Users } from "lucide-react";
import { Attraction } from "../data/mockData";

interface AttractionDetailsProps {
  attraction: Attraction;
  onClose: () => void;
}

const AttractionDetails: React.FC<AttractionDetailsProps> = ({
  attraction,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="relative">
          <img
            src={attraction.image}
            alt={attraction.name}
            className="w-full h-48 sm:h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
          </button>
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
            {attraction.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="flex items-start justify-between mb-4 sm:mb-6">
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                {attraction.name}
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
                  <span className="text-sm font-medium">{attraction.city}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                  <span className="text-sm font-medium">
                    {attraction.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <span className="font-semibold text-gray-900 text-sm sm:text-base">
                  Timings
                </span>
              </div>
              <p className="text-gray-600 text-sm">{attraction.timings}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                <span className="font-semibold text-gray-900 text-sm sm:text-base">
                  Location
                </span>
              </div>
              <p className="text-gray-600 text-sm">{attraction.location}</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 sm:p-6 rounded-xl sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-2">
                <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                <span className="font-semibold text-gray-900 text-sm sm:text-base">
                  Category
                </span>
              </div>
              <p className="text-gray-600 text-sm">{attraction.category}</p>
            </div>
          </div>

          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
              About This Attraction
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
              {attraction.description}
            </p>
          </div>

          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
              Visitor Information
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                  Best Time to Visit
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">
                      Early morning for photography
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Weekdays to avoid crowds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">Check weather conditions</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                  Tips for Visitors
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Carry water and snacks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Wear comfortable shoes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Respect local customs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 sm:pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  Free Entry
                </div>
                <div className="text-gray-500 text-sm">
                  No entrance fee required
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-colors text-sm sm:text-base">
                  Get Directions
                </button>
                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base">
                  Plan Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttractionDetails;
