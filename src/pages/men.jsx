import React, { useState } from "react";

import { products } from "../assets/Data";
import Card from "../components/Card";
import {
  FilterByColor,
  FilterByPrice,
  FilterBySize,
} from "../components/filterbycolor/FilterByColor";

const colorData = [
  {
    id: 1,
    color: "Red",
  },
  { id: 2, color: "Blue" },
  { id: 3, color: "Black" },
  { id: 4, color: "Brown" },
  { id: 5, color: "Green" },
];

const Men = () => {
  const [count, setCount] = useState(4);
  return (
    <div className="min-h-screen">
      <div className="w-full  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
        <div className=" col-span-1   px-2 flex flex-col  gap-4 ">
          <FilterByColor colors={colorData} />
          <FilterBySize />
          <FilterByPrice />
        </div>
        <div className=" col-span-3">
          {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4"> */}
          <div
            className={`grid lg:grid-cols-${[
              count,
            ]} md:grid-cols-2 grid-cols-1 gap-4`}
          >
            {/* {products.map((product, index) => {
            return <Card key={index} {...product} />;
          })} */}
            {products?.map((product, index) => (
              <Card key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Men;
