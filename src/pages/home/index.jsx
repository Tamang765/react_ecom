import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategorySection from "../../components/category/Index";
import JustForYOu from "../../components/justforyou/Index";
import Login from "../../components/login";
import ProductSection from "../../components/products/ProductSection";
import { getCategory } from "../../redux/slice/categorySlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const cart = useSelector((state) => state.filter.cartData);

  return (
    <div>
      <Login />
      <div className="bg-root_img">
        <ProductSection />
        <CategorySection />
        <JustForYOu />
      </div>
    </div>
  );
};

export default Home;
