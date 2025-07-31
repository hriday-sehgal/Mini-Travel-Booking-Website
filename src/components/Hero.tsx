import React from "react";
import {
  Plane,
  Hotel,
  MapPin,
  Star,
  ArrowRight,
  Globe,
  Award,
} from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[85vh] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full blur-xl animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full blur-lg animate-bounce opacity-70"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full blur-lg animate-pulse opacity-80"></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-gradient-to-br from-emerald-200 to-green-300 rounded-full blur-xl animate-bounce opacity-60"></div>

        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/3 w-16 h-16 border-2 border-blue-200/40 rotate-45 animate-spin"></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border-2 border-purple-200/40 rounded-full animate-ping"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-md border border-blue-200 px-4 sm:px-6 py-3 rounded-full mb-8 animate-fade-in shadow-lg">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              <span className="text-blue-600 font-semibold text-sm sm:text-base">
                India's #1 Travel Platform
              </span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-gray-600 text-xs sm:text-sm">
              Trusted by 10M+ travelers
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-8 leading-tight animate-slide-up px-4">
            Discover Your Next
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 animate-gradient">
              Adventure
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl mb-12 text-gray-700 leading-relaxed max-w-4xl mx-auto animate-fade-in-delay px-4">
            Embark on extraordinary journeys across India's most breathtaking
            destinations. From snow-capped mountains to pristine beaches, create
            memories that last a lifetime.
          </p>

          {/* Feature Cards */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 animate-slide-up-delay px-4">
            <div className="flex items-center gap-3 sm:gap-4 bg-white/90 backdrop-blur-md rounded-2xl px-6 sm:px-8 py-4 sm:py-5 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group w-full sm:w-auto">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-left">
                <span className="font-bold text-base sm:text-lg text-gray-800">
                  Curated Trips
                </span>
                <div className="text-gray-600 text-xs sm:text-sm">
                  Expertly planned packages
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 bg-white/90 backdrop-blur-md rounded-2xl px-6 sm:px-8 py-4 sm:py-5 border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group w-full sm:w-auto">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Hotel className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-left">
                <span className="font-bold text-base sm:text-lg text-gray-800">
                  Luxury Stays
                </span>
                <div className="text-gray-600 text-xs sm:text-sm">
                  Premium accommodations
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 bg-white/90 backdrop-blur-md rounded-2xl px-6 sm:px-8 py-4 sm:py-5 border border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group w-full sm:w-auto">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-left">
                <span className="font-bold text-base sm:text-lg text-gray-800">
                  Hidden Gems
                </span>
                <div className="text-gray-600 text-xs sm:text-sm">
                  Discover unique places
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex items-center justify-center mb-16 animate-fade-in-delay-2 px-4">
            <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl border-2 border-blue-200 flex items-center gap-3">
              <span>Start Your Journey</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-600 animate-fade-in-delay-3 px-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-medium text-sm sm:text-base">
                10M+ Happy Travelers
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full animate-pulse"></div>
              <span className="font-medium text-sm sm:text-base">
                Best Travel Awards 2024
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
              <span className="font-medium text-sm sm:text-base">
                4.8/5 Customer Rating
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
              <span className="font-medium text-sm sm:text-base">
                50+ Destinations
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-10 left-10 animate-bounce">
        <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
      </div>
      <div
        className="absolute top-20 right-10 animate-bounce"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
      </div>
      <div
        className="absolute bottom-32 right-20 animate-bounce"
        style={{ animationDelay: "2s" }}
      >
        <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default Hero;
