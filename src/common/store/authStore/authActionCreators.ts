import { AppThunk } from '../store';
import * as authActionTypes from './authActionTypes';

export const logIn = (): authActionTypes.LogInSuccessAction => ({
  type: authActionTypes.USER_LOGIN_SUCCESS,
  userName: 'John Doe',
});

export const signUp = (): AppThunk => async (dispatch) => {
  const asyncResp = await exampleAPI();
  dispatch({
    type: authActionTypes.USER_SIGNUP_SUCCESS,
    userName: asyncResp,
  });
};

function exampleAPI() {
  return Promise.resolve('John Doe');
}
