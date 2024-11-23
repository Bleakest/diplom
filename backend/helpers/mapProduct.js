const mongoose = require("mongoose");

module.exports = function (product) {
  return {
    id: product.id,
    title: product.title,
    imageUrl: product.imageUrl,
    cost: product.cost,
    publishedAt: product.createdAt,
  };
};
