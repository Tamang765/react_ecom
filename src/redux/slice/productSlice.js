import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],

  isLoading: false,
  isError: false,
};

export const getProduct = createAsyncThunk("getProduct", async () => {
  try {
    const response = await axios.get(
      "https://my-json-server.typicode.com/typicode/demo/posts"
    );

    return response;
  } catch (error) {
    console.error("Error:", error);
    // return { error: true };
  }
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.products = action.payload;
    });
    builder.addCase(getProduct.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
