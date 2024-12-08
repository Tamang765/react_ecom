import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Index;
