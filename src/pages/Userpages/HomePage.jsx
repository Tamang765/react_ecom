import { ArrowRight } from "lucide-react";
import BannerTop from "../../components/UserDashboard/BannerTop";
import CarouselComp from "../../components/UserDashboard/CarouselComp";
import MultipleItems from "../../components/UserDashboard/MultipleSlider";
import "../../style.css";
import FeaturedPromo, { SplitFeaturedPromo } from "../../components/UserDashboard/FeaturedPromo";

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

const best_deals = [
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
      <BannerTop />
      {/* carousel section start */}
      <section className="mt-2 max-w-7xl mx-auto ">
        <CarouselComp />
      </section>

      {/* carousel section end */}

      <section className="collection-section w-[95%] my-10 lg:w-[95%] md:w-[90%] sm:w-[95%] mx-auto max-w-7xl ">
        {/* sale card section start*/}
        <div className="card-section ">
          <Heading text="Best Deals - Final Days" />
          <div className="best_deals grid grid-cols-4 gap-4">
            {best_deals.map((item, index) => (
              <div className="deal-card group relative overflow-hidden bg-white dark:bg-gray-800  transition-all duration-300 hover:shadow-lg" key={index}>
                <div className="aspect-w-1 aspect-h-1 relative">
                  <img src="/img/deals.avif" alt="T-shirt" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className=" inset-0 bg-black bg-opacity-10 flex items-end p-6">
                    <h2 className="text-2xl text-gray-700 font-semibold  Playfair_font">T-shirts</h2>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center">
                      <button className="bg-white text-black px-6 py-2  hover:bg-gray-200 transition-colors duration-300 flex items-center">
                        Show More
                        <ArrowRight className="ml-2" size={18} />
                      </button>
                    </div>
                  </div>
                </div>
                {/* <div className="absolute top-4 left-4 bg-blue-950 rounded-full dark:bg-gray-800 px-3 py-1 r text-sm font-medium text-gray-100 dark:text-gray-200">50% OFF</div> */}
              </div>
            ))}
          </div>

          {/* <div className="slider">
            <MultipleItems items={products} />
          </div> */}
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
        <FeaturedPromo title="Summer Collection 2024" description="Discover the hottest trends for this summer. Limited time offer: Get 20% off on all new arrivals!" imageUrl="/img/cover.png" ctaText="Shop Now" ctaLink="/summer-collection" />

        {/* men new arrivials section start */}
        <div className="card-section mt-10 ">
          <Heading text="Mens Collection" />

          <div className="slider">
            <MultipleItems items={products} />
          </div>
        </div>
        {/* men new arrivials section end */}
        <SplitFeaturedPromo title="Exclusive Autumn Styles" description="Embrace the cooler weather with our curated selection of autumn essentials. Cozy knits, stylish boots, and more await you." imageUrl="/img/1.jpg" ctaText="Explore Autumn Collection" ctaLink="/autumn-collection" imageSide="right" />

        {/* children new arrivials section start */}
        <div className="card-section mt-10 ">
          <Heading text="Kids Collection" />

          <div className="slider">
            <MultipleItems items={products} />
          </div>
        </div>
        {/* children new arrivials section end */}
        {/* <FeaturedPromo title="Summer Collection 2024" description="Discover the hottest trends for this summer. Limited time offer: Get 20% off on all new arrivals!" imageUrl="/img/cover.png" ctaText="Shop Now" ctaLink="/summer-collection" /> */}
      </section>
    </>
  );
};

export const Heading = ({ text }) => {
  return (
    <div className="flex justify-center relative mb-4 p-2">
      <h2 className=" Playfair_font tracking-wide  font-bold text-[30px]  text-center text-blue-950 ">{text}</h2>
      <div className="absolute h-[1px] bg-blue-950 left-0 right-0 bottom-0 w-[10%] mx-auto"></div>
    </div>
  );
};

export default HomePage;
