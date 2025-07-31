const express = require("express");
const router = express.Router();
const { hotels } = require("../data/mockData");

// GET all hotels
router.get("/", (req, res) => {
  try {
    res.json({
      success: true,
      data: hotels,
      count: hotels.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching hotels",
      error: error.message,
    });
  }
});

// GET hotel by ID
router.get("/:id", (req, res) => {
  try {
    const hotel = hotels.find((h) => h.id === req.params.id);
    if (!hotel) {
      return res.status(404).json({
        success: false,
        message: "Hotel not found",
      });
    }
    res.json({
      success: true,
      data: hotel,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching hotel",
      error: error.message,
    });
  }
});

// GET hotels by city
router.get("/city/:city", (req, res) => {
  try {
    const cityHotels = hotels.filter((h) =>
      h.city.toLowerCase().includes(req.params.city.toLowerCase())
    );
    res.json({
      success: true,
      data: cityHotels,
      count: cityHotels.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching hotels by city",
      error: error.message,
    });
  }
});

// GET hotels by price range
router.get("/price/:min/:max", (req, res) => {
  try {
    const minPrice = parseInt(req.params.min);
    const maxPrice = parseInt(req.params.max);
    const priceRangeHotels = hotels.filter(
      (h) => h.pricePerNight >= minPrice && h.pricePerNight <= maxPrice
    );
    res.json({
      success: true,
      data: priceRangeHotels,
      count: priceRangeHotels.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching hotels by price range",
      error: error.message,
    });
  }
});

// GET hotels by rating
router.get("/rating/:min", (req, res) => {
  try {
    const minRating = parseFloat(req.params.min);
    const ratedHotels = hotels.filter((h) => h.rating >= minRating);
    res.json({
      success: true,
      data: ratedHotels,
      count: ratedHotels.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching hotels by rating",
      error: error.message,
    });
  }
});

// GET hotels by amenities
router.get("/amenities/:amenity", (req, res) => {
  try {
    const amenity = req.params.amenity.toLowerCase();
    const amenityHotels = hotels.filter((h) =>
      h.amenities.some((a) => a.toLowerCase().includes(amenity))
    );
    res.json({
      success: true,
      data: amenityHotels,
      count: amenityHotels.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching hotels by amenities",
      error: error.message,
    });
  }
});

// Search hotels
router.get("/search/:query", (req, res) => {
  try {
    const query = req.params.query.toLowerCase();
    const searchResults = hotels.filter(
      (h) =>
        h.name.toLowerCase().includes(query) ||
        h.city.toLowerCase().includes(query) ||
        h.description.toLowerCase().includes(query) ||
        h.location.toLowerCase().includes(query)
    );
    res.json({
      success: true,
      data: searchResults,
      count: searchResults.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error searching hotels",
      error: error.message,
    });
  }
});

module.exports = router;
