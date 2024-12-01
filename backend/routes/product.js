const express = require("express");
const Product = require("../models/Product");
const { getProducts, getProduct } = require("../controllers/product");
const mapProduct = require("../helpers/mapProduct");

const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const products = await getProducts();

    res.send({
      error: null,
      products: products.map(mapProduct),
    });
  } catch (e) {
    res.send({ error: e.message || "Unknown error" });
  }
});





module.exports = router;
