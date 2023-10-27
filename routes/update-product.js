const express = require("express");
const router = express.Router();
const Product = require('./product-schema');



// Update data in the "menu-products" collection
router.put("/update/:category", async (req, res) => {
  const category  = req.params.category; // Category name as a query parameter

  if (!category) {
    return res.status(400).json({ error: "Category parameter is required" });
  }

  const { product, replacement, hint } = req.body;
  if (!product) {
    return res
      .status(400)
      .json({ error: "Product is mandatory in the request body" });
  }

  try {
    const updatedData = await Product.findOneAndUpdate(
      { name: category },
      {
        $push: {
          data: { product, replacement, hint },
        },
      },
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json(updatedData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error updating data" });
  }
});

module.exports = router;
