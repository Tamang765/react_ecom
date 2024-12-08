import React from "react";
import { categoryData } from "../../assets/Data";
import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2  gap-2 my-8">
        {categoryData?.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </>
  );
};

export default CategorySection;
