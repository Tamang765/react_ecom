import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slice/categorySlice";
import dummyReducer from "./slice/dummySlice";
import filterReducer from "./slice/filterSlice";
import productReducer from "./slice/productSlice";
import userReducer from "./slice/userSlice";
import orderItemReducer from "./slice/orderItemSlice";
import authReducer from "./slice/authSlice";





export default configureStore({
  reducer: {
    numb: userReducer,
    product: productReducer,
    category: categoryReducer,
    dummy: dummyReducer,
    filter: filterReducer,
    orderItem: orderItemReducer,
    auth: authReducer,


  },
});
