import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slice/categorySlice";
import productReducer from "./slice/productSlice";
import userReducer from "./slice/userSlice";
import dummyReducer from "./slice/dummySlice";
import filterReducer from "./slice/filterSlice";



export default configureStore({
  reducer: {
    numb: userReducer,
    product: productReducer,
    category: categoryReducer,
    dummy: dummyReducer,
    filter: filterReducer,
  },
});
