import { SET_CSRF_TOKEN } from "../actions/csrf";

export function csrf(state = {}, action) {
    switch (action.type) {
        case SET_CSRF_TOKEN:
            return {
                ...state,
                csrfToken: action.csrfToken,
            };
        default:
            return state;
    }
}
