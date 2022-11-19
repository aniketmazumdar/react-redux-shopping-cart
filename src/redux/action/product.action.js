import { PRODUCTS_ACTION_TYPES } from './actionTypes/product.types';
import { createAction } from '../reducer/create-action';
import { getProductsData } from '../../utils/api-info.utils';


// DEFINITION
export const fetchProductsStart = () => createAction(
  PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START
);

export const fetchProductsSuccess = (payload) => createAction(
  PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,
  payload
);

export const fetchProductsFailure = (error) => createAction(
  PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED, error)
;


// FETCH PRODUCTS
export const fetchProductsStartAsync = (catId) => {
  return async (dispatch) => {
    dispatch(fetchProductsStart());
    try {
      const data = await getProductsData();
      let prodList = catId ? data.filter(item => item.category === catId) : data;
      dispatch(fetchProductsSuccess(prodList));
    } catch (error) {
      dispatch(fetchProductsFailure(error));
    }
  };
};