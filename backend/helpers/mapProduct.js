module.exports = function (product) {
  return {
    id: product.id,
    title: product.title,
    image: product.image,
    cost: product.cost,
    category: product.category,
  };
};
