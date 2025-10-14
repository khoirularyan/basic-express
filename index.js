import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ProductRoutes from "./routes/product.route.js";

dotenv.config();
const app = express();
//test web hook
//middleware
app.use(express.json());
//untuk menerima data dari body parsing data
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/products", ProductRoutes);

//routes atau endpoint
app.get("/", (req, res) => {});

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
