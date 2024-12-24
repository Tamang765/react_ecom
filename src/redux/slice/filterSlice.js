import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
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
      const exisitingData = state.cartData?.find(
        (c) => c.id === action.payload?.id
      );

      if (exisitingData) {
        toast.warning("this product already exists");
        return;
      }

      if (action.payload.quantity) {
        state.cartData.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
        toast.success("Product added to cart");
        return;
      }

      state.cartData.push({ ...action.payload, quantity: 1 });
      toast.success("Product added to cart");
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
