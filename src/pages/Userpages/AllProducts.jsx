import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Products } from "./HomePage";

const AllProducts = () => {
  const [sortOption, setSortOption] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [subCategoryFilter, setSubCategoryFilter] = useState("all");
  const [genderFilter, setGenderFilter] = useState("all");
  const [sizeFilter, setSizeFilter] = useState("all");
  const [discountedFilter, setDiscountedFilter] = useState(false);
  const productsPerPage = 10;

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = Products;

    if (discountedFilter) {
      filtered = filtered.filter(product => product.discounted);
    }

    if (genderFilter !== "all") {
      filtered = filtered.filter(product => product.gender === genderFilter);
    }

    if (categoryFilter !== "all") {
      filtered = filtered.filter(product => product.category === categoryFilter);
    }

    if (subCategoryFilter !== "all") {
      filtered = filtered.filter(product => product.subCategory === subCategoryFilter);
    }

    if (sizeFilter !== "all") {
      filtered = filtered.filter(product => product.size === sizeFilter);
    }

    return filtered.sort((a, b) => {
      if (sortOption === "priceAsc") {
        return a.price - b.price;
      } else if (sortOption === "priceDesc") {
        return b.price - a.price;
      } else {
        return a.productName.localeCompare(b.productName);
      }
    });
  }, [categoryFilter, subCategoryFilter, genderFilter, sizeFilter, discountedFilter, sortOption]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage);

  const subCategories = useMemo(() => {
    const allSubCategories = Products.map(product => product.subCategory);
    return ["all", ...new Set(allSubCategories)];
  }, []);

  return (
    <div className="py-4 mx-auto w-[95%] lg:w-[90%] md:w-[95%] sm:w-[95%] font-poppins max-w-7xl grid grid-cols-5  gap-6">
      <div className="col-span-1 border-r pr-6">
        <h3 className="text-xl font-bold mb-4">Filters</h3>

        <div className="mb-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={discountedFilter}
              onChange={() => setDiscountedFilter(!discountedFilter)}
            />
            Discounted Products
          </label>
        </div>

        <div className="mb-4">
          <select
            className="border p-2 rounded w-full"
            value={sizeFilter}
            onChange={(e) => {
              setSizeFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="all">All Sizes</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
          </select>
        </div>

        <div className="mb-4">
          <select
            className="border p-2 rounded w-full"
            value={genderFilter}
            onChange={(e) => {
              setGenderFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="all">All Genders</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>

        <div className="mb-4">
          <select
            className="border p-2 rounded w-full"
            value={categoryFilter}
            onChange={(e) => {
              setCategoryFilter(e.target.value);
              setSubCategoryFilter("all");
              setCurrentPage(1);
            }}
          >
            <option value="all">All Categories</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>
      </div>

      <div className="col-span-4">
        <h2 className="Playfair_font text-3xl font-bold text-gray-800 mb-4">Our Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6">
          {currentProducts.map((item, index) => (
            <div className="group bg-white rounded shadow-md cursor-pointer" key={index}>
              <div className="overflow-hidden w-full aspect-w-16 aspect-h-8">
                <img src={item.productImg} alt={item.productName} className="h-80 w-full object-cover object-top group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-4">
                <Link to="/productDetail">
                  <h3 className="text-lg text-gray-800 font-normal text-center Playfair_font">
                    {indexOfFirstProduct + index + 1}. {item.productName}
                  </h3>
                </Link>
                <div className="mt-1 flex items-center flex-wrap gap-2 justify-center">
                  <h4 className="text-md text-gray-800 text-center">
                    Rs. <span className="font-semibold">{item.price}</span>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
