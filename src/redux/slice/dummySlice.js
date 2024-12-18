import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DummyData } from "../../assets/MOCK_DATA";

const initialState = {
  isLoading: false,
  dummy: DummyData,
  men: [],
  filerByPrice: [],
  isError: false,
};

// Define the asynchronous action creator
export const getDummy = createAsyncThunk("getDummy", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/albums"
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
});

export const editDummy = createAsyncThunk("edit dummy", async () => {
  try {
    const response = await axios.patch(
      "https://jsonplaceholder.typicode.com/dummys/1",
      {
        title: "Updated Dummy Title",
        body: "Updated Dummy Body",
        userId: 1,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
});

const dummySlice = createSlice({
  name: "dummy",
  initialState,

  reducers: {
    filterMen: (state) => {
      state.men = state.dummy?.filter((mens) => mens.category === "Male");
    },

    filterByPrice: (state) => {
      state.filerByPrice = state.dummy.filter((a, b) => b.price - a.price);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getDummy.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDummy.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dummy = action.payload;
    });
    builder.addCase(getDummy.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { filterMen, filterWomen, filterByPrice } = dummySlice.actions;
export default dummySlice.reducer;
