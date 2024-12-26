import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, X, MapPin, Phone } from "lucide-react";
import "../../style.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleOpenRef = useRef(null);
  const toggleCloseRef = useRef(null);
  const collapseMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = () => {
      if (collapseMenuRef.current) {
        collapseMenuRef.current.style.display = collapseMenuRef.current.style.display === "block" ? "none" : "block";
      }
    };

    const toggleOpen = toggleOpenRef.current;
    const toggleClose = toggleCloseRef.current;

    if (toggleOpen) toggleOpen.addEventListener("click", handleClick);
    if (toggleClose) toggleClose.addEventListener("click", handleClick);

    return () => {
      if (toggleOpen) toggleOpen.removeEventListener("click", handleClick);
      if (toggleClose) toggleClose.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="w-full h-full sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-950 to-blue-800 ">
        <div className="w-[95%] lg:w-[90%] md:w-[90%] sm:w-[95%] mx-auto flex items-center  text-white/90 text-sm h-10 max-w-7xl ">
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
        <header className={`bg-white/95 backdrop-blur-md shadow-md transition-all duration-300`}>
          <div className="w-[95%] lg:w-[90%] md:w-[90%] sm:w-[95%] mx-auto    flex items-center justify-between max-w-7xl lg:py-0  md:py-3 sm:py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img src="/img/logo.jpg" alt="Eagle Trend" className="w-12 h-12 rounded-full shadow-lg transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Eagle Trend</span>
            </Link>

            {/* Navigation */}
            <div id="collapseMenu" ref={collapseMenuRef} className="hidden lg:block">
              <nav className="flex items-center space-x-2">
                <NavLink to="/" label="Home" />
                <NavDropdown label="Men" link="mens" items={menItems} />
                <NavDropdown label="Women" link="womens" items={womenItems} />
                <NavDropdown label="Kids" link="kids" items={kidsItems} />
                <NavLink to="/sale" label="Sale" />
                <NavLink to="/clearance" label="Clearance" />
              </nav>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-6">
              <Link to="/cart" className="relative group">
                <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </Link>
              <Link to="/login" className="group">
                <User className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
              </Link>
              <button ref={toggleOpenRef} className="lg:hidden focus:outline-none">
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <div className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300" style={{ display: "none" }} ref={collapseMenuRef}>
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl">
            <button ref={toggleCloseRef} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-6 h-6 text-gray-700" />
            </button>
            <div className="p-6 pt-16">
              <MobileNavigation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavLink = ({ to, label }) => (
  <Link to={to} className="text-md  px-3 font-bold text-gray-700 hover:text-blue-600 transition-colors relative group">
    {label}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
  </Link>
);

const NavDropdown = ({ label, items, link }) => (
  <div className=" group hover:bg-blue-950  pb-5 mt-5 px-3 transition-all duration-200   ">
    <Link to={link} className="text-md font-bold text-gray-700 group-hover:text-white  transition-colors w-full h-full">
      {label}

    </Link>
    <div className="absolute top-full left-0 right-0 lg:w-[70%] mx-auto  px-10   opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-blue-950  rounded-tl-none rounded-tr-none rounded-lg shadow-xl">
      <div className=" grid grid-cols-4 gap-8 py-10 ">
        {items.map((category, index) => (
          <div key={index}>
            {/* <h3 className="font-medium text-gray-900 mb-3">{category.title}</h3> */}
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

const MobileNavigation = () => (
  <nav className="space-y-6">
    <Link to="/" className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">
      Home
    </Link>
    {/* Add other mobile navigation items */}
  </nav>
);

const menItems = [
  {
    title: "New Arrivals",
    items: [
      { label: "T-shirts", link: "/mens" },
      { label: "Shirts", link: "/mens" },
      { label: "Pants", link: "/mens" },
      { label: "Trousers", link: "/mens" },
      { label: "Joggers", link: "/mens" },
    ],
    link: "/mens",
  },
  // Add other categories
];
const womenItems = [
  {
    title: "New Arrivals",
    items: [
      { label: "T-shirts", link: "/mens" },
      { label: "Shirts", link: "/mens" },
      { label: "Pants", link: "/mens" },
      { label: "Trousers", link: "/mens" },
      { label: "Joggers", link: "/mens" },
    ],
    link: "/women",
  },
  // Add other categories
];

const kidsItems = [
  {
    title: "New Arrivals",
    items: [
      { label: "T-shirts", link: "/mens" },
      { label: "Shirts", link: "/mens" },
      { label: "Pants", link: "/mens" },
      { label: "Trousers", link: "/mens" },
      { label: "Joggers", link: "/mens" },
    ],
    link: "/kids",
  },
  // Add other categories
];

// Define womenItems and kidsItems similarly

export default Header;
