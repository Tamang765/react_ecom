import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  category: [],
  isError: false,
};

// Define the asynchronous action creator
export const getCategory = createAsyncThunk("getCategory", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/albums"
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
});

export const editPost = createAsyncThunk("edit post", async () => {
  try {
    const response = await axios.patch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        title: "Updated Post Title",
        body: "Updated Post Body",
        userId: 1,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
});

const categorySlice = createSlice({
  name: "category",
  initialState,

  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    // Add reducers for other action types here
    resetCategory: (state) => {
      state.category = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.category = action.payload;
    });
    builder.addCase(getCategory.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { resetCategory } = categorySlice.actions;
export default categorySlice.reducer;
