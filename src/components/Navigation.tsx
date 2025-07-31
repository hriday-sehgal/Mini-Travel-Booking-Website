import React, { useState } from "react";
import { Home, Search, Hotel, MapPin, Menu, X, User } from "lucide-react";

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
          {/* Logo Section */}
          <div
            className="flex items-center gap-2 sm:gap-3 cursor-pointer"
            onClick={() => {
              onSectionChange("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white p-2 sm:p-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Search className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div>
              <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                TravelBook
              </span>
              <div className="text-xs text-gray-500 font-medium hidden sm:block">
                Discover India
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
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
                      ? "text-white bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg transform scale-105"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:shadow-md"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-all duration-300 ${
                      activeSection === item.id ? "" : "group-hover:scale-110"
                    }`}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* User Menu */}
            <button className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-2xl hover:from-orange-600 hover:to-pink-600 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group">
              <User className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm sm:text-base">Sign In</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
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
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-white bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg transform scale-105"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 transition-all duration-300 ${
                      activeSection === item.id ? "" : "group-hover:scale-110"
                    }`}
                  />
                  <span className="text-sm font-semibold">{item.label}</span>
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
