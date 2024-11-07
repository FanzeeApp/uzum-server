const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

// MongoDB ulanishi
mongoose
  .connect("mongodb://localhost:27017/uzum", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB ga ulanish muvaffaqiyatli!"))
  .catch((err) => console.log("MongoDB ulanishda xato:", err));

// Serverni sozlash
app.get("/", (req, res) => {
  res.send("Salom, bu mening serverim!");
});

// Serverni ishga tushirish
app.listen(port, () => {
  console.log(`Server ishga tushdi, port: ${port}`);
});
