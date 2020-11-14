import { GET_TEXT_REPORT } from "../actions/reports";

export function reports(state = {}, action) {
    switch (action.type) {
        case GET_TEXT_REPORT:
            return {
                ...state,
                ...action.report,
            };
        default:
            return { ...state };
    }
}
