import { configureStore } from "@reduxjs/toolkit";
import Product_Slice from "./slices/Product_Slice";

export const store = configureStore({
   reducer:{
    Product_Slice: Product_Slice,
   }
})