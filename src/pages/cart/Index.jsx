import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const [quantity, setQuantity] = React.useState(1);
  const cart = useSelector((state) => state.filter.cartData);

  return (
    <div>
      <h2 className="text-center text-xl  font-semibold">My Cart</h2>
      <hr />
      {cart?.map((item) => (
        <CartItem
          setQuantity={setQuantity}
          quantity={quantity}
          key={item?.id}
          {...item}
        />
      ))}
    </div>
  );
};

export default Cart;

function CartItem({ setQuantity, quantity, ...item }) {
  console.log(item);
  return (
    <div className="grid grid-cols-3 justify-center items-center gap-8 border-b-2">
      <div className=" col-span-1">
        <div className=" group-hover:shadow-2xl h-full   flex  justify-between   ">
          <Link to={`/product`} className="">
            <div className="flex w-fit items-center">
              <img
                src={item?.image}
                // src={props?.image}

                alt="earbuds"
                className="w-1/4 aspect-video group-hover:scale-110 duration-300"
              />
              <div className="p-4 flex  flex-col">
                <h1 className="text-lg font-bold">{item?.title}</h1>
                {/* <span>color:red</span>
                <span>size:xxl</span> */}
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className=" col-span-2 flex  items-center gap-8">
        <span> price: Rs.{item?.price}</span>
        <QuantityFunc setQuantity={setQuantity} quantity={quantity} />
        <span> total: </span>
      </div>
    </div>
  );
}

function QuantityFunc({ setQuantity, quantity }) {
  return (
    <div className="flex gap-4 items-center">
      <button
        className="border-2 border-black p-2"
        onClick={() => (quantity > 0 ? setQuantity(quantity - 1) : quantity)}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        className="border-2 border-black p-2"
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </button>
    </div>
  );
}
