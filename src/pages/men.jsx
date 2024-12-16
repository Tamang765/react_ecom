import React, { useState } from "react";

import { Grid3x3, LayoutGrid } from "lucide-react";
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
  const [count, setCount] = useState(2);
  const [limit, setLimit] = useState(20);

  return (
    <div className="min-h-screen">
      <div className="w-full  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
        <div className="col-span-1   px-2 flex flex-col  gap-4 ">
          <FilterByColor colors={colorData} />
          <FilterBySize />
          <FilterByPrice />
        </div>
        <div className="col-span-3">
          <div className="flex gap-4">
            <button className="" onClick={() => setCount(2)}>
              <LayoutGrid />
            </button>
            <button className="" onClick={() => setCount(3)}>
              <Grid3x3 />
            </button>
            <button className="" onClick={() => setCount(4)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-grid-4x4"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
                <path d="M6 3v18" />
                <path d="M12 3v18" />
                <path d="M18 3v18" />
              </svg>
            </button>
          </div>

          {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4"> */}
          <div
            className={`grid grid-cols-${count} gap-4`}
            // className={`grid lg:grid-cols-${[
            //   count,
            // ]} md:grid-cols-2 grid-cols-1 gap-4`}
          >
            {/* {products.map((product, index) => {
            return <Card key={index} {...product} />;
          })} */}
            {products?.slice(0, limit)?.map((product, index) => (
              <Card key={index} {...product} />
            ))}
          </div>
        </div>
        <br />
        <button className="border-4" onClick={() => setLimit(limit + 20)}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Men;
