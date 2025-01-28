import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SignUp, { Login } from "./signup";
const Card = (props) => {
  const user = useSelector((state)=>state.auth.singleUser)

  const [test, setTest] = useState(false);

  console.log(props,user)
  return (
    <div className="border-2 rounded-sm group border-black/30">
      <div className="flex flex-col justify-between h-full group-hover:shadow-2xl">
        <Link to={`/product/${props?.slug}`} className="">
          <div className="">
            <div className="overflow-hidden">
              <img
                src={props?.images?.[0]?.url}
                alt="earbuds"
                className="object-cover object-top w-full duration-300 aspect-video group-hover:scale-110"
              />
            </div>
            <div className="p-4 border-t-2 border-t-sky-100">
              <h1>{props?.name}</h1>
              {props.price && <p> {`$ ${props?.price || ""}`}</p>}
              <span>{props?.discount}% off</span>
            </div>
          </div>
        </Link>
        {/* <button
          className="w-full p-2 border-t-2 border-black"
          // onClick={() => dispatch(cartFunc(props))}
          // onClick={() => setTest(true)}
        >
          Add to Cart
        </button> */}
      {/* <ModalComponent setTest={setTest} /> */}
      </div>
    </div>
  );
};

export default Card;

export function ModalComponent({ setTest }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="fixed inset-0 bg-white/10 backdrop-blur">
      <div className="fixed z-50 p-4 mx-auto text-white -translate-x-1/2 -translate-y-1/2 bg-black rounded-md shadow-md w-fit left-1/2 top-1/2 opacity-80 ">
        <div className="flex items-center justify-center gap-4 text-xl font-semibold">
          <button className="p-4 " onClick={() => setShowLogin(true)}>
            Login{" "}
          </button>
          |
          <button className="p-4 " onClick={() => setShowLogin(false)}>
            Register
          </button>
        </div>{" "}
        {!showLogin ? <SignUp close={setTest} /> : <Login close={setTest} />}
      </div>
    </div>
  );
}
