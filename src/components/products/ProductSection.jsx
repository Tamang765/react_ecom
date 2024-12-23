import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card";

const ProductSection = () => {
  const products = useSelector((state) => state.filter.data);

  return (
    <div className="my-8">
      <div className="flex justify-between items-center py-6">
        <h1 className="text-3xl font-bold">New Arrivals</h1>
        <button className="text-white border-2 bg-primary   px-4">
          See All
        </button>
      </div>
      <hr className="h-1  bg-black" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-8">
        {/* {products.map((product, index) => {
            return <Card key={index} {...product} />;
          })} */}
        {products.slice(0, 4).map((product, index) => (
          <Card key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
