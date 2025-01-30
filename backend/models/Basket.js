const mongoose = require("mongoose");

const BasketSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
  },
});

const Basket = mongoose.model("Basket", BasketSchema);

module.exports = Basket;
