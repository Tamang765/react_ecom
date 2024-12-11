import { Heart, ShoppingCart, User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="">
        <div className="flex items-center justify-around   shadow-sm">
          <Link to={"/"}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTj-MM_UyJqsvN2GeGKQKLEHNaL-cfeoLa-Q&s"
              alt="logo"
              width="80px"
              height="80px"
              className="border-2 "
            />
          </Link>
          <div className="flex gap-5">
            <Link className="text-sky-400" to="/">
              Men
            </Link>
            <Link to="/women">Women</Link>
            <Link to="/junior">Junior</Link>
          </div>
          <div className="flex items- gap-4  ">
            <input type="text" className="border-2" />
            <Heart />
            <ShoppingCart />
            <User />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
