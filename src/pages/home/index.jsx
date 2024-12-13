import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CategorySection from "../../components/category/Index";
import JustForYOu from "../../components/justforyou/Index";
import ProductSection from "../../components/products/ProductSection";
import { getCategory } from "../../redux/slice/categorySlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <div>
      <div className="bg-root_img">
        <ProductSection />
        <CategorySection />
        <JustForYOu />
      </div>
    </div>
  );
};

export default Home;
