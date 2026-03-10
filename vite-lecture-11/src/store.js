import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./store/todo/todoslice";

export const store = configureStore({
    reducer:todoReducer
})


///////////// call multiple reducers 

// export const store2 = configureStore({
//   reducer:{
//     todo:todoReducer,
//     cart :cartReducer

//   }
// })