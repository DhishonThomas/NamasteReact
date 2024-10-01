import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore=configureStore(
{
    reducer:{//this is a big reducer
        cart:cartReducer,
    }
}

)

export default appStore