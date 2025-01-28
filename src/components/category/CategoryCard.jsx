import React from "react";

const CategoryCard = (props) => {
  return (
    <div className="p-8 border-2 hover:shadow-2xl">
      <img
        src={props?.image?.url}
        alt="bracelet"
        className="object-cover object-top w-full aspect-video "
      />
      <h2 className="text-center">{props?.name}</h2>
    </div>
  );
};

export default CategoryCard;
