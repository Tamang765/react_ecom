import React from 'react'
import { Carousel } from 'flowbite-react';
const CarouselComp = () => {
  return (
    <>

      <div className="h-80 sm:h-80 lg:h-96 xl:h-96 2xl:h-96 mx-auto md:max-w-screen-xl py-2 ">
      <Carousel rounded>
          <img src="/img/cover.png" alt="..." className='h-80 sm:h-80 lg:h-96 xl:h-96 2xl:h-96 mx-auto md:max-w-screen-xl'/>
        <img src="/img/download.png" alt="..." className="h-80 sm:h-80 lg:h-96 xl:h-96 2xl:h-96 mx-auto md:max-w-screen-xl"/>
        <img src="/img/cover.png" alt="..." className="h-80 sm:h-80 lg:h-96 xl:h-96 2xl:h-96 mx-auto md:max-w-screen-xl"/>
        <img src="/img/logo.jpg" alt="..." className="h-80 sm:h-80 lg:h-96 xl:h-96 2xl:h-96 mx-auto md:max-w-screen-xl"/>
        <img src="/img/cover.png" alt="..." className="h-80 sm:h-80 lg:h-96 xl:h-96 2xl:h-96 mx-auto md:max-w-screen-xl"/>
      </Carousel>
    </div>



    </>
  )
}

export default CarouselComp