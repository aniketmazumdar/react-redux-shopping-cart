import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;


export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categoryList.filter(item => item.enabled)
);

export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
