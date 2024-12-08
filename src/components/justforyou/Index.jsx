import React, { useState } from "react";
import { products } from "../../assets/Data";
import Card from "../Card";

const Index = () => {
  const [limit, setLimit] = useState(5);

  const handleClick = () => {
    setLimit(limit + 5);
  };

  return (
    <div className="my-8">
      <div className=" py-6">
        <h1 className="text-3xl font-bold">Just For You</h1>
      </div>
      <hr className="h-1  bg-black" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-8">
        {/* {products.map((product, index) => {
            return <Card key={index} {...product} />;
          })} */}
        {products?.slice(0, limit)?.map((product, index) => (
          <Card key={index} {...product} />
        ))}
      </div>
      <br />
      <button
        onClick={handleClick}
        className="bg-sky-400 px-3 py-1 text-white  m-auto"
      >
        Click
      </button>
      <br />
    </div>
  );
};

export default Index;
