import { createSelector } from 'reselect';

const selectOfferReducer = (state) => state.offers;


export const selectOffers = createSelector(
  [selectOfferReducer],
  (offersSlice) => offersSlice.offerList.filter(item => item.isActive)
);


export const selectIsLoading = createSelector(
  [selectOfferReducer],
  (offersSlice) => offersSlice.isLoading
);
