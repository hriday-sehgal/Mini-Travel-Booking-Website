import React from "react";
import { Star, Clock, MapPin, Eye } from "lucide-react";
import { Trip } from "../data/mockData";

interface TripCardProps {
  trip: Trip;
  onClick: () => void;
  onViewDetails?: () => void;
}

const TripCard: React.FC<TripCardProps> = ({
  trip,
  onClick,
  onViewDetails,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group border border-gray-100">
      <div className="relative overflow-hidden">
        <img
          src={trip.image}
          alt={trip.title}
          className="w-full h-52 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-white/20">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-bold text-gray-800">
              {trip.rating}
            </span>
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
          {trip.category}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6 bg-gradient-to-b from-white to-gray-50/50">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
          {trip.title}
        </h3>

        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <MapPin className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-medium">{trip.city}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <Clock className="w-4 h-4 text-orange-500" />
          <span className="text-sm font-medium">{trip.duration}</span>
        </div>

        <p className="text-gray-600 text-sm mb-5 line-clamp-2 leading-relaxed">
          {trip.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-green-600 flex items-baseline gap-1">
            ₹{trip.price.toLocaleString()}
            <span className="text-sm text-gray-500 font-normal">
              per person
            </span>
          </div>
          <div className="flex gap-2">
            {onViewDetails && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onViewDetails();
                }}
                className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg transition-colors font-medium flex items-center gap-1"
              >
                <Eye className="w-4 h-4" />
                Details
              </button>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
