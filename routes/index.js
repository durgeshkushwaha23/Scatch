const express = require("express");
const { isLoggedIn } = require("../middlewares/IsLoggedIN");
const productModel = require("../models/product-model");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { error: req.flash("error") });
});

router.get("/shop", async (req, res) => {
  const products = await productModel.find();
  res.render("shop", { products });
});

module.exports = router;
