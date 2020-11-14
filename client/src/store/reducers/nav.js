import { SET_HOME } from "../actions/nav";

export function home(state = {}, action) {
    switch (action.type) {
        case SET_HOME:
            return {
                ...state,
                home: action.item,
            };
        default:
            return state;
    }
}
