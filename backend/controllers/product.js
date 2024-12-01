const Product = require("../models/Product");

function getProducts() {
  return Product.find();
}

function getProduct(id) {
  return Product.findById(id);
}

module.exports = { getProducts, getProduct };
