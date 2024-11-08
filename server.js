const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000; // O'zingizga kerakli port raqamini kiriting

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // CORS ruxsat berish
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const PRODUCTS_FILE = path.join(__dirname, "products.json");

// Mahsulotlarni fayldan o'qish
function loadProducts() {
  if (fs.existsSync(PRODUCTS_FILE)) {
    const data = fs.readFileSync(PRODUCTS_FILE, "utf8");
    return JSON.parse(data);
  }
  return [];
}

// Mahsulotlarni faylga saqlash
function saveProducts(products) {
  fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2));
}

let products = loadProducts(); // Mahsulotlarni yuklash

// Mahsulotlarni olish uchun GET so'rovi
app.get("/products", (req, res) => {
  res.json(products);
});

// Yangi mahsulot qo'shish uchun POST so'rovi
app.post("/products", (req, res) => {
  const newProduct = req.body;

  // Ma'lumotlarni tekshirish
  if (!newProduct.image || !newProduct.title || !newProduct.price) {
    return res.status(400).json({ error: "Barcha maydonlar talab qilinadi" });
  }

  products.push(newProduct);
  saveProducts(products); // Yangi mahsulotni faylga saqlash
  res.status(201).json(newProduct);
});

app.listen(PORT, () => {
  console.log(`Server ishga tushdi, port: ${PORT}`);
});
