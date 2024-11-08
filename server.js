const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Mahsulotlar ro'yxati
let products = [];

// Mahsulot qo'shish
app.post("/api/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    ...req.body,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Barcha mahsulotlarni ko'rish
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Serverni ishga tushirish
app.listen(PORT, () => {
  console.log(`Server ${PORT} portida ishga tushdi`);
});
