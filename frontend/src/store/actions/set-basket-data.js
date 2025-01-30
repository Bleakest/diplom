import { ACTION_TYPE } from "./action-type";

export const setBasketData = (basketData) => ({
  type: ACTION_TYPE.SET_BASKET_DATA,
  payload: basketData,
});
