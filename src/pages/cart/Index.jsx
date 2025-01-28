import axios from "axios"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { deleteOrderItem, updateOrderItem } from "../../redux/slice/orderItemSlice"

const Cart = () => {
  const cart = useSelector((state) => state.orderItem.orderItem)


  const placeOrder = async () => {
    try {
      const response = await axios.post(`http://localhost:9000/create-checkout-session`, cart)
      window.location.href = response.data.url
    } catch (error) {
      console.log(error)
    }
  }


  console.log(cart)

  return (
    <div className="min-h-screen py-8 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center">My Cart</h2>
        <div className="overflow-hidden bg-white rounded-lg shadow-md">
          {cart?.length > 0 ? (
            <>
              {cart?.map((item) => (
                <CartItem key={item?.id} quantity={item?.quantity} {...item} />
              ))}
              <div className="p-6 border-t border-gray-200">
                <button
                  className="w-full px-4 py-3 text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  onClick={placeOrder}
                >
                  Place Order
                </button>
              </div>
            </>
          ) : (
            <p className="py-8 text-center text-gray-500">Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart

function CartItem({ quantity, ...item }) {
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col items-center p-6 border-b border-gray-200 md:flex-row">
      <div className="w-full mb-4 md:w-1/3 md:mb-0">
        <div className="relative overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
          <img
            src={item?.product?.images?.[0]?.url || "/placeholder.svg"}
            alt={item?.product_name}
            className="object-cover object-top w-full aspect-video"
          />
        </div>
      </div>
      <div className="flex flex-col w-full md:w-2/3 md:pl-6">
        <Link to={`/product`} className="mb-2">
          <h3 className="text-xl font-semibold">{item?.product_name}</h3>
        </Link>
        <p className="mb-2 text-gray-600">Color: {item?.color}</p>
        <p className="mb-4 text-gray-600">Size: {item?.size}</p>
        <div className="flex flex-wrap items-center justify-between">
          <p className="mb-2 text-lg font-semibold md:mb-0">Price: Rs.{item?.product?.price}</p>
          <QuantityFunc id={item?._id} quantity={quantity} />
          <p className="mb-2 text-lg font-semibold md:mb-0">Total: Rs.{+item?.product?.price * +quantity}</p>
          <button
            className="w-full px-4 py-2 text-white transition duration-300 bg-red-500 rounded md:w-auto hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            onClick={() => dispatch(deleteOrderItem(item?._id))}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

function QuantityFunc({ id, quantity }) {
  const dispatch = useDispatch()

  const handleAddQuantity = (quantity) => {
    const newQuantity = quantity + 1
    if (quantity > 0) {
      dispatch(updateOrderItem({ id, quantity: newQuantity }))
    }
  }

  const handleSubtractQuantity = (quantity) => {
    const newQuantity = quantity - 1
    if (quantity > 0) {
      dispatch(updateOrderItem({ id, quantity: newQuantity }))
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        className="flex items-center justify-center w-8 h-8 transition duration-300 border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={() => handleSubtractQuantity(quantity)}
        disabled={quantity <= 1}
      >
        -
      </button>
      <span className="text-lg font-semibold">{quantity}</span>
      <button
        className="flex items-center justify-center w-8 h-8 transition duration-300 border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={() => handleAddQuantity(quantity)}
      >
        +
      </button>
    </div>
  )
}
