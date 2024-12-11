import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <Link to="/">Home</Link>
        {`>`}
        <Link to="/women">women</Link>
        {`>`}
        <Link to="/clothing">clothing</Link>
        {`>`}
        <Link to="/product/1"></Link>
      </div>
    </>
  );
};

export default BreadCrumb;
