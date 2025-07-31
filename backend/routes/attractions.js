const express = require("express");
const router = express.Router();
const { attractions } = require("../data/mockData");

// GET all attractions
router.get("/", (req, res) => {
  try {
    res.json({
      success: true,
      data: attractions,
      count: attractions.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching attractions",
      error: error.message,
    });
  }
});

// GET attraction by ID
router.get("/:id", (req, res) => {
  try {
    const attraction = attractions.find((a) => a.id === req.params.id);
    if (!attraction) {
      return res.status(404).json({
        success: false,
        message: "Attraction not found",
      });
    }
    res.json({
      success: true,
      data: attraction,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching attraction",
      error: error.message,
    });
  }
});

// GET attractions by city
router.get("/city/:city", (req, res) => {
  try {
    const cityAttractions = attractions.filter((a) =>
      a.city.toLowerCase().includes(req.params.city.toLowerCase())
    );
    res.json({
      success: true,
      data: cityAttractions,
      count: cityAttractions.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching attractions by city",
      error: error.message,
    });
  }
});

// GET attractions by category
router.get("/category/:category", (req, res) => {
  try {
    const categoryAttractions = attractions.filter((a) =>
      a.category.toLowerCase().includes(req.params.category.toLowerCase())
    );
    res.json({
      success: true,
      data: categoryAttractions,
      count: categoryAttractions.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching attractions by category",
      error: error.message,
    });
  }
});

// Search attractions
router.get("/search/:query", (req, res) => {
  try {
    const query = req.params.query.toLowerCase();
    const searchResults = attractions.filter(
      (a) =>
        a.name.toLowerCase().includes(query) ||
        a.city.toLowerCase().includes(query) ||
        a.description.toLowerCase().includes(query) ||
        a.category.toLowerCase().includes(query) ||
        a.location.toLowerCase().includes(query)
    );
    res.json({
      success: true,
      data: searchResults,
      count: searchResults.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error searching attractions",
      error: error.message,
    });
  }
});

module.exports = router;
