import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, X, MapPin, Phone, ChevronDown, ArrowRight, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Products, SubCategories } from "../../pages/Userpages/HomePage";
import { h2 } from "framer-motion/client";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpenRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-full sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-950 to-blue-800">
        <div className="w-[95%] lg:w-[95%] md:w-[90%] sm:w-[95%] mx-auto flex items-center text-white/90 text-sm h-10 max-w-7xl">
          <div className="flex-1 flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-xs uppercase tracking-wide">Samakhusi, Kathmandu</span>
          </div>
          <div className="flex-1 text-center cursor-pointer hidden lg:flex md:flex sm:hidden">
            <span className="inline-block bg-white/10 px-4 py-1 rounded-full text-xs uppercase tracking-wider transform hover:scale-105 transition-transform">Up to 40% Off Selected Items</span>
          </div>
          <Link to="tel:+9779860578585" className="flex-1 flex items-center justify-end hover:text-white transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            <span className="text-xs">+977 9860578585</span>
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="sticky top-0 z-50">
        <header className="bg-white/95 backdrop-blur-md shadow-md transition-all duration-300">
          <div className="w-[95%] lg:w-[95%] md:w-[90%] sm:w-[95%] mx-auto flex items-center justify-between max-w-7xl lg:py-2 md:py-3 sm:py-3 py-2 ">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img src="/img/logo.jpg" alt="Eagle Trend" className="w-12 h-12 rounded-full shadow-lg transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Eagle Trend</span>
            </Link>

            {/* Navigation */}
            <div id="collapseMenu" className="hidden lg:block">
              <nav className="flex items-center space-x-0">
                <NavLink to="/" label="Home" />
                <NavDropdown label="men" link="/mens" items={menItems} products={Products.filter((product) => product.category === "men")} />
                <NavDropdown label="women" link="/womens" items={womenItems} products={Products.filter((product) => product.category === "women")} />
                <NavDropdown label="kids" link="/kids" items={kidsItems} products={Products.filter((product) => product.category === "kids")} />
                {/* <NavLink to="/sale" label="Sale" /> */}
              </nav>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-6 py-3">
              <Link to="/cart" className="relative group">
                <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </Link>
              <Link to="/login" className="group">
                <User className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </Link>
              <button ref={toggleOpenRef} className="lg:hidden focus:outline-none" onClick={handleToggle}>
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/50 z-50" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="absolute right-0 top-0 h-full md:w-[50%] w-[80%] bg-white shadow-xl flex flex-col"
              initial={{ x: "100%" }} 
              animate={{ x: 0 }} 
              exit={{ x: "100%" }} 
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Header */}
              <div className="p-4 border-b flex items-center justify-between bg-gradient-to-r from-blue-950 to-blue-800">
                <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <img src="/img/logo.jpg" alt="Eagle Trend" className="w-8 h-8 rounded-full" />
                  <span className="font-bold text-lg text-white">Eagle Trend</span>
                </Link>
                <button 
                  onClick={handleToggle} 
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="p-4 border-b">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full px-4 py-2 rounded-full bg-gray-100 focus:bg-white border border-gray-200 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Navigation */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-4">
                  <MobileNavigation setIsOpen={setIsOpen} />
                </div>
              </div>

              {/* Footer Actions */}
              <div className="border-t p-4 space-y-2 bg-gray-50">
                <Link 
                  to="/login" 
                  className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-gray-600 mr-3" />
                    <span className="font-medium text-gray-700">Sign In</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </Link>
                <Link 
                  to="/cart" 
                  className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center">
                    <ShoppingCart className="w-5 h-5 text-gray-600 mr-3" />
                    <span className="font-medium text-gray-700">Cart</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">0 items</span>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavLink = ({ to, label }) => (
  <Link to={to} className="text-md lg:text-sm uppercase px-4 font-semibold text-black hover:text-blue-600 transition-colors relative group flex items-center gap-3">
    {label}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
  </Link>
);

const NavDropdown = ({ label, items, link, products }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryProducts, setCategoryProducts] = useState(products.filter((product) => product.subCategory.toLowerCase() === SubCategories[0].name.toLowerCase()));
  const handleSubCategoryClick = (e, category) => {
    console.log(category, "this is category");
    setCategoryProducts(products.filter((product) => product.subCategory.toLowerCase() === category.toLowerCase()));
  };

  return (
    <div className=" group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <Link to={link} className="flex items-center px-4 py-2 text-sm font-semibold uppercase text-gray-800 hover:text-blue-600 transition-colors duration-200">
        {label}
        <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </Link>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }} className="absolute top-full left-0 right-0 w-screen bg-white shadow-lg rounded-b-lg overflow-hidden z-50">
            <div className="max-w-7xl mx-auto px-8 py-6">
              <div className="grid grid-cols-5 gap-8">
                <div className="col-span-1 border-r border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">{label}</h3>
                  <ul className="space-y-2">
                    {SubCategories.map((item, idx) => (
                      <li key={idx} onClick={(e) => handleSubCategoryClick(e, item.name)}>
                        <span className="text-sm capitalize text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-4 grid grid-cols-4 gap-6">
                  {categoryProducts
                    // .filter((product) => product.category.toLowerCase() === label.toLowerCase())
                    .slice(0, 4)
                    .map((product, index) => (
                      <Link to={"/productDetail"} key={index}>
                        <div  className="group">
                          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 mb-4">
                            <img src={product.productImg} alt={product.productName} className="object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-200" />
                          </div>
                          <h4 className="text-sm font-medium text-gray-900 mb-1">{product.productName}</h4>
                          <p className="text-sm font-medium text-gray-500">${product.price.toFixed(2)}</p>
                        </div>
                      </Link>
                    ))}
                  {categoryProducts.length === 0 && <h2>No products of this category</h2>}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileNavigation = ({ setIsOpen }) => (
  <nav className="flex flex-col">
    <MobileNavLink to="/" label="Home" setIsOpen={setIsOpen} />
    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-2" />
    <MobileNavDropdown label="Men's Collection" items={menItems} setIsOpen={setIsOpen} />
    <MobileNavDropdown label="Women's Collection" items={womenItems} setIsOpen={setIsOpen} />
    <MobileNavDropdown label="Kid's Collection" items={kidsItems} setIsOpen={setIsOpen} />
  </nav>
);

const MobileNavLink = ({ to, label, setIsOpen }) => (
  <Link 
    to={to} 
    className="flex items-center px-2 py-3 text-gray-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all" 
    onClick={() => setIsOpen(false)}
  >
    <span className="text-base font-medium">{label}</span>
    <ArrowRight className="w-5 h-5 ml-auto" />
  </Link>
);

const MobileNavDropdown = ({ label, items, setIsOpen }) => {
  const [isOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        className="w-full flex items-center px-2 py-3 text-gray-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all" 
        onClick={() => setIsDropdownOpen(!isOpen)}
      >
        <span className="text-base font-medium">{label}</span>
        <ChevronRight className={`w-5 h-5 ml-auto transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            transition={{ duration: 0.2 }} 
            className="overflow-hidden"
          >
            <div className="py-2 pl-4 pr-2 space-y-1">
              {items.flatMap((category) =>
                category.items.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.link}
                    className="flex items-center px-2 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50/50 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100" />
                  </Link>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const menItems = [
  {
    title: "New Arrivals",
    items: [
      { label: "Tops", link: "/mens" },
      { label: "Bottoms", link: "/mens" },
      { label: "Outerwears", link: "/mens" },
      { label: "Innerwears", link: "/mens" },
      { label: "Accessories", link: "/mens" },
    ],
  },
  // Add other categories
];

const womenItems = [
  {
    title: "New Arrivals",
    items: [
      { label: "T-shirts", link: "/womens" },
      { label: "Shirts", link: "/womens" },
      { label: "Pants", link: "/womens" },
      { label: "Trousers", link: "/womens" },
      { label: "Joggers", link: "/womens" },
    ],
  },
  // Add other categories
];

const kidsItems = [
  {
    title: "New Arrivals",
    items: [
      { label: "T-shirts", link: "/kids" },
      { label: "Shirts", link: "/kids" },
      { label: "Pants", link: "/kids" },
      { label: "Trousers", link: "/kids" },
      { label: "Joggers", link: "/kids" },
    ],
  },
  // Add other categories
];

export default Header;
