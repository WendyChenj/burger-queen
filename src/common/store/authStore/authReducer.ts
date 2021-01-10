import { Action } from 'redux';
import * as authActionTypes from './authActionTypes';

export interface AuthState {
  userName: string;
}

const initialState: AuthState = {
  userName: null,
};

const authReducer = (state: AuthState = initialState, action: authActionTypes.AuthActionTypes): AuthState => {
  switch (action.type) {
    case authActionTypes.USER_LOGIN_SUCCESS:
      return { ...state, userName: action.userName };
    case authActionTypes.USER_SIGNUP_SUCCESS:
      return { ...state, userName: action.userName };
  }
  return state;
};

export default authReducer;
