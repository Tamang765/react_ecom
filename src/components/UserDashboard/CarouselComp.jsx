import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";

function SampleNextArrow({ onClick }) {
  return (
    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer text-gray-800 hover:text-black bg-white p-1 rounded-full shadow-md" onClick={onClick}>
      <IoIosArrowForward size={20} />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer text-gray-800 hover:text-black bg-white p-1 rounded-full shadow-md" onClick={onClick}>
      <IoIosArrowBack size={20} />
    </div>
  );
}

function CarouselComp() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="relative h-[50vh] sm:h-[40vh] md:h-[60vh] lg:h-[70vh] ">
      <Slider {...settings} className="h-[50vh] lg:h-[70vh] md:h-[60vh] sm:h-[40vh] ">
        <div className="bg-gray-200 h-[50vh]  lg:h-[70vh] md:h-[60vh] sm:h-[40vh] ">
          <div className="grid grid-cols-2 items-center h-full">
            <div className="w-full h-full">
              <img src="/img/cover.png" alt="..." className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <h2 className="text-5xl font-bold capitalize Playfair_font text-center">Welcome to Our Service</h2>
              <p className="mt-4 text-lg text-gray-600 carousel_font italic text-center">Explore our features and offerings in detail.</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 h-[50vh] md:h-[60vh] sm:h-[40vh] lg:h-[70vh] ">
          <div className="grid grid-cols-2 items-center h-full  ">
            <div className="w-full h-full">
              <img src="/img/download.png" alt="..." className="w-full lg:h-[70vh] h-full object-cover " />
            </div>
            <div className="p-8">
              <h2 className="text-5xl font-bold capitalize  Playfair_font text-center">Innovative Solutions</h2>
              <p className="mt-4 text-lg text-gray-600 carousel_font text-center">Discover how we can help streamline your workflow.</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 h-[50vh] lg:h-[70vh] md:h-[60vh] sm:h-[40vh] ">
          <div className="grid grid-cols-2 items-center h-full ">
            <div className="w-full h-full">
              <img src="/img/cover.png" alt="..." className="w-full h-full object-cover bg-center bg-cover" />
            </div>
            <div className="p-8">
              <h2 className="text-5xl font-bold capitalize  Playfair_font text-center">Innovative Solutions</h2>
              <p className="mt-4 text-lg text-gray-600 carousel_font text-center italic">Discover how we can help streamline your workflow.</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 h-[50vh] lg:h-[70vh] md:h-[60vh] sm:h-[40vh]">
          <div className="grid grid-cols-2 items-center h-full ">
            <div className="w-full h-full">
              <img src="/img/logo.jpg" alt="..." className="w-full h-full lg:h-[70vh] object-cover bg-center bg-cover" />
            </div>
            <div className="p-8">
              <h2 className="text-5xl font-bold capitalize  Playfair_font text-center">Innovative Solutions</h2>
              <p className="mt-4 text-lg text-gray-600 carousel_font text-center italic">Discover how we can help streamline your workflow.</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
export default CarouselComp;
