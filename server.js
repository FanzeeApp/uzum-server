const express = require("express");
const cors = require("cors");
const app = express();

// CORS ni yoqish
app.use(cors()); // Hamma manzillarga ruxsat berish

// yoki faqat muayyan manzillarga ruxsat berish (masalan, localhost uchun)
app.use(
  cors({
    origin: "http://127.0.0.1:5500", // Bu yerda front-end manzilingizni kiritish zarur
  })
);

app.use(express.json());

app.post("/api/products", async (req, res) => {
  try {
    const { image, title, description, price, oldPrice } = req.body;
    // Mahsulotni yaratish
    // ...
  } catch (error) {
    res
      .status(500)
      .json({ message: "Mahsulotni qo'shishda xatolik yuz berdi" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portda ishlamoqda...`);
});
