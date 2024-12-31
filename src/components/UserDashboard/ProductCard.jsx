import React from "react";
import { LuHeart } from "react-icons/lu";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <>
      <div className="group bg-white rounded  shadow-md cursor-pointer  ">
       
          <div to={"/productDetail"} className="overflow-hidden w-full aspect-w-16 aspect-h-8 ">
            <img src="https://readymadeui.com/images/product1.webp" alt="Product 1" className="h-80 w-full object-cover object-top group-hover:scale-[1.02] transition-all duration-500" />
          </div>

        <div className="p-4 ">
         <Link to={"/productDetail"}>
         <h3 className="text-lg text-gray-800 font-normal text-center Playfair_font">Lexicon Luxe | T-shirt</h3>
         </Link> 
          <div className="mt-1 flex items-center flex-wrap gap-2 justify-center ">
            <h4 className="text-md text-gray-800 text-center ">
              Rs. <span className="font-semibold">1000</span>{" "}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
