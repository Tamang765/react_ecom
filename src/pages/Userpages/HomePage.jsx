import React from 'react'
import Card from '../../components/UserDashboard/Card'
import CarouselComp from '../../components/UserDashboard/CarouselComp'
import ProductCard from '../../components/UserDashboard/ProductCard'
import '../../style.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const HomePage = () => {
  return (
    <>
    {/* carousel section start */}
    <section className='mt-3 max-w-screen-lg mx-auto'>
      <CarouselComp />
    </section>

    {/* carousel section end */}

    <section className="collection-section my-10">
      {/* sale card section start*/}
      <div className="card-section mt-3 font-poppins">
        <h2 className='uppercase italic font-extrabold text-2xl mb-4 text-center text-blue-950'>Best Deals - Final Days</h2>
        <div className="mx-auto mt-7 w-4/5 lg:w-5/6 max-w-screen-xl grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-4 md:gap-y-5 justify-items-center relative">
          <Card />
          <Card />
          <Card />
          <Card />
          <button
            className="absolute left-[-20px] top-[40%]  bg-teal-600 text-white px-1 text-center py-2  hover:bg-blue-950 hover:text-white"

          >
            <FaArrowLeft size={15} />
          </button>

          {/* Right Arrow */}
          <button
            className="absolute right-[-20px] top-[40%]  bg-teal-600 text-white px-1 text-center py-2  hover:bg-blue-950 hover:text-white"

          >
            <FaArrowRight size={15} />
          </button>


        </div>
        {/*  Slider indicators  */}
        <div class=" flex  space-x-3  justify-center mt-5">

          <button type="button" class="w-3 h-3 rounded-full bg-sky-400 hover:bg-teal-600" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button" class="w-3 h-3 rounded-full bg-sky-400 hover:bg-teal-600" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          <button type="button" class="w-3 h-3 rounded-full bg-sky-400 hover:bg-teal-600" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
          <button type="button" class="w-3 h-3 rounded-full bg-sky-400 hover:bg-teal-600" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        </div>

      </div>
      {/* sale card section end*/}

      {/* women new arrivials section start */}
      <div className="card-section mt-10 relative">
        <h2 className='uppercase italic font-extrabold text-2xl mb-4 text-center text-blue-950'>Womens Collection</h2>
  
        <div className="mx-auto mt-7 w-4/5 lg:w-5/6 max-w-screen-xl grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-4 md:gap-y-5 justify-items-center relative">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

          {/* Left Arrow */}
          <button
            className="absolute left-[-20px] top-[40%]  bg-teal-600 text-white px-1 text-center py-2  hover:bg-blue-950 hover:text-white"

          >
            <FaArrowLeft size={15} />
          </button>

          {/* Right Arrow */}
          <button
            className="absolute right-[-20px] top-[40%]  bg-teal-600 text-white px-1 text-center py-2  hover:bg-blue-950 hover:text-white"

          >
            <FaArrowRight size={15} />
          </button>
        </div>
           {/*  Slider indicators  */}
           <div class=" flex  space-x-3  justify-center mt-5">

<button type="button" class="w-3 h-3 rounded-full bg-sky-400 hover:bg-teal-600" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
<button type="button" class="w-3 h-3 rounded-full bg-sky-400 hover:bg-teal-600" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
<button type="button" class="w-3 h-3 rounded-full bg-sky-400 hover:bg-teal-600" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
<button type="button" class="w-3 h-3 rounded-full bg-sky-400 hover:bg-teal-600" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
</div>



      </div>
      {/* women new arrivials section end */}

      {/* men new arrivials section start */}
      <div className="card-section mt-10 ">
        <h2 className='uppercase italic font-extrabold text-2xl mb-4 text-center text-blue-950'>Mens Collection</h2>
        <div className="mx-auto mt-7 w-4/5 lg:w-5/6 max-w-screen-xl grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-4 md:gap-y-5 justify-items-center relative">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <button
            className="absolute left-[-20px] top-[40%]  bg-teal-600 text-white px-1 text-center py-2  hover:bg-blue-950 hover:text-white"

          >
            <FaArrowLeft size={15} />
          </button>

          {/* Right Arrow */}
          <button
            className="absolute right-[-20px] top-[40%]  bg-teal-600 text-white px-1 text-center py-2  hover:bg-blue-950 hover:text-white"

          >
            <FaArrowRight size={15} />
          </button>

        </div>
           {/*  Slider indicators  */}
           <div class=" flex  space-x-3  justify-center mt-5">

<button type="button" class="w-3 h-3 rounded-full bg-sky-400 hover:bg-teal-600" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
<button type="button" class="w-3 h-3 rounded-full bg-sky-400 hover:bg-teal-600" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
<button type="button" class="w-3 h-3 rounded-full bg-sky-400 hover:bg-teal-600" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
<button type="button" class="w-3 h-3 rounded-full bg-sky-400 hover:bg-teal-600" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
</div>
      </div>
      {/* men new arrivials section end */}

      {/* children new arrivials section start */}
      <div className="card-section mt-10 ">
        <h2 className='uppercase italic font-extrabold text-2xl mb-4 text-center text-blue-950'>Kids Collection</h2>
        <div className="mx-auto mt-7 w-4/5 lg:w-5/6 max-w-screen-xl grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-4 md:gap-y-5 justify-items-center relative">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <button
            className="absolute left-[-20px] top-[40%]  bg-teal-600 text-white px-1 text-center py-2  hover:bg-blue-950 hover:text-white"

          >
            <FaArrowLeft size={15} />
          </button>

          {/* Right Arrow */}
          <button
            className="absolute right-[-20px] top-[40%]  bg-teal-600 text-white px-1 text-center py-2  hover:bg-blue-950 hover:text-white"

          >
            <FaArrowRight size={15} />
          </button>
        </div>
           {/*  Slider indicators  */}
           <div class=" flex  space-x-3  justify-center mt-5">

<button type="button" class="w-3 h-3 rounded-full bg-sky-400 hover:bg-teal-600" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
<button type="button" class="w-3 h-3 rounded-full bg-sky-400 hover:bg-teal-600" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
<button type="button" class="w-3 h-3 rounded-full bg-sky-400 hover:bg-teal-600" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
<button type="button" class="w-3 h-3 rounded-full bg-sky-400 hover:bg-teal-600" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
</div>
      </div>
      {/* children new arrivials section end */}
    </section>




  </>
  )
}

export default HomePage