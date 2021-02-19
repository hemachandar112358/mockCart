import { createStore, combineReducers } from "redux";
import CartReducer from "./reducers/CartReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const root = combineReducers({
  cartR: CartReducer,
});
const store = createStore(root, initialState, composeWithDevTools());
export default store;
