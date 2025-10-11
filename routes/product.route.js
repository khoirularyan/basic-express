import { Router } from "express";
import {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controller/product.controller.js";

//inisialisasi router
const router = Router();

//get all produk
router.get("/", getProduct);

//get produk by id
router.get("/:id", getProductById);

//create produk
router.post("/", createProduct);

//update produk
router.put("/:id", updateProduct);

//delete produk by id

router.delete("/:id", deleteProduct);

export default router;
