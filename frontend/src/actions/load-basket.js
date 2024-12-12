import { request } from "../utils";
import { setBasketData } from "./set-basket-data";

export const loadBasket = () => (dispatch) =>
  request("/basket").then((basket) => {
    if (basket.res) {
      dispatch(setBasketData(basket.res));
    }
    return basket;
  });
