import { request } from "../../utils";
import { addBasketProduct } from "./add-basket-product";

export const addBasketProductAsync = (product, value) => (dispatch) => {
  request("/basket", "POST", { product, value }).then((data) => {
    dispatch(addBasketProduct(data.res));
  });
};
