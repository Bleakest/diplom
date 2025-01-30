import { ACTION_TYPE } from "./action-type";

export const deleteProduct = (id) => ({
  type: ACTION_TYPE.DELETE_PRODUCT,
  payload: id,
});
