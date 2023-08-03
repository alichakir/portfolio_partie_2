import reviewSlice from "@/features/reviewSlice";
import { configureStore } from "@reduxjs/toolkit";
//import counterReducer from "@/features/counter/counterSlice"
export const store = configureStore({
  reducer: {
    reviews: reviewSlice,
  },
});
