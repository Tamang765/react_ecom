import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { axiosInstance as axios } from "../../utils/axios";

const initialState = {
  isLoading: false,
  isError: false,
  orderItem: [],
  singleOrderItem: null,
};

export const getOrderItem = createAsyncThunk("orderItem/get", async () => {
  try {
    const response = await axios.get(`order-item/cart`);
    return response.data.data;
  } catch (error) {
    toast.error(error.message || "Something went wrong");
  }
});

export const getSingleOrderItem = createAsyncThunk(
  "orderItem/getSingle",
  async (id) => {
    try {
      const response = await axios.get(`order-item/${id}`);
      return response.data.data;
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  }
);


export const postOrderItem = createAsyncThunk("orderItem/post", async (data) => {
  try {
    const response = await axios.post(`order-item`, data);
    toast.success("Product added to cart");
    return response.data.data;
  } catch (error) {

    console.log(error)

    toast.error(error || "Something went wrong");
  }
});

export const deleteOrderItem = createAsyncThunk(
  "orderItem/delete",
  async (id) => {
    try {
      await axios.delete(`order-item/${id}`);
      toast.success("Product removed from cart");
      return id;
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  }
);

export const updateOrderItem = createAsyncThunk(
  "orderItem/patch",
  async ({ id, quantity }) => {
    try {
      await axios.patch(`order-item/${id}`, {quantity});
      return {id, quantity};
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  }
);

const orderItemSlice = createSlice({
  name: "orderItem",
  initialState,
  reducers: {
    resetOrderItem: (state) => {
      state.orderItem = [];
      state.isError = false;
      state.isLoading = false;
      state.singleOrderItem = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postOrderItem.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(postOrderItem.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload)
      state.orderItem = [...state.orderItem, action.payload];
    });
    builder.addCase(postOrderItem.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(getOrderItem.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getOrderItem.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orderItem = action.payload;
    });
    builder.addCase(getOrderItem.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(deleteOrderItem.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(deleteOrderItem.fulfilled, (state, action) => {
      state.isLoading = false;

      state.orderItem = state.orderItem.filter(
        (cat) => cat?._id !== action.payload
      );
    });
    builder.addCase(deleteOrderItem.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    builder.addCase(getSingleOrderItem.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getSingleOrderItem.fulfilled, (state, action) => {
      state.isLoading = false;
      state.singleOrderItem = action.payload;
    });
    builder.addCase(getSingleOrderItem.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(updateOrderItem.fulfilled, (state, action) => {
      state.isLoading = false;
      const { id, quantity } = action.payload;


      console.log(action.payload,'action.payload')
      // Find and update the correct item in `orderItem` array
      const index = state.orderItem.findIndex((item) => item._id === id);
      console.log(index)
      if (index !== -1) {
        console.log('test')
        state.orderItem[index].quantity = quantity;
      }
    });

  },
});

export const { resetOrderItem } = orderItemSlice.actions;

export default orderItemSlice.reducer;
