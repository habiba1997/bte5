const express = require("express");
const router = express.Router();
const Product = require('./product-schema');

// Fetch all data from the "menu-products" collection
router.get("/fetchall", async (req, res) => {
  try {
    const data = await Product.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching data" });
  }
});

module.exports = router;
