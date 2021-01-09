export const USER_LOGIN_SUCCESS = '[Auth] User Log In Successfully';
export const USER_LOGIN_FAIL = '[Auth] User Log In Failed';

export const USER_SIGNUP_SUCCESS = '[Auth] User Sign Up Successfully';
export const USER_SIGNUP_FAIL = '[Auth] User Sign Up Failed';

export interface LogInSuccessAction {
  type: typeof USER_LOGIN_SUCCESS;
  userName: string;
}

export interface SignUpSuccessAction {
  type: typeof USER_SIGNUP_SUCCESS;
  userName: string;
}

export type AuthActionTypes = LogInSuccessAction | SignUpSuccessAction;
