import { createSelector } from 'reselect';

export const selectUserReducer = (state) => state.user;

export const selectCurrentUser = createSelector(
    [selectUserReducer],
    (data) => data.currentUser
);


export const selectMessage = createSelector(
    [selectUserReducer],
    (data) => data.message
);

export const selectIsLoading = createSelector(
    [selectUserReducer],
    (data) => data.isLoading
);
  
export const selectIsSuccess = createSelector(
    [selectUserReducer],
    (data) => data.success
);