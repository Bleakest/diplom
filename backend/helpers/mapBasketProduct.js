module.exports = function (product) {
  return {
    id: product._id,
    title: product.title,
    cost: product.cost,
    size: product.size,
    image: product.image,
    productId: product.productId,
  };
};
