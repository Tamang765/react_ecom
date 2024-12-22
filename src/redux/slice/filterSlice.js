import { createSlice } from "@reduxjs/toolkit";
import { DummyData } from "../../assets/MOCK_DATA";

const initialState = {
  data: DummyData,
  men: [],
  women: [],
  searchData: [],

  cartData: [],
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
    searchFunc: (state, action) => {
      state.searchData = state.data.filter((item) =>
        item?.product_name?.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    cartFunc: (state, action) => {
      state.cartData.push({ ...action.payload, quantity: 1 });
    },
  },
});

export const { filterMen, filterWomen, searchFunc, cartFunc } =
  filterSlice.actions;

export default filterSlice.reducer;
