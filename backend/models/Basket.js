const mongoose = require("mongoose");

const BasketSchema = mongoose.Schema(
  {
    title: {
        type: String,
        required: true,
      },
      cost: {
        type: String,
        required: true,
      },
      size: {
        type: String,
        required: true,
      },
  }
);

const Basket = mongoose.model("Basket", BasketSchema);

module.exports = Basket;
