import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import '../../style.css'

const Header = () => {
  // define and assign ref
  const toggleOpenRef = useRef(null);
  const toggleCloseRef = useRef(null);
  const collapseMenuRef = useRef(null);

  // handling events
  useEffect(() => {
    const handleClick = () => {
      if (collapseMenuRef.current.style.display === "block") {
        collapseMenuRef.current.style.display = "none";
      } else {
        collapseMenuRef.current.style.display = "block";
      }
    };

    const toggleOpen = toggleOpenRef.current;
    const toggleClose = toggleCloseRef.current;

    if (toggleOpen) {
      toggleOpen.addEventListener("click", handleClick);
    }
    if (toggleClose) {
      toggleClose.addEventListener("click", handleClick);
    }

    // Clean up the event listeners on unmount
    return () => {
      if (toggleOpen) {
        toggleOpen.removeEventListener("click", handleClick);
      }
      if (toggleClose) {
        toggleClose.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <>

      <div className="head bg-blue-950 h-16 lg:h-10 flex justify-between items-center px-3  md:px-20 lg:px-20 ">
        <div className="empty text-white uppercase text-xs lg:text-sm text-start ">
          <i className="fa-solid fa-location-dot me-2 "></i>
          Samakhusi, <span className="ms-2 md:ms-0">kathmandu</span>

        </div>
        <div className="info text-white ms-0 lg:ms-18 uppercase text-xs text-center">

          up to 40% Off to our favourites
        </div>
        <div className="contact-info text-white text-xs lg:text-sm text-end">
          <Link to="tel:+9779860578585">
            <i class="fa-solid fa-phone me-1"></i>
            <span className="">+977</span> 9860578585</Link>
        </div>

      </div>
      <header className="flex shadow-md py-1 bg-[#d6eaf8] font-[sans-serif] min-h-[70px] tracking-wide relative z-50 ">
        <div className='flex flex-wrap items-center justify-between gap-5 mx-auto  w-full  px-5 md:px-20 '>
          <Link to={'/'}>

            <div className="button-container">
              <button className="brutalist-button openai button-1 rounded-full w-26 h-16 mt-0 lg:mt-2 flex lg:block items-center">
                <div className="openai-logo">
                  <img src="/img/logo.jpg" alt="logo" className='w-12 lg:w-8 rounded-full mx-auto shadow-md shadow-blue-900' />
                </div>
                <div className="button-text mt-1">
                  <span className="text-2xl lg:text-base font-semibold text-teal-600 text-shadow-sm  ms-2 lg:ms-0">Eagle Trend</span>
                </div>
              </button>
            </div>

          </Link>
          <div id="collapseMenu" ref={collapseMenuRef} className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
            <button id="toggleClose" ref={toggleCloseRef} className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
              <i class="fa-solid fa-xmark text-blue-900 text-2xl"></i>
            </button>
            <ul
              className='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:right-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 font-poppins uppercase'>
              <li className='mb-6 hidden max-lg:block'>
                <Link to={"/"} className='flex space-x-5 content-center'><img src="/img/logo.jpg" alt="logo" className='w-16 rounded-full' /><h2 className="text-lg font-semibold text-teal-600 text-shadow-sm ms-2 lg:ms-0 e-text">E-Trend</h2>
                </Link>
              </li>
              <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3 f'>
                <Link to='/'
                  className='hover:text-primary text-blue-500 block font-[500] text-[13px]'>Home</Link>
              </li>
              {/* <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><Link to='/mens'
                className='hover:text-primary text-[#1F1F1F] block font-medium text-[13px]'>Mens</Link>
                
              </li> */}
              <li class='group max-lg:border-b border-gray-300 max-lg:py-3 px-3 relative'>
                <Link to='/mens'
                  class='hover:text-primary  text-[#1F1F1F] block font-medium text-[13px]'>Men
                </Link>
                <ul
                  class='absolute top-5 max-lg:top-8 left-[-30px] md:left-0 z-50  shadow-lg bg-teal-600 text-white max-h-0 overflow-hidden min-w-[450px] lg:min-w-[650px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500 flex flex-wrap justify-evenly'>
                  <li class=''>
                    <Link to=''
                      class=' font-medium text-[15px]'>

                      New Arrivals
                    </Link>
                    <ul className="mt-1 text-[12px]">
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/mens">T-shirts</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/mens">Shirts</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/mens">Pant</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/mens">Trouser</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/mens">Jogger</Link></li>
                    </ul>
                  </li>
                  <li class=''>
                    <Link to=''
                      class='  font-medium text-[15px]'>

                      Tops
                    </Link>
                    <ul className="mt-1 text-[12px] ">
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/mens">T-shirts</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/mens">Shirts</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/mens">Sweater</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/mens">Hoddie</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/mens">Jackets</Link></li>
                    </ul>

                  </li>
                  <li class=''>
                    <Link to='javascript:void(0)'
                      class=' font-medium text-[15px]'>

                      Bottom
                    </Link>
                    <ul className="mt-1 text-[12px] ">
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/mens">Pants</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/mens">Jeans</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/mens">Jogger</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/mens">Shorts</Link></li>

                    </ul>

                  </li>
                  <li class=''>
                    <Link to=''
                      class=' font-medium text-[15px]'>

                      Shoes
                    </Link>
                    <ul className="mt-1 text-[12px] ">
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/mens">Leather</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/mens">Addidas</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/mens">Nike</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/mens">Puma</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/mens">Sports</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class='group max-lg:border-b border-gray-300 max-lg:py-3 px-3 relative'>
                <Link to='/womens'
                  class='hover:text-primary  text-[#1F1F1F] block font-medium text-[13px]'>Women
                </Link>
                <ul
                  class='absolute top-5 max-lg:top-8 left-0 lg:left-[-70px] z-50  shadow-lg bg-teal-600 text-white max-h-0 overflow-hidden min-w-[450px] lg:min-w-[650px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500 flex flex-wrap justify-evenly'>
                  <li class=''>
                    <Link to=''
                      class=' font-medium text-[15px]'>

                      New Arrivals
                    </Link>
                    <ul className="mt-1 text-[12px]">
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/womens">Kurta</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/womens">Shirts</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/womens">Pant</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/womens">Trouser</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/womens">Jogger</Link></li>
                    </ul>
                  </li>
                  <li class=''>
                    <Link to='/womens'
                      class='  font-medium text-[15px]'>

                      Tops
                    </Link>
                    <ul className="mt-1 text-[12px] ">
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/womens">T-shirts</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/womens">Shirts</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/womens">Sweater</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/womens">Hoddie</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/womens">Jackets</Link></li>
                    </ul>

                  </li>
                  <li class=''>
                    <Link to='/womensjavascript:void(0)'
                      class=' font-medium text-[15px]'>

                      Bottom
                    </Link>
                    <ul className="mt-1 text-[12px] ">
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/womens">Pants</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/womens">Jeans</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/womens">Jogger</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/womens">Shorts</Link></li>

                    </ul>

                  </li>
                  <li class=''>
                    <Link to=''
                      class=' font-medium text-[15px]'>

                      Shoes
                    </Link>
                    <ul className="mt-1 text-[12px] ">
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/womens">Leather</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/womens">Addidas</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/womens">Nike</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/womens">Puma</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/womens">Sports</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class='group max-lg:border-b border-gray-300 max-lg:py-3 px-3 relative'>
                <Link to='/kids'
                  class='hover:text-primary  text-[#1F1F1F] block font-medium text-[13px]'>Kids
                </Link>
                <ul
                  class='absolute top-5 max-lg:top-8 left-0 lg:left-[-165px] z-50  shadow-lg bg-teal-600 text-white max-h-0 overflow-hidden min-w-[450px] lg:min-w-[650px]  group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500 flex flex-wrap justify-evenly'>
                  <li class=''>
                    <Link to=''
                      class=' font-medium text-[15px]'>

                      New Arrivals
                    </Link>
                    <ul className="mt-1 text-[12px]">
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/kids">T-shirts</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/kids">Shirts</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/kids">Pant</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/kids">Trouser</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/kids">Jogger</Link></li>
                    </ul>
                  </li>
                  <li class=''>
                    <Link to=''
                      class='  font-medium text-[15px]'>

                      Tops
                    </Link>
                    <ul className="mt-1 text-[12px] ">
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/kids">T-shirts</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/kids">Shirts</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/kids">Sweater</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/kids">Hoddie</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/kids">Jackets</Link></li>
                    </ul>

                  </li>
                  <li class=''>
                    <Link to='javascript:void(0)'
                      class=' font-medium text-[15px]'>

                      Bottom
                    </Link>
                    <ul className="mt-1 text-[12px] ">
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/kids">Pants</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/kids">Jeans</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/kids">Jogger</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/kids">Shorts</Link></li>

                    </ul>

                  </li>
                  <li class=''>
                    <Link to=''
                      class=' font-medium text-[15px]'>

                      Shoes
                    </Link>
                    <ul className="mt-1 text-[12px] ">
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/kids">Leather</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/kids">Addidas</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/kids">Nike</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/kids">Puma</Link></li>
                      <li className="py-1 hover:underline hover:cursor-pointer"><Link to="/kids">Sports</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><Link to='/sale'
                className='hover:text-primary text-[#1F1F1F] block font-medium text-[13px]'>Sale</Link>
              </li>
              <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><Link to='clearance'
                className='hover:text-primary text-[#1F1F1F] block font-medium text-[13px]'>Clearance</Link>
              </li>

            </ul>
          </div>

          {/* menu for larger screen */}
          <div className='flex max-lg:ml-auto space-x-2 md:space-x-5 items-center '>
            <Link to={'/cart'}>
              <i class="fa-solid fa-cart-shopping text-blue-900 text-2xl"></i>
            </Link>
            <Link to={'/login'}
              className='text-xs text-primary rounded-full transition-all ease-in-out duration-300 hover:text-btn-color'>

              <i class="fa-solid fa-user text-blue-900 text-2xl"></i>
            </Link>
            {/* <Link to={'register'}
              className='text-xs text-primary rounded-full transition-all ease-in-out duration-300 hover:text-btn-color hidden lg:block'>
              <i class="fa-solid fa-user-plus text-blue-900 text-xl"></i>
            </Link> */}


            <button id="toggleOpen" className='lg:hidden' ref={toggleOpenRef}>
              <i class="fa-solid fa-bars text-blue-900 text-2xl"></i>
            </button>
          </div>
        </div>
      </header>

    </>

  );
};

export default Header;
