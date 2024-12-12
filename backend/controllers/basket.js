const Basket = require("../models/Basket");

async function addBasketProduct(product) {
  return await Basket.create(product);
}
function getBasket() {
  return Basket.find();
}

module.exports = {
  addBasketProduct,
  getBasket
};
