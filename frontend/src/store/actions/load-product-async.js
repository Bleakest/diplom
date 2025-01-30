import { request } from "../../utils";
import { setProductData } from "./set-product-data";

export const loadProductAsync = (productId) => (dispatch) =>
  request(`/product/${productId}`).then((productData) => {
    
    if (productData.res) {
      dispatch(setProductData(productData.res));
    }
    return productData;
  });
