import { OFFERS_ACTION_TYPES } from './actionTypes/offer.types';
import { createAction } from '../reducer/create-action';
import { getOffersData } from '../../utils/api-info.utils';


// DEFINITION
export const fetchOffersStart = () => createAction(
  OFFERS_ACTION_TYPES.FETCH_OFFERS_START
);

export const fetchOffersSuccess = (payload) => createAction(
  OFFERS_ACTION_TYPES.FETCH_OFFERS_SUCCESS,
  payload
);

export const fetchOffersFailure = (error) => createAction(
  OFFERS_ACTION_TYPES.FETCH_OFFERS_FAILED, error)
;


// FETCH OFFERS
export const fetchOffersStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchOffersStart());
    try {
      const data = await getOffersData();
      dispatch(fetchOffersSuccess(data));
    } catch (error) {
      dispatch(fetchOffersFailure(error));
    }
  };
};