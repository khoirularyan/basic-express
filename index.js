import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.model.js";
import ProductRoutes from "./routes/product.route.js";

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
  res.send("Hello, this is from Express.js!");
});

//connect to database
mongoose
  .connect(
    "mongodb+srv://khoirularyan:4zTxumyllyJ1Hf71@backenddb.4anlpub.mongodb.net/?retryWrites=true&w=majority&appName=BackendDb"
  )
  .then(() => console.log("Connected!"))
  .catch((err) => console.error("Connection error:", err));
