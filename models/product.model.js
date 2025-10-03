import mongoose from "mongoose";

//schema atau struktur data
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

//model
const Product =
  mongoose.models.product || mongoose.model("Product", productSchema);
export default Product;
