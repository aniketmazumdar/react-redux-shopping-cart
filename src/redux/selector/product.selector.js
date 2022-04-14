import { createSelector } from 'reselect';

const selectProductReducer = (state) => state.products;


export const selectProducts = createSelector(
  [selectProductReducer],
  (productsSlice) => productsSlice.productList
);


export const selectIsProductLoading = createSelector(
  [selectProductReducer],
  (productsSlice) => productsSlice.isLoading
);
