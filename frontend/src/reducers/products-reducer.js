import { ACTION_TYPE } from "../actions";

export const initialProductsState = [];

export const productsReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_PRODUCTS_DATA: {
      return [...state, ...action.payload];
    }
    case ACTION_TYPE.RESET_PRODUCT_DATA: {
      return initialProductsState;
    }
    case ACTION_TYPE.ADD_PRODUCT: {
      return [...state, action.payload];
    }
    case ACTION_TYPE.DELETE_PRODUCT: {
      return [...state.filter((product) => product.id !== action.payload)];
    }
    default:
      return state;
  }
};
