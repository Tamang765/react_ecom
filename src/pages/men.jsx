import React from "react";
import FilterByColor from "../components/filterbycolor/FilterByColor";

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
  return (
    <div className="min-h-screen">
      <div className="w-full  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        <div className=" col-span-1  border-4 px-2 ">
          <h2 className="text-lg  font-semibold mb-3">Filter By Color</h2>
          <FilterByColor colors={colorData} />
        </div>
        <div className=" col-span-3 border-4 border-black">prdocut section</div>
      </div>
    </div>
  );
};

export default Men;
