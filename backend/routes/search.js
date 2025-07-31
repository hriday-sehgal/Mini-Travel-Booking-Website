const express = require("express");
const router = express.Router();
const { trips, hotels, attractions } = require("../data/mockData");

// Global search across all data types
router.get("/:query", (req, res) => {
  try {
    const query = req.params.query.toLowerCase();

    // Search in trips
    const tripResults = trips.filter(
      (t) =>
        t.title.toLowerCase().includes(query) ||
        t.city.toLowerCase().includes(query) ||
        t.description.toLowerCase().includes(query) ||
        t.category.toLowerCase().includes(query)
    );

    // Search in hotels
    const hotelResults = hotels.filter(
      (h) =>
        h.name.toLowerCase().includes(query) ||
        h.city.toLowerCase().includes(query) ||
        h.description.toLowerCase().includes(query) ||
        h.location.toLowerCase().includes(query)
    );

    // Search in attractions
    const attractionResults = attractions.filter(
      (a) =>
        a.name.toLowerCase().includes(query) ||
        a.city.toLowerCase().includes(query) ||
        a.description.toLowerCase().includes(query) ||
        a.category.toLowerCase().includes(query) ||
        a.location.toLowerCase().includes(query)
    );

    res.json({
      success: true,
      data: {
        trips: {
          results: tripResults,
          count: tripResults.length,
        },
        hotels: {
          results: hotelResults,
          count: hotelResults.length,
        },
        attractions: {
          results: attractionResults,
          count: attractionResults.length,
        },
      },
      totalResults:
        tripResults.length + hotelResults.length + attractionResults.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error performing global search",
      error: error.message,
    });
  }
});

// Search by city across all data types
router.get("/city/:city", (req, res) => {
  try {
    const city = req.params.city.toLowerCase();

    const cityTrips = trips.filter((t) => t.city.toLowerCase().includes(city));

    const cityHotels = hotels.filter((h) =>
      h.city.toLowerCase().includes(city)
    );

    const cityAttractions = attractions.filter((a) =>
      a.city.toLowerCase().includes(city)
    );

    res.json({
      success: true,
      data: {
        trips: {
          results: cityTrips,
          count: cityTrips.length,
        },
        hotels: {
          results: cityHotels,
          count: cityHotels.length,
        },
        attractions: {
          results: cityAttractions,
          count: cityAttractions.length,
        },
      },
      totalResults:
        cityTrips.length + cityHotels.length + cityAttractions.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error searching by city",
      error: error.message,
    });
  }
});

module.exports = router;
