const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let products = []; // Vaqtinchalik mahsulotlar massivini yaratamiz

// Mahsulot qo'shish uchun POST yo'li
app.post("/products", (req, res) => {
  const { image, title, description, price, oldPrice } = req.body;

  const newProduct = {
    id: products.length + 1,
    image,
    title,
    description,
    price,
    oldPrice,
  };

  products.push(newProduct); // Mahsulotni massivga qo'shamiz
  res.status(201).json({
    message: "Mahsulot muvaffaqiyatli qo'shildi",
    product: newProduct,
  });
});

// Barcha mahsulotlarni olish uchun GET yo'li
app.get("/products", (req, res) => {
  res.status(200).json(products); // Saqlangan mahsulotlar ro'yxatini qaytaradi
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server ${PORT}-portda ishlamoqda`);
});
