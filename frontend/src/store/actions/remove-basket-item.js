import { ACTION_TYPE } from "./action-type";

export const removeBasketItem = (id) => ({
  type: ACTION_TYPE.REMOVE_BASKET_ITEM,
  payload: id,
});
