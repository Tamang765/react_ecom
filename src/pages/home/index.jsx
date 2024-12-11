import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../components/Banner";
import CategorySection from "../../components/category/Index";
import JustForYOu from "../../components/justforyou/Index";
import ProductSection from "../../components/products/ProductSection";
import { getCategory, resetCategory } from "../../redux/slice/categorySlice";

const Home = () => {
  const dispatch = useDispatch();

  const number = useSelector((state) => state.numb);
  console.log(number);

  const products = useSelector((state) => state.product);
  const categories = useSelector((state) => state.category.category);

  console.log(categories, "this is a categoryt");

  return (
    <div>
      <div className="bg-root_img">
        <button
          className="border-2 p-2 bg-black text-white"
          onClick={() => dispatch(getCategory())}
        >
          Click me
        </button>
        <button onClick={() => dispatch(resetCategory())}>
          Remove Category
        </button>

        <Banner />
        <ProductSection />
        <CategorySection />
        <JustForYOu />
      </div>
    </div>
  );
};

export default Home;
