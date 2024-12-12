const Product = require("../models/Product");

function getProducts() {
  return Product.find();
}

async function addProduct(product) {
  return await Product.create(product);
}

function getProduct(id) {
  return Product.findOne({ id: id });
}
function deleteProduct(id) {
  return Product.deleteOne({ id: id });
}
function editProduct(productId, product) {
  return Product.findOneAndUpdate({ id: productId }, product);
}

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  deleteProduct,
  editProduct,
};
