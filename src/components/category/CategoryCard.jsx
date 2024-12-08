import React from "react";

const CategoryCard = (props) => {
  console.log(props);
  return (
    <div className=" hover:shadow-2xl border-2  p-8 ">
      <img
        src={props?.image}
        alt="bracelet"
        className="w-full aspect-video object-cover object-top "
      />
      <h2 className="text-center">{props?.name}</h2>
    </div>
  );
};

export default CategoryCard;
