import { applyMiddleware, legacy_createStore as createStore } from "redux";
import ThunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";

//create the store
const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware));

export default store;
