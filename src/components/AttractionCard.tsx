import React from "react";
import { MapPin, Clock, Eye } from "lucide-react";
import { Attraction } from "../data/mockData";

interface AttractionCardProps {
  attraction: Attraction;
  onViewDetails?: () => void;
}

const AttractionCard: React.FC<AttractionCardProps> = ({
  attraction,
  onViewDetails,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
      <div className="relative">
        <img
          src={attraction.image}
          alt={attraction.name}
          className="w-full h-52 object-cover"
        />
        <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
          {attraction.category}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6 bg-gradient-to-b from-white to-gray-50/50">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors leading-tight">
          {attraction.name}
        </h3>

        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <MapPin className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-medium">{attraction.location}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <Clock className="w-4 h-4 text-green-500" />
          <span className="text-sm font-medium">
            Open: {attraction.timings}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-5 leading-relaxed">
          {attraction.description}
        </p>

        <div className="flex gap-2">
          {onViewDetails && (
            <button
              onClick={onViewDetails}
              className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-700 py-3 rounded-lg transition-colors font-medium flex items-center justify-center gap-1"
            >
              <Eye className="w-4 h-4" />
              Details
            </button>
          )}
          <button className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Plan Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttractionCard;
