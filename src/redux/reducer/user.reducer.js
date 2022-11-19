import { USER_ACTION_TYPES } from '../action/actionTypes/user.types';

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  message: null,
  success: false
};

export const userReducer = (state = INITIAL_STATE, action={}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.REGISTRATION_START:
    case USER_ACTION_TYPES.LOGIN_START:
      return { ...state, isLoading: true };

    case USER_ACTION_TYPES.REGISTRATION_SUCCESS:
      return { ...state, isLoading: false, success: true, message: payload.message };

    case USER_ACTION_TYPES.REGISTRATION_FAIL:
    case USER_ACTION_TYPES.LOGIN_FAIL:
      return { ...state, isLoading: false, success: false, message: payload.message };
    
    case USER_ACTION_TYPES.LOGIN_SUCCESS:
      console.log('payload: ',payload);
      return { ...state, isLoading: false, success: true, message: payload.message, currentUser: payload.userData };

    case USER_ACTION_TYPES.LOGOUT:
      return { ...state, message: 'Successfully you are logged out', currentUser: null };

    default:
      return state;
  }
};
