import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, X, MapPin, Phone, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
          <div className="w-[95%] lg:w-[95%] md:w-[90%] sm:w-[95%] mx-auto flex items-center justify-between max-w-7xl lg:py-0 md:py-3 sm:py-3 py-2">
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
                <NavDropdown label="Men" link="/mens" items={menItems} />
                <NavDropdown label="Women" link="/womens" items={womenItems} />
                <NavDropdown label="Kids" link="/kids" items={kidsItems} />
                <NavDropdown label="Camps & Tents" link="/camps-and-tents" items={[]} />
                <NavDropdown label="Packs & Bags" link="/packs-and-bags" items={[]} />
                <NavLink to="/sale" label="Sale" />
                {/* <NavLink to="/clearance" label="Clearance" /> */}
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
          <motion.div className="fixed inset-0 bg-black/50 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="absolute right-0 top-0 h-full md:w-[50%] w-[80%] bg-white shadow-xl" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
              <button onClick={handleToggle} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-6 h-6 text-gray-700" />
              </button>
              <div className="p-6 pt-16">
                <MobileNavigation setIsOpen={setIsOpen} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavLink = ({ to, label, setIsOpen }) => (
  <Link to={to} className="text-md md:text-lg lg:text-md px-4  font-bold text-gray-700 hover:text-blue-600 transition-colors relative group flex items-center gap-3" onClick={(e) => setIsOpen(false)}>
    <i className=" lg:hidden flex ">
      <ArrowRight className="ml-2" size={18} />
    </i>
    {label}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
  </Link>
);

const NavDropdown = ({ label, items, link }) => (
  <div className="group hover:bg-blue-950 pb-5 mt-5 px-2 transition-all duration-200">
    <Link to={link} className="text-md lg:text-md font-bold text-gray-700 group-hover:text-white transition-colors w-full h-full">
      {label}
      <ChevronDown className="w-4 h-4 inline ml-2" />
    </Link>
    <div className="absolute top-full left-0 right-0 lg:w-[70%] mx-auto px-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-blue-950 rounded-tl-none rounded-tr-none rounded-lg shadow-xl">
      <div className="grid grid-cols-4 gap-8 py-10">
        {items.map((category, index) => (
          <div key={index}>
            <div className="w-[1/3] border-r-2">
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.link} className="text-sm text-gray-200 hover:text-blue-600 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="items-collection"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MobileNavigation = ({ setIsOpen }) => (
  <nav className=" flex flex-col gap-8">
    <NavLink to="/" label="Home" setIsOpen={setIsOpen} />
    <NavLink to="/mens" label="Men" setIsOpen={setIsOpen} />
    <NavLink to="/womens" label="Women" setIsOpen={setIsOpen} />
    <NavLink to="/kids" label="Kids" setIsOpen={setIsOpen} />
    <NavLink to="/camps-and-tents" label="Camps & Tents" setIsOpen={setIsOpen} />
    <NavLink to="/packs-and-bags" label="Packs & Bags" setIsOpen={setIsOpen} />
    <NavLink to="/sale" label="Sale" setIsOpen={setIsOpen} />
    <NavLink to="/clearance" label="Clearance" setIsOpen={setIsOpen} />
  </nav>
);

const menItems = [
  {
    title: "New Arrivals",
    items: [
      { label: "T-shirts", link: "/mens/t-shirts" },
      { label: "Shirts", link: "/mens/shirts" },
      { label: "Pants", link: "/mens/pants" },
      { label: "Trousers", link: "/mens/trousers" },
      { label: "Joggers", link: "/mens/joggers" },
    ],
  },
  // Add other categories
];

const womenItems = [
  {
    title: "New Arrivals",
    items: [
      { label: "T-shirts", link: "/womens/t-shirts" },
      { label: "Shirts", link: "/womens/shirts" },
      { label: "Pants", link: "/womens/pants" },
      { label: "Trousers", link: "/womens/trousers" },
      { label: "Joggers", link: "/womens/joggers" },
    ],
  },
  // Add other categories
];

const kidsItems = [
  {
    title: "New Arrivals",
    items: [
      { label: "T-shirts", link: "/kids/t-shirts" },
      { label: "Shirts", link: "/kids/shirts" },
      { label: "Pants", link: "/kids/pants" },
      { label: "Trousers", link: "/kids/trousers" },
      { label: "Joggers", link: "/kids/joggers" },
    ],
  },
  // Add other categories
];

export default Header;
