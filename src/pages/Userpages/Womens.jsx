import React, { useState } from "react";
import ProductCard from "../../components/UserDashboard/ProductCard";

const products = [
  {
    productImg: "https://readymadeui.com/images/product2.webp",
    productName: "Adjective Attire | T-shirt",
    price: 1200,
  },
  {
    productImg: "https://readymadeui.com/images/product1.webp",
    productName: "Lexicon Luxe | T-shirt",
    price: 2500,
  },
  {
    productImg: "https://readymadeui.com/images/product3.webp",
    productName: "Lexicon Luxe | T-shirt",
    price: 2500,
  },
  {
    productImg: "https://readymadeui.com/images/product6.webp",
    productName: "Lexicon Luxe | T-shirt",
    price: 2500,
  },
  {
    productImg: "https://readymadeui.com/images/product1.webp",
    productName: "Lexicon Luxe | T-shirt",
    price: 2500,
  },
  {
    productImg: "https://readymadeui.com/images/product7.webp",
    productName: "Lexicon Luxe | T-shirt",
    price: 2500,
  },
  {
    productImg: "https://readymadeui.com/images/product6.webp",
    productName: "Lexicon Luxe | T-shirt",
    price: 2500,
  },
  {
    productImg: "https://readymadeui.com/images/product1.webp",
    productName: "Lexicon Luxe | T-shirt",
    price: 2500,
  },
  {
    productImg: "https://readymadeui.com/images/product7.webp",
    productName: "Lexicon Luxe | T-shirt",
    price: 2500,
  },
  {
    productImg: "https://readymadeui.com/images/product6.webp",
    productName: "Lexicon Luxe | T-shirt",
    price: 2500,
  },
  {
    productImg: "https://readymadeui.com/images/product1.webp",
    productName: "Lexicon Luxe | T-shirt",
    price: 2500,
  },
  {
    productImg: "https://readymadeui.com/images/product7.webp",
    productName: "Lexicon Luxe | T-shirt",
    price: 2500,
  },
  {
    productImg: "https://readymadeui.com/images/product6.webp",
    productName: "Lexicon Luxe | T-shirt",
    price: 2500,
  },
  {
    productImg: "https://readymadeui.com/images/product1.webp",
    productName: "Lexicon Luxe | T-shirt",
    price: 2500,
  },
  {
    productImg: "https://readymadeui.com/images/product7.webp",
    productName: "Lexicon Luxe | T-shirt",
    price: 2500,
  },
];

const Womens = () => {
  const [sortOption, setSortOption] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "priceAsc") {
      return a.price - b.price;
    } else if (sortOption === "priceDesc") {
      return b.price - a.price;
    } else {
      return a.productName.localeCompare(b.productName);
    }
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  return (
    <>
      <div className="py-4 mx-auto w-full lg:w-[90%]  md:w-[95%] sm:w-[95%] font-poppins">
        <h2 className="Playfair_font text-3xl font-bold text-gray-800 mb-1">Womens Collection</h2>

        <div className="flex justify-between items-center  ">
          <div>
            <p>Showing 1–16 of 328 results</p>
          </div>

          <div className="flex justify-between items-center mb-6">
            <select className="border p-2 rounded" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
              <option value="name">Sort by Name</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6">
          {currentProducts.map((item, index) => (
            <div className="group bg-white rounded shadow-md cursor-pointer" key={index}>
              <div to="/productDetail" className="overflow-hidden w-full aspect-w-16 aspect-h-8">
                <img src={item.productImg} alt="Product 1" className="h-80 w-full object-cover object-top group-hover:scale-[1.02] transition-all duration-500" />
              </div>

              <div className="p-4">
                <h3 className="text-lg text-gray-800 font-normal text-center Playfair_font">
                  {indexOfFirstProduct + index + 1}. {item.productName}
                </h3>
                <div className="mt-1 flex items-center flex-wrap gap-2 justify-center">
                  <h4 className="text-md text-gray-800 text-center">
                    Rs. <span className="font-semibold">{item.price}</span>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-1">
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} onClick={() => paginate(i + 1)} className={`px-4 py-1 border rounded ${currentPage === i + 1 ? "bg-gray-800 text-white" : "bg-white"}`}>
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Womens;
