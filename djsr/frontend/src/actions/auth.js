import axiosInstance from "../axiosApi";
import jwtDecode from "jwt-decode";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const SIGNUP_USER = "SIGNUP_USER";

export function loginThunk(username, password) {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.post("/token/obtain/", {
        username,
        password,
      });
      axiosInstance.defaults.headers["Authorization"] =
        "JWT " + response.data.access;
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      console.log("RESPONSE1", jwtDecode(response.data.refresh));
      return response;
    } catch (error) {
      throw error;
    }
  };
}

export function loginUser(user) {
  return {
    type: LOGIN_USER,
    user,
  };
}

export function signupThunk(username, email, password) {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.post("/user/create/", {
        username,
        email,
        password,
      });
      console.log("RESPONSE SIGNUP", response);
      // dispatch(signupUser(response))
      return response;
    } catch (error) {
      console.log(error.stack);
      return {
        errors: error.response.data,
      };
    }
  };
}

export function signupUser(user) {
  return {
    type: SIGNUP_USER,
    user,
  };
}

export function logoutThunk() {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.post("/blacklist/", {
        refresh_token: localStorage.getItem("refresh_token"),
      });
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      axiosInstance.defaults.headers["Authorization"] = null;
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
    }
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}
