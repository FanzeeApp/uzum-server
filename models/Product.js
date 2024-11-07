const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: String,
  title: String,
  description: String,
  price: Number,
  rate: Number,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
