import { createSlice } from "@reduxjs/toolkit";
import { DummyData } from "../../assets/MOCK_DATA";

const initialState = {
  data: DummyData,
  men: [],
  women: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterMen: (state) => {
      state.men = state.data?.filter(
        (item) => item?.category?.toLowerCase() === "male"
      );
    },
    filterWomen: (state) => {
      state.women = state.data?.filter(
        (item) => item?.category?.toLowerCase() === "female"
      );
    },
  },
});

export const { filterMen, filterWomen } = filterSlice.actions;

export default filterSlice.reducer;
