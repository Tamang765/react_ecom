import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function SampleNextArrow({ onClick }) {
  return (
    <div className="absolute top-1/2 lg:-right-6 right-0 transform -translate-y-1/2 z-10 cursor-pointer text-white hover:text-gray-100 bg-blue-950 px-1 py-2  shadow-md" onClick={onClick}>
      <IoIosArrowForward size={20} />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="absolute top-1/2 lg:-left-5 left-0 transform -translate-y-1/2 z-10 cursor-pointer text-white hover:text-gray-100 bg-blue-950 px-1 py-2  shadow-md" onClick={onClick}>
      <IoIosArrowBack size={20} />
    </div>
  );
}
function MultipleItems({ items }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items?.map((item, index) => (
          <div className="bg-white rounded   cursor-pointer  transition-all px-2 group " key={index}>
            <div className="shadow-md border overflow-hidden">
              <div className="w-full aspect-w-16 aspect-h-8 lg:h-100 overflow-hidden">
                <Link to={"/productDetail"}>
                  <img src={item.productImg} alt="Product 1" className="h-full w-full  object-cover object-top group-hover:scale-105 transition-all duration-500" />
                </Link>
              </div>

              <div className="p-4">
                <Link to={"/productDetail"}>
                <h3 className="text-lg text-gray-800 text-center Playfair_font">{item?.productName}</h3>
                </Link>
                <div className="mt-4 flex items-center flex-wrap gap-2 justify-center">
                  <h4 className="text-md text-gray-800 text-center">
                    Rs. <span className="font-semibold">{item?.price}</span>{" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleItems;
