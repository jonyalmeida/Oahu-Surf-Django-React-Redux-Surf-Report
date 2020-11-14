import {
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
} from "../actions/auth";

export function auth(state = {}, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...action.user,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.error,
            };
        case LOGOUT:
            return {};
        case REGISTER_SUCCESS:
            return {
                ...action.user,
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}
