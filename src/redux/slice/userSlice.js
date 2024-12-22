import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  cart: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { increment, decrement } = userSlice.actions;

export default userSlice.reducer;
