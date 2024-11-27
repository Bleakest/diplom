export const getProducts = async () =>
  fetch(`http://localhost:3001/products`)
    .then((loadedProducts) => loadedProducts.json())
    .then(([loadedProducts]) => loadedProducts && loadedProducts);
