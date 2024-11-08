const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://fanzeeoff:king2007root@cluster.ii4il.mongodb.net/?retryWrites=true&w=majority&appName=Cluster",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB ga muvaffaqiyatli ulandi"))
  .catch((error) => console.error("MongoDB ga ulanishda xato:", error));

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    image: String,
    title: String,
    description: String,
    price: Number,
    oldPrice: Number,
  })
);

app.post("/products", async (req, res) => {
  try {
    const { image, title, description, price, oldPrice } = req.body;

    const newProduct = new Product({
      image,
      title,
      description,
      price,
      oldPrice,
    });

    await newProduct.save();
    res.status(201).json({
      message: "Mahsulot muvaffaqiyatli qo'shildi",
      product: newProduct,
    });
  } catch (error) {
    console.error("Mahsulot qo'shishda xato:", error);
    res.status(500).json({ error: "Server xatosi" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server ${PORT}-portda ishlamoqda`);
});
