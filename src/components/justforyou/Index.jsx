import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/slice/productSlice";
import Card from "../Card";

const Index = () => {
  const dispatch = useDispatch()
  const [limit, setLimit] = useState(5);

  const handleClick = () => {
    setLimit(limit + 5);
  }

  const category = useSelector((state) => state.category.category);
  const products = useSelector((state) => state.product.women);


  const womenCategory =category?.length ? category?.find((item)=>item?.name.toLowerCase() ==="women")?._id:""

  useEffect(()=>{
    womenCategory &&  dispatch(getProduct({category_id:womenCategory, category_name: "women"}))
  },[dispatch, womenCategory])




  return (
    <div className="my-8">
      <div className="py-6 ">
        <h1 className="text-3xl font-bold">Women Collection</h1>
      </div>
      <hr className="h-1 bg-black" />
      <div className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-4 md:grid-cols-2">
        {/* {products.map((product, index) => {
            return <Card key={index} {...product} />;
          })} */}
        {
        !products?.length? "NO PRODUCT FOUND!":
        products?.slice(0, limit)?.map((product, index) => (
          <Card key={index} {...product} />
        ))}
      </div>
      <br />
      <button
        onClick={handleClick}
        className="px-3 py-1 m-auto text-white bg-sky-400"
      >
        Click
      </button>
      <br />
    </div>
  );
};

export default Index;
