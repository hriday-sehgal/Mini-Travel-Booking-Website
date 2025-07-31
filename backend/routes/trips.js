const express = require("express");
const router = express.Router();
const { trips } = require("../data/mockData");

// GET all trips
router.get("/", (req, res) => {
  try {
    res.json({
      success: true,
      data: trips,
      count: trips.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching trips",
      error: error.message,
    });
  }
});

// GET trip by ID
router.get("/:id", (req, res) => {
  try {
    const trip = trips.find((t) => t.id === req.params.id);
    if (!trip) {
      return res.status(404).json({
        success: false,
        message: "Trip not found",
      });
    }
    res.json({
      success: true,
      data: trip,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching trip",
      error: error.message,
    });
  }
});

// GET trips by city
router.get("/city/:city", (req, res) => {
  try {
    const cityTrips = trips.filter((t) =>
      t.city.toLowerCase().includes(req.params.city.toLowerCase())
    );
    res.json({
      success: true,
      data: cityTrips,
      count: cityTrips.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching trips by city",
      error: error.message,
    });
  }
});

// GET trips by category
router.get("/category/:category", (req, res) => {
  try {
    const categoryTrips = trips.filter((t) =>
      t.category.toLowerCase().includes(req.params.category.toLowerCase())
    );
    res.json({
      success: true,
      data: categoryTrips,
      count: categoryTrips.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching trips by category",
      error: error.message,
    });
  }
});

// GET trips by price range
router.get("/price/:min/:max", (req, res) => {
  try {
    const minPrice = parseInt(req.params.min);
    const maxPrice = parseInt(req.params.max);
    const priceRangeTrips = trips.filter(
      (t) => t.price >= minPrice && t.price <= maxPrice
    );
    res.json({
      success: true,
      data: priceRangeTrips,
      count: priceRangeTrips.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching trips by price range",
      error: error.message,
    });
  }
});

// Search trips
router.get("/search/:query", (req, res) => {
  try {
    const query = req.params.query.toLowerCase();
    const searchResults = trips.filter(
      (t) =>
        t.title.toLowerCase().includes(query) ||
        t.city.toLowerCase().includes(query) ||
        t.description.toLowerCase().includes(query) ||
        t.category.toLowerCase().includes(query)
    );
    res.json({
      success: true,
      data: searchResults,
      count: searchResults.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error searching trips",
      error: error.message,
    });
  }
});

module.exports = router;
