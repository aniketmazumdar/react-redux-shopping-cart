import { CATEGORIES_ACTION_TYPES } from './actionTypes/category.types';
import { createAction } from '../reducer/create-action';
import { getCategoriesData } from '../../utils/api-info.utils';


// DEFINITION
export const fetchCategoriesStart = () => createAction(
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START
);

export const fetchCategoriesSuccess = (categoriesArray) => createAction(
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  categoriesArray
);

export const fetchCategoriesFailure = (error) => createAction(
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
;


// FETCH CATEGORIES
export const fetchCategoriesStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
      const categoriesArray = await getCategoriesData();
      dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
      dispatch(fetchCategoriesFailure(error));
    }
  };
};