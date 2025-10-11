import Product from "../models/product.model.js";

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

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product); //menyalakan server
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    }); //update product by id

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id); //delete product by id
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(204).json({ message: " delete success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
// export { getProduct }
