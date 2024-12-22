const Basket = require("../models/Basket");

async function addBasketProduct(product) {
  return await Basket.create(product);
}
function getBasket() {
  return Basket.find();
}

async function removeBasketItem(id) {
  await Basket.deleteOne({ _id: id });
}

module.exports = {
  addBasketProduct,
  getBasket,
  removeBasketItem,
};
