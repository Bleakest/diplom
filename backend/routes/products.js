const express = require("express");
const Product = require("../models/Product");

const router = express.Router({ mergeParams: true });

router.get("/products", async (req, res) => {
  console.log(1);
  try {
    const products = await Product.find().send({
      error: null,
      products,
    });
  } catch (e) {
    res.send({ error: e.message || "Unknown error" });
  }
});

module.exports = router;
