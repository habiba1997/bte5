const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  display: String,
  data: [
    {
      product: String,
      replacement: String,
      hint: String,
    },
  ],
});

module.exports = Product = mongoose.model("menu-product", ProductSchema);
