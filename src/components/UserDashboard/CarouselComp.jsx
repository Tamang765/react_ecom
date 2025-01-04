import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";

function SampleNextArrow({ onClick }) {
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer text-gray-800 hover:text-black bg-white p-1 rounded-full shadow-md"
      onClick={onClick}
    >
      <IoIosArrowForward size={20} />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer text-gray-800 hover:text-black bg-white p-1 rounded-full shadow-md"
      onClick={onClick}
    >
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
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const slidesData = [
    {
      id: 1,
      imgSrc: "/img/cover.png",
      title: "Welcome to Our Service",
      description: "Explore our features and offerings in detail.",
    },
    {
      id: 2,
      imgSrc: "/img/download.png",
      title: "Innovative Solutions",
      description: "Discover how we can help streamline your workflow.",
    },
    {
      id: 3,
      imgSrc: "/img/cover.png",
      title: "Innovative Solutions",
      description: "Discover how we can help streamline your workflow.",
    },
    {
      id: 4,
      imgSrc: "/img/logo.jpg",
      title: "Innovative Solutions",
      description: "Discover how we can help streamline your workflow.",
    },
  ];

  return (
    <div className="relative">
      <Slider {...settings} className="h-full">
        {slidesData.map((slide) => (
          <div
            key={slide.id}
            className="bg-gray-200 h-full flex items-center justify-center"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-full">
              <div className="w-full h-full">
                <img
                  src={slide.imgSrc}
                  alt={slide.title}
                  className="w-full  aspect-video object-cover "
                />
              </div>
              <div className="p-8 text-center lg:text-left">
                <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold capitalize Playfair_font text-blue-900">
                  {slide.title}
                </h2>
                <p className="mt-4 text-lg text-gray-600 italic carousel_font">
                  {slide.description}
                </p>
                <button className="mt-6 px-6 py-2 bg-blue-900 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-800 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselComp;
