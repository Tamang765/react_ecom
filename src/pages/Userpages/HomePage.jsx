// import { ArrowRight } from "lucide-react";
import BannerTop from "../../components/UserDashboard/BannerTop";
import CarouselComp from "../../components/UserDashboard/CarouselComp";
import FeaturedPromo, { SplitFeaturedPromo } from "../../components/UserDashboard/FeaturedPromo";
import MultipleItems from "../../components/UserDashboard/MultipleSlider";
import "../../style.css";
// import FeaturedPromo, { SplitFeaturedPromo } from "../../components/UserDashboard/FeaturedPromo";

export const Products = [
  {
    productImg: "/img/women/1.jpg",
    productName: "Puffer Jacket",
    price: 2500,
    category: "women",
    subCategory: "tops",
  },
  {
    productImg: "/img/women/2.jpg",
    productName: "Zip-Up Cardigan",
    price: 2500,
    category: "women",
    subCategory: "tops",
  },
  {
    productImg: "/img/women/3.jpg",
    productName: "Hoodie",
    price: 2500,
    category: "women",
    subCategory: "tops",
  },
  {
    productImg: "/img/women/4.jpg",
    productName: "Trousers",
    price: 2500,
    category: "women",
    subCategory: "bottoms",
  },
  {
    productImg: "/img/women/5.jpg",
    productName: "Hoodie",
    price: 2500,
    category: "women",
    subCategory: "tops",
  },
  {
    productImg: "/img/women/6.jpg",
    productName: "Side Bag",
    price: 2500,
    category: "women",
    subCategory: "accessories",
  },
  {
    productImg: "/img/women/7.jpg",
    productName: "Plain Shawl",
    price: 2500,
    category: "women",
    subCategory: "accessories",
  },
  {
    productImg: "/img/men/1.jpg",
    productName: "Jacket",
    price: 2500,
    category: "men",
    subCategory: "outerwear",
  },
  {
    productImg: "/img/men/2.jpg",
    productName: "Fleece Panel Jacket",
    price: 2500,
    category: "men",
    subCategory: "outerwear",
  },
  {
    productImg: "/img/men/3.jpg",
    productName: "Fleece Panel Jacket",
    price: 2500,
    category: "men",
    subCategory: "outerwear",
  },
  {
    productImg: "/img/men/4.jpg",
    productName: "Sweater",
    price: 2500,
    category: "men",
    subCategory: "tops",
  },
  {
    productImg: "/img/men/5.jpg",
    productName: "Woolen Bomber Jacket",
    price: 2500,
    category: "men",
    subCategory: "outerwear",
  },
  {
    productImg: "/img/men/6.jpg",
    productName: "Windcheater",
    price: 2500,
    category: "men",
    subCategory: "outerwear",
  },
  {
    productImg: "/img/men/7.jpg",
    productName: "Parka Jacket",
    price: 2500,
    category: "men",
    subCategory: "outerwear",
  },
  {
    productImg: "/img/men/8.jpg",
    productName: "Puffer Jacket",
    price: 2500,
    category: "men",
    subCategory: "outerwear",
  },
  {
    productImg: "/img/kids/1.jpg",
    productName: "Jacket",
    price: 2500,
    category: "kids",
    subCategory: "outerwear",
  },
  {
    productImg: "/img/kids/2.jpg",
    productName: "Fleece Panel Jacket",
    price: 2500,
    category: "kids",
    subCategory: "outerwear",
  },
  {
    productImg: "/img/kids/3.jpg",
    productName: "Fleece Panel Jacket",
    price: 2500,
    category: "kids",
    subCategory: "outerwear",
  },
  {
    productImg: "/img/kids/4.jpg",
    productName: "Sweater",
    price: 2500,
    category: "kids",
    subCategory: "tops",
  },
  {
    productImg: "/img/kids/5.jpg",
    productName: "Woolen Bomber Jacket",
    price: 2500,
    category: "kids",
    subCategory: "outerwear",
  },
  {
    productImg: "/img/kids/6.jpg",
    productName: "Windcheater",
    price: 2500,
    category: "kids",
    subCategory: "outerwear",
  },
  {
    productImg: "/img/kids/7.jpg",
    productName: "Parka Jacket",
    price: 2500,
    category: "kids",
    subCategory: "outerwear",
  },
  {
    productImg: "/img/kids/8.jpg",
    productName: "Puffer Jacket",
    price: 2500,
    category: "kids",
    subCategory: "outerwear",
  },
];


export const SubCategories = [
  { name: "tops" },
  { name: "bottoms" },
  { name: "accessories" },
  { name: "outerwear" },
];

// const best_deals = [
//   {
//     productImg: "https://readymadeui.com/images/product1.webp",
//     productName: "Lexicon Luxe | T-shirt",
//     price: 2500,
//   },
//   {
//     productImg: "https://readymadeui.com/images/product1.webp",
//     productName: "Lexicon Luxe | T-shirt",
//     price: 2500,
//   },
//   {
//     productImg: "https://readymadeui.com/images/product1.webp",
//     productName: "Lexicon Luxe | T-shirt",
//     price: 2500,
//   },
//   {
//     productImg: "https://readymadeui.com/images/product1.webp",
//     productName: "Lexicon Luxe | T-shirt",
//     price: 2500,
//   },
// ];

const HomePage = () => {
  return (
    <>
      {/* carousel section start */}
      <section className=" max-w-7xl mx-auto relative lg:w-[95%]  ">
        <div className="my-3">
          <BannerTop />
        </div>
        <CarouselComp />
      </section>

      {/* carousel section end */}

      <section className="collection-section w-[95%] lg:w-[95%] md:w-[90%] sm:w-[95%] mx-auto max-w-7xl ">
        {/* sale card section start*/}
       
        {/* sale card section end*/}

        {/* women new arrivials section start */}
        <div className="card-section mt-16 relative">
          <Heading text="Womens Collection" />

          <div className="slider mt-7">
            <MultipleItems items={Products.filter((item) => item.category === "women")} />
          </div>
        </div>
        {/* women new arrivials section end */}
        {/* <div className="mt-16">
          <FeaturedPromo title="Summer Collection 2024" description="Discover the hottest trends for this summer. Limited time offer: Get 20% off on all new arrivals!" imageUrl="/img/cover.png" ctaText="Shop Now" ctaLink="/all-products" />
        </div> */}

        {/* men new arrivials section start */}
        <div className="card-section mt-16  ">
          <Heading text="Mens Collection" />

          <div className="slider mt-7">
            <MultipleItems items={Products.filter((item) => item.category === "men")} />
          </div>
        </div>
        {/* men new arrivials section end */}
        {/* <div className="mt-16">
        <SplitFeaturedPromo title="Exclusive Autumn Styles" description="Embrace the cooler weather with our curated selection of autumn essentials. Cozy knits, stylish boots, and more await you." imageUrl="/img/1.jpg" ctaText="Explore Autumn Collection" ctaLink="/autumn-collection" imageSide="right" />

        </div> */}

        {/* children new arrivials section start */}
        <div className="card-section mt-16 mb-16  ">
          <Heading text="Kids Collection" />

          <div className="slider mt-7">
            <MultipleItems items={Products.filter((item) => item.category === "kids")} />
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
