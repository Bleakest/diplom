const mongoose = require("mongoose");

module.exports = function (product) {
  return {
    id: product.id,
    title: product.title,
    imageUrl: product.image,
    cost: product.cost,
  };
};
