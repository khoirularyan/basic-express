import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.model.js";
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello, this is from Express.jsadfs! ssdfsdffasdfsadfsdnode");
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://khoirularyan:4zTxumyllyJ1Hf71@backenddb.4anlpub.mongodb.net/?retryWrites=true&w=majority&appName=BackendDb"
  )
  .then(() => console.log("Connected!"))
  .catch((err) => console.error("Connection error:", err));
