import React, { useState } from "react";
import {
  Home,
  Search,
  Hotel,
  MapPin,
  Menu,
  X,
  User,
  Globe,
  Sparkles,
} from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "trips", label: "Trips", icon: Search },
    { id: "hotels", label: "Hotels", icon: Hotel },
    { id: "attractions", label: "Attractions", icon: MapPin },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-xl shadow-2xl sticky top-0 z-50 border-b border-gray-100/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo Section */}
          <div
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
            onClick={() => {
              onSectionChange("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {/* Enhanced Logo Icon */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white p-2 sm:p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 text-yellow-300" />
                  </div>
                </div>
              </div>
              {/* Floating particles effect */}
              <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
            </div>

            {/* Enhanced Brand Text */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:via-indigo-600 group-hover:to-blue-700 transition-all duration-300">
                  TravelBook
                </span>
                <div className="hidden sm:flex items-center gap-1">
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                  <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                  <div className="w-1 h-1 bg-indigo-500 rounded-full"></div>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium hidden sm:block group-hover:text-blue-600 transition-colors duration-300">
                ✈️ Discover India's Beauty
              </div>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-300 font-semibold relative overflow-hidden group ${
                    activeSection === item.id
                      ? "text-blue-700 bg-gradient-to-r from-blue-50 to-indigo-100 shadow-md border border-blue-200"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-lg"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-all duration-300 relative z-10 ${
                      activeSection === item.id ? "" : "group-hover:scale-105"
                    }`}
                  />
                  <span className="relative z-10 font-bold">{item.label}</span>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              );
            })}
          </div>

          {/* Enhanced Right Side Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Removed Sign In button */}
            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {isMobileMenuOpen ? (
                <X className="w-6 h-6 relative z-10 group-hover:scale-105 transition-all duration-300" />
              ) : (
                <Menu className="w-6 h-6 relative z-10 group-hover:scale-105 transition-all duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-100/50`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 gap-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`flex flex-col items-center gap-3 p-6 rounded-2xl transition-all duration-300 relative overflow-hidden group ${
                    activeSection === item.id
                      ? "text-blue-700 bg-gradient-to-r from-blue-50 to-indigo-100 shadow-md border border-blue-200"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-lg"
                  }`}
                >
                  <Icon
                    className={`w-7 h-7 transition-all duration-300 relative z-10 ${
                      activeSection === item.id ? "" : "group-hover:scale-105"
                    }`}
                  />
                  <span className="text-sm font-bold relative z-10">
                    {item.label}
                  </span>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
