import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateQuantity } from "../../redux/slice/filterSlice";

const Cart = () => {
  const cart = useSelector((state) => state.filter.cartData);

  return (
    <div>
      <h2 className="text-center text-xl  font-semibold">My Cart</h2>
      <hr />
      {cart?.map((item) => (
        <CartItem quantity={item?.quantity} key={item?.id} {...item} />
      ))}
    </div>
  );
};

export default Cart;

function CartItem({ quantity, ...item }) {
  return (
    <div className="grid grid-cols-3 justify-center items-center gap-8 border-b-2">
      <div className=" col-span-1">
        <div className=" group-hover:shadow-2xl h-full   flex  justify-between   ">
          <img
            src={item?.image}
            // src={props?.image}
            width={300}
            alt="earbuds"
            className=" aspect-video group-hover:scale-110 duration-300"
          />
          <Link to={`/product`} className="">
            <div className="flex items-center">
              <div className="p-4 flex  flex-col">
                <h1 className="text-lg font-bold">{item?.product_name}</h1>
                {/* <span>color:red</span>
                <span>size:xxl</span> */}
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className=" col-span-2 flex  items-center gap-8">
        <span> price: Rs.{item?.price}</span>
        <QuantityFunc id={item?.id} quantity={quantity} />
        <span> Total Price: {+item?.price?.replace("$", "") * +quantity} </span>
      </div>
    </div>
  );
}

function QuantityFunc({ id, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-4 items-center">
      <button
        className="border-2 border-black p-2"
        onClick={() => dispatch(updateQuantity({ id, quantity: quantity - 1 }))}
        disabled={quantity <= 1}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        className="border-2 border-black p-2"
        onClick={() => dispatch(updateQuantity({ id, quantity: quantity + 1 }))}
      >
        +
      </button>
    </div>
  );
}
