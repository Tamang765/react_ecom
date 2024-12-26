import Card from "../../components/UserDashboard/Card";
import CarouselComp from "../../components/UserDashboard/CarouselComp";
import MultipleItems from "../../components/UserDashboard/MultipleSlider";
import ProductCard from "../../components/UserDashboard/ProductCard";
import "../../style.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const products = [
  {
    productImg: "https://readymadeui.com/images/product1.webp",
    productName: "Lexicon Luxe | T-shirt",
    price: 2500,
  },
  {
    productImg: "https://readymadeui.com/images/product1.webp",
    productName: "Lexicon Luxe | T-shirt",
    price: 2500,
  },
  {
    productImg: "https://readymadeui.com/images/product1.webp",
    productName: "Lexicon Luxe | T-shirt",
    price: 2500,
  },
  {
    productImg: "https://readymadeui.com/images/product1.webp",
    productName: "Lexicon Luxe | T-shirt",
    price: 2500,
  },
  {
    productImg: "https://readymadeui.com/images/product1.webp",
    productName: "Lexicon Luxe | T-shirt",
    price: 2500,
  },
  {
    productImg: "https://readymadeui.com/images/product1.webp",
    productName: "Lexicon Luxe | T-shirt",
    price: 2500,
  },
];

const HomePage = () => {
  return (
    <>
      {/* carousel section start */}
      <section className=" mt-5 max-w-7xl lg:w-[90%] md:w-[90%] sm:w-[95%] w-[95%] mx-auto">
        <CarouselComp />
      </section>

      {/* carousel section end */}

      <section className="collection-section w-[95%] my-10 lg:w-[90%] md:w-[90%] sm:w-[95%] mx-auto max-w-7xl ">
        {/* sale card section start*/}
        <div className="card-section ">
          <Heading text="Best Deals - Final Days" />

          <div className="slider">
            <MultipleItems items={products} />
          </div>
        </div>
        {/* sale card section end*/}

        {/* women new arrivials section start */}
        <div className="card-section mt-10 relative">
          <Heading text="Womens Collection" />

          <div className="slider">
            <MultipleItems items={products} />
          </div>
        </div>
        {/* women new arrivials section end */}

        {/* men new arrivials section start */}
        <div className="card-section mt-10 ">
          <Heading text="Mens Collection" />

          <div className="slider">
            <MultipleItems items={products} />
          </div>
        </div>
        {/* men new arrivials section end */}

        {/* children new arrivials section start */}
        <div className="card-section mt-10 ">
          <Heading text="Kids Collection" />

          <div className="slider">
            <MultipleItems items={products} />
          </div>
        </div>
        {/* children new arrivials section end */}
      </section>
    </>
  );
};

export const Heading = ({ text }) => {
  return (
    <div className="flex justify-center relative mb-4 p-2">
      <h2 className=" Playfair_font tracking-wide  font-bold text-[25px]  text-center text-blue-950 ">{text}</h2>
      <div className="absolute h-[1px] bg-blue-950 left-0 right-0 bottom-0 w-[10%] mx-auto"></div>
    </div>
  );
};

export default HomePage;
