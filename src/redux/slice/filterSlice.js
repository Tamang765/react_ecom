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
      console.log(action.payload);

      const exisitingData = state.cartData?.find(
        (c) => c.id === action.payload?.id
      );

      if (exisitingData) {
        window.alert("this product already exists");
        return;
      }
      
      state.cartData.push({ ...action.payload, quantity: 1 });
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const exisitingData = state.cartData?.find((c) => c.id === id);

      if (exisitingData) {
        state.cartData = state.cartData.map((item) =>
          item.id === id ? { ...item, quantity: quantity } : { ...item }
        );
      }
    },
  },
});

export const { filterMen, filterWomen, searchFunc, cartFunc, updateQuantity } =
  filterSlice.actions;

export default filterSlice.reducer;
