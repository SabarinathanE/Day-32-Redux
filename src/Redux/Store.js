import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Reducer/Product.reducer";
import CartReducer from "./Reducer/Cart.reducer";

export default configureStore({
    reducer: {
        Product : ProductReducer,
        Cart: CartReducer
    }
})