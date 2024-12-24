import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cartFunc } from "../../redux/slice/filterSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const products = useSelector((state) => state.filter.data);
  // TODO: state for size

  const [userSize, setUserSize] = useState(null);

  useEffect(() => {
    //filter product data from dummy data
    const productData = products?.find((product) => product.id === +id);
    setSingleProduct(productData);
  }, [id, products]);

  const [productImage, setProductImage] = useState(
    "https://caliber-kd-shoes.s3.ap-south-1.amazonaws.com/uploads/2023/06/19184235/669S-WT-4-150x150.jpg"
  );

  const handleChangeImage = (image) => {
    setProductImage(image);
  };

  return (
    <>
      {/* <BreadCrumb /> */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 ">
        <div className=" border-black overflow-hidden h-fit ">
          <img
            src={singleProduct?.image}
            alt="shoes"
            className=" w-full h-3/5 "
          />
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
          <h1 className="text-2xl font-semibold">
            {singleProduct?.product_name}
          </h1>
          <br />
          <p>
            Price:
            <span>{singleProduct?.price}</span>
          </p>
          <ul className="list-disc">
            <li>Color:{singleProduct?.color}</li>
          </ul>
          <br />
          <label for="Size" className="text-xl font-semibold">
            Size:
          </label>
          <div className="flex flex-wrap gap-4  items-center mt-4">
            {["xl", "l", "m", "s", "xs"]?.map((size) => (
              <div className="border-2 min-w-10 w-fit flex  gap-4 p-2">
                <input
                  type="radio"
                  id={size}
                  name="size"
                  value={size}
                  onClick={() => setUserSize(size)}
                />{" "}
                <label htmlFor={size}>{size.toUpperCase()}</label>
              </div>
            ))}
          </div>
          <div className="my-3">
            <label for="Quantity" className="text-xl font-semibold my-2">
              Quantity:
            </label>
            <AddToCart size={userSize} product={singleProduct} />
          </div>
        </div>
      </div>
      <div className="py-8">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          nostrum possimus esse, officia quis sed accusantium. Eius earum
          reiciendis qui repellendus, placeat dolorum! Qui explicabo expedita
          nisi minima adipisci ex est aliquam inventore tempora, voluptate
          dolorum? Perspiciatis quia sit non dignissimos. Officia deleniti,
          possimus eum nisi a vero quia laudantium? Neque odio, ex veritatis non
          dolores nesciunt nulla repudiandae fuga sit numquam sequi nam sunt
          nihil ut esse, et, tenetur reprehenderit in sed saepe ratione. Quae
          quisquam culpa est sint dolor a perspiciatis possimus porro iusto
          rerum reiciendis eligendi, velit voluptatem ex recusandae in repellat
          vel maxime doloribus temporibus ut!
        </p>
      </div>
    </>
  );
};

export default ProductDetail;

const AddToCart = ({ size, product }) => {
  const [itemCount, setItemCount] = useState(0);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    setItemCount(itemCount + 1);
  };
  const handleDecrement = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
    }
  };

  function handleAddToCart() {
    const data = {
      ...product,
      size,
      quantity: itemCount,
    };
    dispatch(cartFunc(data));
  }

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
      <button
        className="border-2 bg-black text-white p-2 mt-2"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </>
  );
};
