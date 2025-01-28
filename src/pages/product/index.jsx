import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ModalComponent } from "../../components/Card";
import { postOrderItem } from "../../redux/slice/orderItemSlice";
import { getSingleProduct } from "../../redux/slice/productSlice";

const ProductDetail = () => {
  const { slug } = useParams();

  const dispatch = useDispatch();
  // const [singleProduct, setSingleProduct] = useState(null);
  const singleProduct= useSelector((state) => state.product.singleProduct);
  // TODO: state for size

  const [userSize, setUserSize] = useState(null);
  const [userColor, setUserColor] = useState(null);


  useEffect(() => {
    //filter product data from dummy data
    // const productData = products?.find((product) => product.id === +id);
    // setSingleProduct(productData);
dispatch(getSingleProduct(slug))

  }, [slug, dispatch]);

  const [productImage, setProductImage] = useState(
    null
  );

  const handleChangeImage = (image) => {
    setProductImage(image);
  };


  return (
    <>
      {/* <BreadCrumb /> */}
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 ">
        <div className="overflow-hidden border-black h-fit">
          <img
            src={productImage||singleProduct?.images?.[0]?.url}
            alt="shoes"
            className="object-cover object-top w-full aspect-video"
          />
          <div className="flex gap-2 mt-1">

{  singleProduct?.images?.map((image)=>(

  <img
              src={image?.url}
              alt="shoes"
              onClick={() =>
                handleChangeImage(
                  image?.url
                )
              }
              width={150}
              height={150}
              className="border-red-600 "
            />
))
            }


          </div>
        </div>
        <div className="p-8 h-fit">
          <h1 className="text-2xl font-semibold">
            {singleProduct?.name}
          </h1>
          <br />
          <p>
            Price:
            <span>{singleProduct?.price}</span>
          </p>
          <div>

          <label for="Color" className="text-xl font-semibold">
            Color:
          </label>
          <br />
  <div className="flex gap-4 p-2 border-2 min-w-10 w-fit">

            {singleProduct?.color?.map((color) => (
              < >
                <input
                  type="radio"
                  id={color}
                  name="color"
                  value={color}
                  onClick={() => setUserColor(color)}
                />{" "}
                <label htmlFor={color}>{color.toUpperCase()}</label>
              </>
            ))}
</div>
          </div>
          <br />
          <label for="Size" className="text-xl font-semibold">
            Size:
          </label>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            {singleProduct?.size?.map((size) => (
              <div className="flex gap-4 p-2 border-2 min-w-10 w-fit">
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
            <label for="Quantity" className="my-2 text-xl font-semibold">
              Quantity:
            </label>
            <AddToCart size={userSize} product={singleProduct} color ={userColor} />
          </div>
        </div>
      </div>
      <div className="py-8">
        <p>
         {singleProduct?.description}
        </p>
      </div>
    </>
  );
};

export default ProductDetail;

const AddToCart = ({ size, product, color }) => {
  const user = useSelector((state) => state.auth.singleUser);
  const [openLogin, setOpenLogin]= useState(false)
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
    console.log(user)
    if(!user){
      setOpenLogin(true)
      return
    }

    if(!color && !size && !itemCount>0 ){
      toast.error("Please select color, size and quantity")
      return;
    }
    const data = {
      product:product?._id,
      color: product?.color?.[0],
      size,
      user:user?._id,
      quantity: itemCount,
    };

    dispatch(postOrderItem(data));
  }

  return (
    <>
      <div className="flex items-center gap-2 mt-3 text-xl">
        <div className="px-4 border-2" onClick={handleDecrement}>
          -
        </div>
        <div>{itemCount}</div>
        <div className="px-4 border-2" onClick={handleIncrement}>
          +
        </div>
      </div>
      <button
        className="p-2 mt-2 text-white bg-black border-2"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      {}
      {openLogin && <ModalComponent setTest={setOpenLogin} />}
    </>
  );
};
