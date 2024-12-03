import { Heart, ShoppingCart, User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="">
        <div className="flex items-center justify-around ">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTj-MM_UyJqsvN2GeGKQKLEHNaL-cfeoLa-Q&s"
              alt="logo"
              width="80px"
              height="80px"
              className="border-2 "
            />
          </div>
          <div className="flex gap-5">
            <Link className="text-sky-400" to="/">
              Home
            </Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="flex items- gap-4  ">
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
