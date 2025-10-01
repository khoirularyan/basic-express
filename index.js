import express from "express";
import mongoose from "mongoose";
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello, this is from Express.jsadfs! ssdfsdffasdfsadfsdnode");
});

app.post("/api/products", (req, res) => {
  res.send("Create a new product");
});

mongoose
  .connect(
    "mongodb+srv://khoirularyan:4zTxumyllyJ1Hf71@backenddb.4anlpub.mongodb.net/?retryWrites=true&w=majority&appName=BackendDb"
  )
  .then(() => console.log("Connected!"))
  .catch((err) => console.error("Connection error:", err));
