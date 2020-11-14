import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export const LOGIN_SUCCESS = "USERS_LOGIN_SUCCESS";
export const LOGIN_FAILURE = "USERS_LOGIN_FAILURE";
export const REGISTER_SUCCESS = "USERS_REGISTER_SUCCESS";
export const REGISTER_FAILURE = "USERS_REGISTER_FAILURE";
export const LOGOUT = "LOGOUT";

export function login(username, password) {
    return async (dispatch, getState) => {
        const csrf = getState().csrf.csrfToken;
        try {
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrf,
                },
                credentials: "include",
                body: JSON.stringify({ username, password }),
            };

            const response = await fetch("api/session/login", requestOptions);

            if (response.ok) {
                const user = await response.json();
                dispatch(success(user));
            } else {
                const error = await response.json();
                dispatch(failure(error));
            }
        } catch (error) {
            dispatch(failure(error.toString()));
        }
    };

    function success(user) {
        return { type: LOGIN_SUCCESS, user };
    }
    function failure(error) {
        return { type: LOGIN_FAILURE, error };
    }
}

export const logout = () => async (dispatch, getState) => {
    const csrf = getState().csrf.csrfToken;
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrf,
        },
        credentials: "include",
    };
    const response = await fetch(`/api/session/logout`, requestOptions);
    if (response.ok) {
        dispatch(removeUser());
    }
};

function removeUser() {
    return { type: LOGOUT };
}

export function signup(username, email = "surfs@up.com", password) {
    return async (dispatch, getState) => {
        try {
            const csrf = getState().csrf.csrfToken;

            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrf,
                },
                body: JSON.stringify({ username, email, password }),
            };

            const response = await fetch(`/api/session/signup`, requestOptions);
            if (response.ok) {
                const newUser = await response.json();
                dispatch(success(newUser));
            } else {
                const error = await response.json();
                dispatch(failure(error));
            }
        } catch (error) {
            dispatch(failure(error.toString()));
        }
    };

    function success(user) {
        return { type: REGISTER_SUCCESS, user };
    }
    function failure(error) {
        return { type: REGISTER_FAILURE, error };
    }
}
