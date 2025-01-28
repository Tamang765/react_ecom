import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import qs from "qs";
import { toast } from "react-toastify";
import { axiosInstance as axios } from "../../utils/axios";
const initialState = {
  isLoading: false,
  isError: false,
  product: [],
  women:[],
  men:[],
  kid:[],

  singleProduct: null,
};


export const getProduct = createAsyncThunk(
  "product/get",
  async ({ category_id, category_name, color, size, priceRange,name }) => {
    try {
      // Prepare query parameters
      const queryParams = {
        category_id,
        name: name || undefined,
        color: color?.length ? JSON.stringify(color) : undefined,
        size: size || undefined,
        minPrice: priceRange?.minPrice > 0 ? priceRange.minPrice : undefined,
        maxPrice: priceRange?.maxPrice > 0 ? priceRange.maxPrice : undefined,
      };



      //  qs to stringify query parameters, skipping undefined values
      const queryString = qs.stringify(queryParams, { skipNulls: true });

      const response = await axios.get(`product?${queryString}`);

      return { data: response.data.data, category_name };
    } catch (error) {
      toast.error(error.message || "Something went wrong");
      throw error; // Re-throw the error for Redux Toolkit
    }
  }
);

export const getSingleProduct = createAsyncThunk(
  "product/getSingle",
  async (slug) => {
    try {
      const response = await axios.get(`product/single/${slug}`);
      console.log(response.data);
      return response.data.data;
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  }
);

export const postProduct = createAsyncThunk("product/post", async (data) => {
  try {
    const response = await axios.post(`product`, data);
    if (response.data.data) {
      toast.success("Product added successfully");
    }
    return response.data.data;
  } catch (error) {
    toast.error(error.message || "Something went wrong");
  }
});

export const deleteProduct = createAsyncThunk("product/delete", async (id) => {
  try {
    await axios.delete(`product/${id}`);
    return id;
  } catch (error) {
    toast.error(error.message || "Something went wrong");
  }
});

export const deleteProductImage = createAsyncThunk(
  "product/deleteimage",
  async ({ id, imageId }) => {
    try {
      await axios.delete(`product/${id}/${imageId}`);
      return id;
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/patch",
  async ({ id, formData }) => {
    try {
      await axios.patch(`product/${id}`, formData);
      toast.success("Product updated successfully");
      return id;
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetProduct: (state) => {
      state.product = [];
      state.isError = false;
      state.isLoading = false;
      state.singleProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postProduct.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(postProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      // state.product = action.payload;
    });
    builder.addCase(postProduct.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(getProduct.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload,'payload')
      if(action.payload?.category_name ==="men"){
        state.men = action.payload.data
      }else if(action.payload?.category_name ==="women"){
        state.women = action.payload.data
      }
      else if(action.payload?.category_name ==="kid"){
        state.kid = action.payload.data
      }
      state.product = action.payload?.data;
    });
    builder.addCase(getProduct.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(deleteProduct.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = state.product.filter(
        (cat) => cat?._id !== action.payload
      );
    });
    builder.addCase(deleteProduct.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    builder.addCase(getSingleProduct.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.singleProduct = action.payload;
    });
    builder.addCase(getSingleProduct.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { resetProduct } = productSlice.actions;

export default productSlice.reducer;
