import { USER_ACTION_TYPES } from './actionTypes/user.types';
import { createAction } from '../reducer/create-action';
import { getUserData, setNewUserData } from '../../utils/api-info.utils'

const IsUserValid = (payload) => {
  const allUsers = getUserData();
  if (allUsers && allUsers.length) {
    let res = allUsers.find(o => (o.email === payload.email && o.password === payload.password));
    if (res) {
      return res; 
    }
  }
  return null;
}


const IsEmailValid = (payload) => {
  const allUsers = getUserData();
  if (allUsers && allUsers.length) {
    let res = allUsers.find(o => o.email === payload.email);
    if (res) {
      return false; 
    }
  }
  return true;
}


const AddNewUser = (payload) => {
  let allUsers = [];
  allUsers = getUserData();
  let newdata = [payload, ...allUsers];
  setNewUserData(newdata);
  return true;
}


// export const setCurrentUser = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const registration = (user) => {
  createAction(USER_ACTION_TYPES.REGISTRATION_START);
  const result = IsEmailValid(user);
  if (!result) {
    return createAction(USER_ACTION_TYPES.REGISTRATION_FAIL, {message: 'User already exists!'});
  }

  AddNewUser(user);
  return createAction(USER_ACTION_TYPES.REGISTRATION_SUCCESS, {message: 'Successfully you are registered!'});
}


export const login = (user) => {
  createAction(USER_ACTION_TYPES.LOGIN_START);
  const result = IsUserValid(user);
  if (!result) {
    return createAction(USER_ACTION_TYPES.LOGIN_FAIL, {message: 'Credentials does not matched!'});
  }

  return createAction(USER_ACTION_TYPES.LOGIN_SUCCESS, {message: 'Successfully you are logged in', userData: result});
}


export const logout = () => {
  return createAction(USER_ACTION_TYPES.LOGOUT);
}