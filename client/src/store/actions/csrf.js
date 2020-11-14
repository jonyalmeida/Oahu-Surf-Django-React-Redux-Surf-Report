import { LOGIN_SUCCESS } from "./auth";

export const SET_CSRF_TOKEN = "SET_CSRF_TOKEN";

export const restoreCSRF = () => async (dispatch) => {
    const response = await fetch("/api/session/csrf/restore", {
        method: "GET",
        credentials: "include",
    });
    if (response.ok) {
        const authData = await response.json();
        if (authData.csrf_token) {
            //set csrf to redux store
            dispatch(setCSRF(authData.csrf_token));
        }
        if (authData.current_user) {
            //change to set current user dispatch call
            dispatch(restore(authData.current_user));
        }
    }
};

const restore = (user) => ({
    type: LOGIN_SUCCESS,
    user,
});

const setCSRF = (csrfToken) => ({
    type: SET_CSRF_TOKEN,
    csrfToken,
});
