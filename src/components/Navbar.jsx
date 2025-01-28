import React, { useState } from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ModalComponent } from "./Card";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const user = useSelector((state) => state.auth.singleUser);
  const cart = useSelector((state) => state.orderItem.orderItem)

  const [openLogin, setOpenLogin] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="text-white bg-black shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/">
          <img
            src="https://caliber-kd-shoes.s3.ap-south-1.amazonaws.com/uploads/2024/09/03175513/cropped-logo-_calibershoes_header-1-1.png"
            alt="logo"
            width="80px"
            height="80px"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <Link className="hover:underline" to="/men">
            Men
          </Link>
          <Link className="hover:underline" to="/women">
            Women
          </Link>
          <Link className="hover:underline" to="/junior">
            Junior
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              className="p-2 text-black border rounded-md focus:outline-none"
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <FiSearch
              className="absolute text-black cursor-pointer right-3 top-3"
              onClick={() => navigate(`/search?s=${searchText}`)}
            />
          </div>

          {/* Shopping Cart */}
          <div className="relative">
            <FiShoppingCart
              className="text-xl cursor-pointer"
              onClick={() => navigate("/cart")}
            />
            {cart && cart.length > 0 && (
              <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-red-500 bg-white rounded-full -right-4 -top-5">
                {cart.length}
              </span>
            )}
          </div>

          {/* User Dropdown */}
          {user ? (
            <div className="relative">
              <FiUser
                className="text-xl cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              />
              {showDropdown && (
                <div className="absolute right-0 w-40 mt-2 text-black bg-white rounded-md shadow-md">
                  <button
                    className="w-full px-4 py-2 text-left hover:bg-gray-200"
                    onClick={() => {
                      setShowDropdown(false);
                      navigate("/profile");
                    }}
                  >
                    Profile
                  </button>
                  <button
                    className="w-full px-4 py-2 text-left hover:bg-gray-200"
                    onClick={() => {
                      setShowDropdown(false);
                      navigate("/change-password");
                    }}
                  >
                    Change Password
                  </button>
                  <button
                    className="w-full px-4 py-2 text-left hover:bg-gray-200"
                    onClick={() => {
                      setShowDropdown(false);
                      localStorage.removeItem("token");
                      navigate("/");
                      window.location.reload()
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="relative">
              <button onClick={() => setOpenLogin(true)}>Login</button>
            </div>
          )}
        </div>
      </div>
      {openLogin && <ModalComponent setTest={setOpenLogin} />}
    </nav>
  );
};

export default Navbar;
