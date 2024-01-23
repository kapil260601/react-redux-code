import { combineReducers } from "redux";
import { productReducers, selectedProductReducer } from "./productReducers";

const reducers = combineReducers({
    allProducts: productReducers,
    product: selectedProductReducer,
});

export default reducers;