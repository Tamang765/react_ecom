import React, { useState } from "react";
import BreadCrumb from "../../components/Breadcrumb/BreadCrumb";

const ProductDetail = () => {
  const [productImage, setProductImage] = useState(
    "https://caliber-kd-shoes.s3.ap-south-1.amazonaws.com/uploads/2023/06/19184235/669S-WT-4-150x150.jpg"
  );

  const handleChangeImage = (image) => {
    setProductImage(image);
  };

  return (
    <>
      <BreadCrumb />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 ">
        <div className=" border-black overflow-hidden ">
          <img src={productImage} alt="shoes" className=" w-full h-3/5 " />
          <div className="flex gap-2 mt-1">
            <img
              src="https://caliber-kd-shoes.s3.ap-south-1.amazonaws.com/uploads/2023/06/19184235/669S-WT-4-150x150.jpg"
              alt="shoes"
              onClick={() =>
                handleChangeImage(
                  "https://caliber-kd-shoes.s3.ap-south-1.amazonaws.com/uploads/2023/06/19184235/669S-WT-4-150x150.jpg"
                )
              }
              width={150}
              height={150}
              className=" border-red-600"
            />
            <img
              src="https://caliber-kd-shoes.s3.ap-south-1.amazonaws.com/uploads/2023/06/19184237/669S-WT-1.jpg
"
              alt="shoes"
              width={150}
              height={150}
              className=" border-red-600"
              onClick={() =>
                handleChangeImage(
                  "https://caliber-kd-shoes.s3.ap-south-1.amazonaws.com/uploads/2023/06/19184237/669S-WT-1.jpg"
                )
              }
            />{" "}
            <img
              src="https://caliber-kd-shoes.s3.ap-south-1.amazonaws.com/uploads/2023/06/19184235/669S-WT-4-150x150.jpg"
              onClick={() =>
                handleChangeImage(
                  "https://caliber-kd-shoes.s3.ap-south-1.amazonaws.com/uploads/2023/06/19184235/669S-WT-4-150x150.jpg"
                )
              }
              alt="shoes"
              width={150}
              height={150}
              className=" border-red-600"
            />{" "}
            <img
              src="https://caliber-kd-shoes.s3.ap-south-1.amazonaws.com/uploads/2023/06/19184235/669S-WT-4-150x150.jpg"
              onClick={() =>
                handleChangeImage(
                  "https://caliber-kd-shoes.s3.ap-south-1.amazonaws.com/uploads/2023/06/19184235/669S-WT-4-150x150.jpg"
                )
              }
              alt="shoes"
              width={150}
              height={150}
              className=" border-red-600"
            />
          </div>
        </div>
        <div className=" p-8 h-fit">
          <h1 className="text-2xl font-semibold">Product Name</h1>
          <br />
          <p>
            Price:
            <span>233</span>
          </p>
          <ul className="list-disc">
            <li>Color:black</li>
            <li>Brand:Nike</li>
            <li>Hill-shape:Flat</li>
          </ul>
          <br />
          <label for="Size" className="text-xl font-semibold">
            Size:
          </label>
          <div className="flex flex-wrap gap-4  items-center mt-4">
            <div className="border-2 min-w-10 w-fit flex  gap-4 p-2">
              <input type="radio" id="l" name="fav_language" value="L" />{" "}
              <label for="l">L</label>
            </div>
            <br />
            <div className="border-2 min-w-10 w-fit flex  gap-4 p-2">
              <input type="radio" id="m" name="fav_language" value="M" />{" "}
              <label for="m">M</label>
            </div>
            <br />
            <div className="border-2 min-w-10 w-fit flex  gap-4 p-2">
              <input type="radio" id="s" name="fav_language" value="S" />{" "}
              <label for="s">S</label>
            </div>
            <br />
            <div className="border-2 min-w-10 w-fit flex  gap-4 p-2">
              <input type="radio" id="xs" name="fav_language" value="Xs" />
              <label for="xs">Xs</label>
            </div>
          </div>
          <div className="my-3">
            <label for="Quantity" className="text-xl font-semibold my-2">
              Quantity:
            </label>
            <AddToCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

const AddToCart = () => {
  const [itemCount, setItemCount] = useState(0);
  const handleIncrement = () => {
    setItemCount(itemCount + 1);
  };
  const handleDecrement = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
    }
  };
  return (
    <>
      <div className="flex items-center gap-2 text-xl mt-3">
        <div className="border-2 px-4" onClick={handleDecrement}>
          -
        </div>
        <div>{itemCount}</div>
        <div className="border-2 px-4" onClick={handleIncrement}>
          +
        </div>
      </div>
      <button className="border-2 bg-black text-white p-2 mt-2">
        Add to Cart
      </button>
    </>
  );
};
