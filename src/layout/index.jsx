import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto ">
        <div className="my-8">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Index;
