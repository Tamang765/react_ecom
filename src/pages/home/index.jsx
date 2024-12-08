import React from "react";
import Banner from "../../components/Banner";
import CategorySection from "../../components/category/Index";
import JustForYOu from "../../components/justforyou/Index";
import ProductSection from "../../components/products/ProductSection";

const Home = () => {
  return (
    <div>
      <div className="bg-root_img">
          <Banner />
          <ProductSection />
          <CategorySection />
          <JustForYOu />

      </div>
    </div>
  );
};

export default Home;
