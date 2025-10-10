const Product = require("../models/product.model.js");

const getProduct = async (req, res) => {
  try {
    const products = await Product.find(); //find all data
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); //find product by id
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProduct, getProductById };
// export { getProduct };
