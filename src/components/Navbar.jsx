import { Heart, ShoppingCart, User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="">
        <div className="flex items-center justify-around   shadow-sm bg-black text-white">
          <Link to={"/"}>
            <img
              src="https://caliber-kd-shoes.s3.ap-south-1.amazonaws.com/uploads/2024/09/03175513/cropped-logo-_calibershoes_header-1-1.png"
              alt="logo"
              width="80px"
              height="80px"
            />
          </Link>
          <div className="flex gap-5">
            <Link className="" to="/men">
              Men
            </Link>
            <Link to="/women">Women</Link>
            <Link to="/junior">Junior</Link>
          </div>
          <div className="flex items- gap-4 text-black  ">
            <input type="text" className="border-2 px-2" placeholder="Search" />

            <Heart color="white" />
            <ShoppingCart color="white" />
            <User color="white" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
