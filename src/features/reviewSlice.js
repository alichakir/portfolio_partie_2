import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
  reviews: [
    {
      id: 1,
      name: "stan smith",
      role: "web developer",

      review:
        "Bonjour moi c'est stan j'avais une meilleur experience avec Monsieur ALI lors d'un travail ensemble",
    },
  ],
};

export const reviewSlice = createSlice({
  name: "review",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addReview: (state, action) => {
      state.reviews.push(action.payload);
    },
    deleteReview: (state, action) => {
      state.reviews = state.reviews.filter(
        (review) => review.id !== action.payload
      );
    },
    editReview: (state, action) => {
      state.reviews = state.reviews.map((review) =>
        review.id === action.payload.id ? action.payload : review
      );
    },
  },
});
export const { addReview, deleteReview, editReview } = reviewSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const reviews = (state) => state.reviews;

export default reviewSlice.reducer;
