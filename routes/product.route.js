const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const { getProduct } = require("../controller/product.controller.js");

router.get("/", getProduct);

router.get("/:id", getProduct);
