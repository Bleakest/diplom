module.exports = function (product) {
  return {
    id: product._id,
    title: product.title,
    image: product.image,
    cost: product.cost,
  };
};
