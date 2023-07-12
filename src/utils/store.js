import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const store = configureStore({
    reducer:{
        //name:import-name
        cart:cartSlice
    }
})

export default store