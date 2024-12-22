import { request } from "../utils";
import { removeBasketItem } from "./remove-basket-item";

export const removeBasketItemAsync = (id) => (dispatch) => {
  request("/basket", "DELETE", { id }).then(() => {
    dispatch(removeBasketItem(id));
  });
};
