import { ACTION_TYPE } from "../actions";

export const initialBasketState = {
  totalSum: 0,
  products: [],
};

export const basketReducer = (state = initialBasketState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_BASKET_DATA: {
      return {
        ...state,
        products: [...action.payload],
      };
    }
    case ACTION_TYPE.ADD_BASKET_PRODUCT: {
      return {
        ...state,
        products: [...initialBasketState.products, action.payload],
      };
    }
    
    // case ACTION_TYPE.REMOVE_BASKET_PRODUCT: {
    //   return {
    //     ...state,
    //     products: initialBasketState.products.push(action.payload),
    //   };
    // }
    default:
      return state;
  }
};
