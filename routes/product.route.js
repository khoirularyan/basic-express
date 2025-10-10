import Router from "express";
import Product from "../models/product.model.js";
import router from "./product.route.js";
import {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controller/product.controller.js";

router.get("/", getProduct);

//get produk by id
router.get("/:id", getProduct);

//create produk
router.post("/", createProduct);

//update produk
router.put("/:id", updateProduct);

//delete produk by id

router.delete("/:id", deleteProduct);

module.exports = router;
