import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/index";
const store = configureStore({
    reducer: reducers,
},
    window.__REDUX_DEVTOOLS_EXTENTION__&& window.__REDUX_DEVTOOLS_EXTENTION__()
);

export default store;