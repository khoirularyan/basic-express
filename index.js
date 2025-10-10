import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.model.js";
const app = express();

//middleware
app.use(express.json());
//untuk menerima data dari body parsing data
app.use(express.urlencoded({ extended: true }));

//menyalakan server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//routes
app.use("/api/products", ProductRoutes);

//routes atau endpoint
app.get("/", (req, res) => {
  res.send("Hello, this is from Express.jsadfs! ssdfsdffasdfsadfsdnode");
});

//route post produk
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product); //menyalakan server
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//read produk
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find(); //find all data
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//read produk by id
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); //find product by id
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update produk by id
app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedproduct = await Product.findByIdAndUpdate(id);
    res.status(200).json(updatedproduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//delete produk by id
app.delete("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "delete success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//connect to database
mongoose
  .connect(
    "mongodb+srv://khoirularyan:4zTxumyllyJ1Hf71@backenddb.4anlpub.mongodb.net/?retryWrites=true&w=majority&appName=BackendDb"
  )
  .then(() => console.log("Connected!"))
  .catch((err) => console.error("Connection error:", err));
