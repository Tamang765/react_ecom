import { Heart, Search, ShoppingCart, User } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

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
            <div className="relative ">
              <input
                type="text"
                className="border-2 p-2"
                placeholder="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <Search
                className="absolute right-2 top-2"
                onClick={() => navigate(`/search?s=${searchText}`)}
              />
            </div>

            <Heart color="white" />
            <ShoppingCart color="white" onClick={() => navigate("/cart")} />
            <User color="white" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
