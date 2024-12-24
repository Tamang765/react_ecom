import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Card = (props) => {
  const dispatch = useDispatch();

  const [test, setTest] = useState(false);
  return (
    <div className="group border-2  border-black/30 rounded-sm">
      <div className=" group-hover:shadow-2xl h-full   flex flex-col justify-between   ">
        <Link to={`/product/${props?.id}`} className="">
          <div className="">
            <div className="overflow-hidden">
              <img
                src={props?.image}
                alt="earbuds"
                className="w-full aspect-video group-hover:scale-110 duration-300"
              />
            </div>
            <div className="border-t-2 border-t-sky-100 p-4">
              <h1>{props?.product_name}</h1>
              {props.price && <p> {`$ ${props?.price || ""}`}</p>}
              <span>{props?.discouint}% off</span>
            </div>
          </div>
        </Link>
        <button
          className="border-t-2 border-black p-2 w-full"
          // onClick={() => dispatch(cartFunc(props))}
          onClick={() => setTest(true)}
        >
          Add to Cart
        </button>

        {test && (
          <div className="fixed inset-0  p-4 bg-white rounded-md shadow-md opacity-70">
            <p>Item added to cart</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
