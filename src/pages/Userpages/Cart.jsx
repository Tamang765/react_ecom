"use client";

import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Velvet Sneaker", size: "XL", quantity: 1, price: 20, image: "https://readymadeui.com/images/product14.webp" },
    { id: 2, name: "Smart Watch Timex", size: "XL", quantity: 1, price: 120, image: "https://readymadeui.com/images/watch5.webp" },
    { id: 3, name: "Sun Glass", size: "XL", quantity: 1, price: 50, image: "https://readymadeui.com/images/sunglass1.webp" },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateSize = (id, newSize) => {
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, size: newSize } : item)));
  };

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item)));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "discount10") {
      setDiscount(10);
    } else {
      alert("Invalid promo code");
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 2;
  const tax = 4;
  const total = subtotal + shipping + tax - discount;

  const checkout = () => {
    alert("Proceeding to checkout with total: $" + total.toFixed(2));
  };

  const continueShopping = () => {
    alert("Continuing to shop");
  };

  return (
    <div className="font-sans md:w-[90%] max-w-4xl max-md:max-w-xl sm:w-[95%] w-[95%] mx-auto bg-white py-7">
      <div className="grid md:grid-cols-3 gap-4 shadow-lg">
        <div className="md:col-span-2 bg-gray-100 p-4 rounded-md">
          <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
          <hr className="border-gray-300 mt-4 mb-8" />

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="grid grid-cols-3 items-center gap-4">
                <div className="col-span-2 flex items-center gap-4">
                  <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-gray-800">{item.name}</h3>
                    <button className="text-xs text-red-500 cursor-pointer mt-0.5" onClick={() => removeItem(item.id)}>
                      Remove
                    </button>

                    <div className="flex gap-4 mt-4">
                      <div className="relative group">
                        <button type="button" className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                          {item.size}
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-gray-500 inline ml-2.5" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" clipRule="evenodd" data-original="#000000" />
                          </svg>
                        </button>

                        <ul className="hidden group-hover:block absolute rounded-md min-w-[80px] shadow-lg bg-white z-[1000]">
                          {["SM", "MD", "XL", "XXL"].map((size) => (
                            <li key={size} className="py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer" onClick={() => updateSize(item.id, size)}>
                              {size}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <button type="button" className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current cursor-pointer" viewBox="0 0 124 124" onClick={() => updateQuantity(item.id, -1)}>
                            <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                          </svg>

                          <span className="mx-2.5">{item.quantity}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current cursor-pointer" viewBox="0 0 42 42" onClick={() => updateQuantity(item.id, 1)}>
                            <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-auto">
                  <h4 className="text-base font-bold text-gray-800">${(item.price * item.quantity).toFixed(2)}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 rounded-md p-4 md:sticky top-0">
          <div className="flex border border-blue-600 overflow-hidden rounded-md">
            <input type="text" placeholder="Promo code" className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
            <button type="button" className="flex items-center justify-center font-semibold tracking-wide bg-blue-950 hover:bg-blue-900 px-4 text-sm text-white" onClick={applyPromoCode}>
              Apply
            </button>
          </div>

          <ul className="text-gray-800 mt-8 space-y-4">
            <li className="flex flex-wrap gap-4 text-base">
              Subtotal <span className="ml-auto font-bold">${subtotal.toFixed(2)}</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base">
              Discount <span className="ml-auto font-bold">-${discount.toFixed(2)}</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base">
              Shipping <span className="ml-auto font-bold">${shipping.toFixed(2)}</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base">
              Tax <span className="ml-auto font-bold">${tax.toFixed(2)}</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base font-bold">
              Total <span className="ml-auto">${total.toFixed(2)}</span>
            </li>
          </ul>

          <div className="mt-8 space-y-2">
            <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-blue-950 hover:bg-blue-900 text-white rounded-md" onClick={checkout}>
              Checkout
            </button>
            <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md" onClick={continueShopping}>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
