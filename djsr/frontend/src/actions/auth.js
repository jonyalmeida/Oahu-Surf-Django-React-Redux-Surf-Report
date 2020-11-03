export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const SIGNUP_USER = "SIGNUP_USER";

export function login(username, password) {
  return async (dispatch, getState) => {
    //TODO fetch call to login API
    return;
  };
}

export function loginUser(user) {
  return {
    type: LOGIN_USER,
    user,
  };
}

export function signup(username, email, password) {
  return async (dispatch, getState) => {
    //TODO fetch call to login API
    return;
  };
}

export function signupUser(user) {
  return {
    type: SIGNUP_USER,
    user,
  };
}
