import { AiOutlineEye } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../styles/slick-custom.css";

const MultipleItems = ({ items }) => {
  const CustomArrow = ({ direction, onClick }) => (
    <div
      className={`absolute top-1/2 ${
        direction === "next" ? "lg:-right-6 right-0" : "lg:-left-5 left-0"
      } transform -translate-y-1/2 z-10 cursor-pointer text-white hover:text-gray-100 bg-blue-950 px-1 py-2 shadow-md`}
      onClick={onClick}
    >
      {direction === "next" ? (
        <IoIosArrowForward size={20} />
      ) : (
        <IoIosArrowBack size={20} />
      )}
    </div>
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container pb-12">
      <Slider {...settings}>
        {items?.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default MultipleItems;

export const ProductCard = ({ item }) => (
  <div className="bg-white rounded cursor-pointer transition-all px-2 group">
    <div className="shadow-md border overflow-hidden">
      <div className="w-full aspect-w-16 aspect-h-8 lg:h-100 overflow-hidden relative">
        <Link to="/productDetail">
          <img
            src={item.productImg}
            alt="Product"
            className="h-full w-full object-cover object-top group-hover:scale-105 transition-all duration-500"
          />
        </Link>
        <Link
          to="/productDetail"
          className="absolute top-2 right-2 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100"
          title="Quick View"
        >
          <AiOutlineEye className="text-gray-800" size={20} />
        </Link>
      </div>
      <div className="p-4">
        <Link to="/productDetail">
          <h3 className="text-lg text-gray-800 text-center Playfair_font">
            {item?.productName}
          </h3>
        </Link>
        <div className="mt-4 flex items-center flex-wrap gap-2 justify-center">
          <h4 className="text-md text-gray-800 text-center">
            Rs. {item?.price}
          </h4>
        </div>
      </div>
    </div>
  </div>
);
