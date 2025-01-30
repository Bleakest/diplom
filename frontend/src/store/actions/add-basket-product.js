import { ACTION_TYPE } from "./action-type";

export const addBasketProduct = (product) => ({
  type: ACTION_TYPE.ADD_BASKET_PRODUCT,
  payload: product,
});
