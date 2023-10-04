import { configureStore } from "@reduxjs/toolkit";
import { AddCart } from "../Redux/AddCart";

export const Store = configureStore({
    reducer: {
        items: AddCart.reducer
    }
})