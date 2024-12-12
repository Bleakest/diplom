import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import { thunk } from "redux-thunk";
import { userReducer, productReducer, productsReducer, basketReducer } from "./reducers";

const reducer = combineReducers({
  user: userReducer,
  product: productReducer,
  products: productsReducer,
  basket: basketReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
