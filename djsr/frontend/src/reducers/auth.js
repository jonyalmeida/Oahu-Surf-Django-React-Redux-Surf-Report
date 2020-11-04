import { LOGIN_USER, SIGNUP_USER } from "../actions/auth";

export function auth(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        user: action.user,
      };
    case SIGNUP_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}
