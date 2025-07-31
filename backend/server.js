const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const errorHandler = require("./middleware/errorHandler");

// Import routes
const tripsRoutes = require("./routes/trips");
const hotelsRoutes = require("./routes/hotels");
const attractionsRoutes = require("./routes/attractions");
const searchRoutes = require("./routes/search");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(morgan("combined")); // Logging
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "TravelBook API is running",
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use("/api/trips", tripsRoutes);
app.use("/api/hotels", hotelsRoutes);
app.use("/api/attractions", attractionsRoutes);
app.use("/api/search", searchRoutes);

// API Documentation endpoint
app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "TravelBook API",
    version: "1.0.0",
    endpoints: {
      health: "GET /health",
      trips: {
        all: "GET /api/trips",
        byId: "GET /api/trips/:id",
        byCity: "GET /api/trips/city/:city",
        byCategory: "GET /api/trips/category/:category",
        byPrice: "GET /api/trips/price/:min/:max",
        search: "GET /api/trips/search/:query",
      },
      hotels: {
        all: "GET /api/hotels",
        byId: "GET /api/hotels/:id",
        byCity: "GET /api/hotels/city/:city",
        byPrice: "GET /api/hotels/price/:min/:max",
        byRating: "GET /api/hotels/rating/:min",
        byAmenities: "GET /api/hotels/amenities/:amenity",
        search: "GET /api/hotels/search/:query",
      },
      attractions: {
        all: "GET /api/attractions",
        byId: "GET /api/attractions/:id",
        byCity: "GET /api/attractions/city/:city",
        byCategory: "GET /api/attractions/category/:category",
        search: "GET /api/attractions/search/:query",
      },
      search: {
        global: "GET /api/search/:query",
        byCity: "GET /api/search/city/:city",
      },
    },
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
});

// Error handling middleware (must be last)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`TravelBook API server running on port ${PORT}`);
  console.log(`API Documentation: http://localhost:${PORT}/api`);
  console.log(`Health Check: http://localhost:${PORT}/health`);
});

module.exports = app;
