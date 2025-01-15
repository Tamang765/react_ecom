import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SignUp, { Login } from "./signup";
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

        {test && <ModalComponent setTest={setTest} />}
      </div>
    </div>
  );
};

export default Card;

function ModalComponent({ setTest }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="inset-0 bg-white/10 fixed backdrop-blur">
      <div className="fixed z-50 w-fit mx-auto  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2   p-4 bg-black text-white rounded-md shadow-md opacity-80 ">
        <div className="flex justify-center gap-4 items-center  font-semibold text-xl">
          <button className=" p-4" onClick={() => setShowLogin(true)}>
            Login{" "}
          </button>
          |
          <button className=" p-4" onClick={() => setShowLogin(false)}>
            Register
          </button>
        </div>{" "}
        {!showLogin ? <SignUp close={setTest} /> : <Login close={setTest} />}
      </div>
    </div>
  );
}
