import React from 'react'

const Card = () => {
  return (
    <>
    <div className="card relative overflow-hidden font-poppins">
        <div className="card-img w-full aspect-w-16 aspect-h-8 lg:h-80 shadow-sm shadow-gray-400 relative">
          <img src="/img/1.jpg" alt="" className='h-full w-full object-cover object-top' />
            <div class="absolute top-0 right-0">
            <div class="w-40 h-8 absolute top-4 -right-10">
                <div
                    class="h-full w-full bg-third text-white text-center uppercase leading-8 font-semibold transform rotate-45 bg-red-500 ps-3">
                    30% Sale</div>
            </div>
        </div>
        </div>
        <div className="card-content absolute bottom-3 ps-4">
        <p className="text-3xl font-extrabold text-blue-400 text-shadow-sm shadow-blue-900 mb-2">Rs. 1000</p>
        <p className='text-3xl uppercase font-extrabold text-blue-400 text-shadow-sm shadow-blue-900  mb-3'>Man <br />Jacket</p>
         <a href=""><button className='bg-blue-950 py-1 px-5 text-base text-white uppercase font-semibold hover:bg-gray-100 hover:bg-opacity-85'>Shop Now</button></a>
        </div>
    </div>
    </>
  )
}

export default Card