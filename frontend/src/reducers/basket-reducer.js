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
        products: [...state.products, action.payload],
      };
    }
    // case ACTION_TYPE.LOAD_TOTAL_SUM: {
    //   return {
    //     ...state,
    //     totalSum: state.products.reduce((acc, item) => acc + item.cost)
    //   };
    // }

    case ACTION_TYPE.REMOVE_BASKET_ITEM: {
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};
