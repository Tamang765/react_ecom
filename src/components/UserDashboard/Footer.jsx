import { Link } from 'react-router-dom'
import '../../style.css'

const Footer = () => {
  return (
    <footer className="bg-blue-950 shadow-md font-sans tracking-wide relative px-2">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-4 lg:gap-24 gap-y-16 py-4 px-2 mx-auto lg:w-[90%] md:w-[90%] sm:w-[95%] w-[95%] max-w-7xl">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Our Stores</h2>
          <ul className="space-y-4">
            <li>
              <Link to="javascript:void(0)" className="text-white hover:underline text-sm transition-all">Samakhusi</Link>
            </li>
             
          </ul>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <ul className="space-y-4">
            <li>
              <Link to="javascript:void(0)" className="text-white hover:underline text-sm transition-all">Facebook</Link>
            </li>
            <li>
              <Link to="javascript:void(0)" className="text-white hover:underline text-sm transition-all">Tiktok</Link>
            </li>
            <li>
              <Link to="javascript:void(0)" className="text-white hover:underline text-sm transition-all">Instagram</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Info</h2>
          <ul className="space-y-4">
            <li>
              <Link to="javascript:void(0)" className="text-white hover:underline text-sm transition-all">FAQ</Link>
            </li>
           
          </ul>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Our Polices</h2>
          <ul className="space-y-4">
            <li>
              <Link to="javascript:void(0)" className="text-white hover:underline text-sm transition-all">Privacy Policy</Link>
            </li>
            <li>
              <Link to="javascript:void(0)" className="text-white hover:underline text-sm transition-all">Return and Exchange Policy</Link>
            </li>
         
          </ul>
        </div>

        <div className="flex items-center lg:justify-center md:hidden lg:flex">
          <Link to='/'><img src="/img/logo.jpg" alt="logo" className='w-40 rounded-full' /></Link>
        </div>
      </div>

      <hr className="my-4 border-gray-600" />

      
      {/* footer section lower part */}
      <div className="flex justify-between flex-wrap gap-6 pb-4 px-2 mx-auto  max-w-7xl lg:w-[90%] md:w-[90%] sm:w-[95%] w-[95%]">
        {/* <div className="mx-auto w-4/5 lg:w-5/6 max-w-screen-xl grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-4 md:gap-y-5 justify-items-center"></div> */}
        <div className="flex space-x-5">
          <Link to="https://www.facebook.com/profile.php?id=100086199323511" target='_blank' className="text-white transition-all">
          <i class="fa-brands fa-square-facebook text-2xl rotate-animation"></i>
          </Link>
          <Link to="javascript:void(0)" className="text-white  transition-all">
          <i class="fa-brands fa-tiktok text-2xl rotate-animation"></i>
          </Link>
          <Link to="javascript:void(0)" className="text-white  transition-all">
          <i class="fa-brands fa-square-instagram text-2xl rotate-animation"></i>
          </Link>
        </div>

        <p className='font-poppins text-white text-sm'>Copyright © 2024 Eagle Trend. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer