import { OFFERS_ACTION_TYPES } from '../action/actionTypes/offer.types';

export const OFFERS_INITIAL_STATE = {
  offerList: [],
  isLoading: false,
  error: null,
};

export const offersReducer = (
  state = OFFERS_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case OFFERS_ACTION_TYPES.FETCH_OFFERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case OFFERS_ACTION_TYPES.FETCH_OFFERS_SUCCESS:
      return { ...state, isLoading: false, offerList: payload };
    case OFFERS_ACTION_TYPES.FETCH_OFFERS_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
