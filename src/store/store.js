import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import authReducer from "./reducers/auth";

const loggerMiddleware = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeEnhancer = composeEnhancers(
  applyMiddleware(thunk),
  applyMiddleware(loggerMiddleware)
);

const rootReducer = combineReducers({
  auth: authReducer,
});

const configureStore = (initialState) => {
  return createStore(rootReducer, initialState, storeEnhancer);
};

export default configureStore;
