import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { getCategory } from "../redux/slice/categorySlice";

import { useDispatch } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(getCategory());

  }, [dispatch]);
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl ">
        <div className="my-8">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Index;
