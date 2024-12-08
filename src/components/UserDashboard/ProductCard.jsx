import React from 'react'
import { LuHeart } from 'react-icons/lu'
import { Link } from 'react-router-dom'

const ProductCard = () => {
  return (
    <>
    <div className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
          <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
            <Link to={'/productDetail'}>
            <img src="https://readymadeui.com/images/product1.webp" alt="Product 1"
              className="h-full w-full object-cover object-top" />
              </Link>
          </div>

          <div className="p-4">
            <h3 className="text-lg text-gray-800 text-center">Lexicon Luxe | T-shirt</h3>
            <div className="mt-4 flex items-center flex-wrap gap-2 justify-center">
              <h4 className="text-lg text-gray-800 text-center">Rs. <span className='font-semibold'>1000</span> </h4>

            </div>
          </div>
        </div>
    </>
   
 


  )
}

export default ProductCard