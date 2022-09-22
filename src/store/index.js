import { configureStore } from "@reduxjs/toolkit";
import { tableSlice } from "./slices/tableSlice";
 export const store = configureStore({
    reducer:{
        [tableSlice.name]:tableSlice.reducer
    }
})
