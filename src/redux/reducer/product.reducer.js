import { PRODUCTS_ACTION_TYPES } from '../action/actionTypes/product.types';

export const PRODUCTS_INITIAL_STATE = {
  productList: [],
  isLoading: false,
  error: null,
};

export const productsReducer = (
  state = PRODUCTS_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, productList: payload };
    case PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
