import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/slice/productSlice";
import Card from "../Card";

const ProductSection = () => {
  const dispatch = useDispatch();
  // const products = useSelector((state) => state.filter.data);
  const category = useSelector((state) => state.category.category);
  const products = useSelector((state) => state.product.men);


  const menCategory =category?.length ? category?.find((item)=>item?.name.toLowerCase() ==="men")?._id:""

  useEffect(()=>{
    menCategory &&  dispatch(getProduct({category_id:menCategory,category_name: "men"}))
  },[dispatch, menCategory])





  return (
    <div className="my-8">
      <div className="flex items-center justify-between py-6">
        <h1 className="text-3xl font-bold">Men Collection</h1>
        <button className="px-4 text-white border-2 bg-primary">
          See All
        </button>
      </div>
      <hr className="h-1 bg-black" />
      <div className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-4 md:grid-cols-2">
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
