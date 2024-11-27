const Product = require("../models/Product");

function getProducts() {
  return Product.find();
}

module.exports = { getProducts };
