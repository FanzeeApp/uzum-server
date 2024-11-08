const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://127.0.0.1:5500" }));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server ishlamoqda!");
});

app.post("/products", (req, res) => {});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portda ishlamoqda`);
});
