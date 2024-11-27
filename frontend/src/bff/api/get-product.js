import { transformProduct } from "../transformers";

export const getProduct = async (data) =>
  fetch(`http://localhost:3001/product?hash=${data}`)
    .then((loadedUser) => loadedUser.json())
    .then(([loadedUser]) => loadedUser && transformProduct(loadedUser));
