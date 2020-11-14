import { combineReducers } from "redux";
import { auth } from "./auth";
import { csrf } from "./csrf";
import { reports } from "./reports";
import { home } from "./nav";

const rootReducer = combineReducers({
    auth,
    csrf,
    reports,
    home,
});

export default rootReducer;
