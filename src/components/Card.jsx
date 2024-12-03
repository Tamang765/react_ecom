import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <div className="group ">
      <div className=" border-2 border-black ">
        <div>
          <img
            src={props?.image}
            alt="earbuds"
            className="w-full aspect-video"
          />
        </div>
        <div className="border-t-2 border-t-sky-100 p-4">
          <h1>{props?.title}</h1>
          {props.price && <p> {`$ ${props?.price || ""}`}</p>}
          <span>{props?.discouint}% off</span>

          {/* <button className="bg-sky-400 p-2 w-full text-white">
            Add to Cart
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
