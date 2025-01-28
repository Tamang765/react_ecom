import React from "react";
import { useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";
const CategorySection = () => {

const categoryData =  useSelector((state) => state.category.category);

  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
      <div className="grid grid-cols-2 gap-2 my-8 lg:grid-cols-6 md:grid-cols-4">
        {categoryData?.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </>
  );
};

export default CategorySection;
