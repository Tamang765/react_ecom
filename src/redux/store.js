import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slice/categorySlice";
import productReducer from "./slice/productSlice";
import userReducer from "./slice/userSlice";

export default configureStore({
  reducer: {
    numb: userReducer,
    product: productReducer,
    category: categoryReducer,
  },
});
