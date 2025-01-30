import { request } from "../../utils";
import { setBasketData } from "./set-basket-data";

export const loadBasketData = () => (dispatch) =>
  request("/basket").then((basketData) => {
    if (basketData.res) {
      dispatch(setBasketData(basketData.res));
    }
    return basketData;
  });
