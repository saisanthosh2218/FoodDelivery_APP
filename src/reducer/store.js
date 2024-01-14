import { legacy_createStore, combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import foodReducer from "./foodReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  food: foodReducer,
});

const store = legacy_createStore(rootReducer);

export default store;
