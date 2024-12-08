import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
     <nav className="bg-[#1c2434] h-screen fixed top-0 left-0 min-w-[250px] py-6 px-4 font-[sans-serif] z-50">
      <div className="relative">
        <Link to="javascript:void(0)"><img src="/img/logo.jpg" alt="logo" className='w-[100px] h-[100px] rounded-full' />
        </Link>

        <div
          className="absolute -right-6 top-2 h-6 w-6 p-[6px] cursor-pointer bg-[#007bff] flex items-center justify-center rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" className="w-4 h-4" viewBox="0 0 55.752 55.752">
            <path
              d="M43.006 23.916a5.36 5.36 0 0 0-.912-.727L20.485 1.581a5.4 5.4 0 0 0-7.637 7.638l18.611 18.609-18.705 18.707a5.398 5.398 0 1 0 7.634 7.635l21.706-21.703a5.35 5.35 0 0 0 .912-.727 5.373 5.373 0 0 0 1.574-3.912 5.363 5.363 0 0 0-1.574-3.912z"
              data-original="#000000" />
          </svg>
        </div>
      </div>

      <div className="overflow-auto py-6  mt-4 max-h-96">
        <ul className="space-y-1">
          <li>
            <Link to="javascript:void(0)"
              className="text-white font-bold text-[15px] flex items-center hover:bg-[#333a48] rounded px-4 py-3 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-4"
                viewBox="0 0 512 512">
                <path
                  d="M197.332 170.668h-160C16.746 170.668 0 153.922 0 133.332v-96C0 16.746 16.746 0 37.332 0h160c20.59 0 37.336 16.746 37.336 37.332v96c0 20.59-16.746 37.336-37.336 37.336zM37.332 32A5.336 5.336 0 0 0 32 37.332v96a5.337 5.337 0 0 0 5.332 5.336h160a5.338 5.338 0 0 0 5.336-5.336v-96A5.337 5.337 0 0 0 197.332 32zm160 480h-160C16.746 512 0 495.254 0 474.668v-224c0-20.59 16.746-37.336 37.332-37.336h160c20.59 0 37.336 16.746 37.336 37.336v224c0 20.586-16.746 37.332-37.336 37.332zm-160-266.668A5.337 5.337 0 0 0 32 250.668v224A5.336 5.336 0 0 0 37.332 480h160a5.337 5.337 0 0 0 5.336-5.332v-224a5.338 5.338 0 0 0-5.336-5.336zM474.668 512h-160c-20.59 0-37.336-16.746-37.336-37.332v-96c0-20.59 16.746-37.336 37.336-37.336h160c20.586 0 37.332 16.746 37.332 37.336v96C512 495.254 495.254 512 474.668 512zm-160-138.668a5.338 5.338 0 0 0-5.336 5.336v96a5.337 5.337 0 0 0 5.336 5.332h160a5.336 5.336 0 0 0 5.332-5.332v-96a5.337 5.337 0 0 0-5.332-5.336zm160-74.664h-160c-20.59 0-37.336-16.746-37.336-37.336v-224C277.332 16.746 294.078 0 314.668 0h160C495.254 0 512 16.746 512 37.332v224c0 20.59-16.746 37.336-37.332 37.336zM314.668 32a5.337 5.337 0 0 0-5.336 5.332v224a5.338 5.338 0 0 0 5.336 5.336h160a5.337 5.337 0 0 0 5.332-5.336v-224A5.336 5.336 0 0 0 474.668 32zm0 0"
                  data-original="#000000" />
              </svg>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <button type="button" className="flex items-center w-full px-4 py-3 text-base text-white transition duration-75 rounded-lg group hover:bg-[#333a48] dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <svg class="flex-shrink-0 w-5 h-5  mr-4 text-white transition duration-75   dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
                  <span className="flex-1  text-left rtl:text-right whitespace-nowrap">Product</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-example" className="hidden py-2 space-y-2 ">
                  <li>
                     <Link to="/etrendadmin/addproduct" className="flex items-center w-full p-2 text-[#b2babb] transition duration-75 rounded-lg pl-11 group  dark:text-white  hover:text-white">Add Product</Link>
                  </li>
                  <li>
                     <Link to="/etrendadmin/allproduct" className="flex items-center w-full p-2 text-[#b2babb] transition duration-75 rounded-lg pl-11 group  dark:text-white  hover:text-white">Product List</Link>
                  </li>
                 
            </ul>
         </li>
          <li>
          <button type="button" className="flex items-center w-full px-4 py-3 text-base text-white transition duration-75 rounded-lg group hover:bg-[#333a48] dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example1" data-collapse-toggle="dropdown-example1">
            <svg class="flex-shrink-0 w-5 h-5  mr-4 text-white transition duration-75   dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
                  <span className="flex-1  text-left rtl:text-right whitespace-nowrap">Category</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-example1" className="hidden py-2 space-y-2 ">
                  <li>
                     <Link to="/etrendadmin/addcategory" className="flex items-center w-full p-2 text-[#b2babb] transition duration-75 rounded-lg pl-11 group  dark:text-white  hover:text-white">Add Category</Link>
                  </li>
                  <li>
                     <Link to="/etrendadmin/allcategory" className="flex items-center w-full p-2 text-[#b2babb] transition duration-75 rounded-lg pl-11 group  dark:text-white  hover:text-white">Category List</Link>
                  </li>
                 
            </ul>
            
          </li>
          <li>
          <button type="button" className="flex items-center w-full px-4 py-3 text-base text-white transition duration-75 rounded-lg group hover:bg-[#333a48] dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example2" data-collapse-toggle="dropdown-example2">
            <svg class="flex-shrink-0 w-5 h-5  mr-4 text-white transition duration-75   dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
                  <span className="flex-1  text-left rtl:text-right whitespace-nowrap font-medium">Sub Category</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-example2" className="hidden py-2 space-y-2 ">
                  <li>
                     <Link to="/etrendadmin/addsub" className="flex items-center w-full p-2 text-[#b2babb] transition duration-75 rounded-lg pl-11 group  dark:text-white  hover:text-white">Add Sub Category</Link>
                  </li>
                  <li>
                     <Link to="/etrendadmin/allsub" className="flex items-center w-full p-2 text-[#b2babb] transition duration-75 rounded-lg pl-11 group  dark:text-white  hover:text-white">Sub Category List</Link>
                  </li>
                 
            </ul>
       
          </li>
          <li>
            <button type="button" className="flex items-center w-full px-4 py-3 text-base text-white transition duration-75 rounded-lg group hover:bg-[#333a48] dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example3" data-collapse-toggle="dropdown-example3">
            <svg class="flex-shrink-0 w-5 h-5  mr-4 text-white transition duration-75   dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
                  <span className="flex-1  text-left rtl:text-right whitespace-nowrap">Color</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-example3" className="hidden py-2 space-y-2 ">
                  <li>
                     <Link to="/etrendadmin/addcolor" className="flex items-center w-full p-2 text-[#b2babb] transition duration-75 rounded-lg pl-11 group  dark:text-white  hover:text-white">Add Color</Link>
                  </li>
                  <li>
                     <Link to="/etrendadmin/allcolor" className="flex items-center w-full p-2 text-[#b2babb] transition duration-75 rounded-lg pl-11 group  dark:text-white  hover:text-white">Color List</Link>
                  </li>
                 
            </ul>
         </li>
          <li>
          <button type="button" className="flex items-center w-full px-4 py-3 text-base text-white transition duration-75 rounded-lg group hover:bg-[#333a48] dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example4" data-collapse-toggle="dropdown-example4">
            <svg class="flex-shrink-0 w-5 h-5  mr-4 text-white transition duration-75   dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
                  <span className="flex-1  text-left rtl:text-right whitespace-nowrap">Product Color</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-example4" className="hidden py-2 space-y-2 ">
                  <li>
                     <Link to="/etrendadmin/addpcolor" className="flex items-center w-full p-2 text-[#b2babb] transition duration-75 rounded-lg pl-11 group  dark:text-white  hover:text-white">Add Product Color</Link>
                  </li>
                  <li>
                     <Link to="/etrendadmin/allpcolor" className="flex items-center w-full p-2 text-[#b2babb] transition duration-75 rounded-lg pl-11 group  dark:text-white  hover:text-white">Product Color List</Link>
                  </li>
                 
            </ul>
            
          </li>
          <li>
          <button type="button" className="flex items-center w-full px-4 py-3 text-base text-white transition duration-75 rounded-lg group hover:bg-[#333a48] dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example5" data-collapse-toggle="dropdown-example5">
            <svg class="flex-shrink-0 w-5 h-5  mr-4 text-white transition duration-75   dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
                  <span className="flex-1  text-left rtl:text-right whitespace-nowrap">Product Image</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-example5" className="hidden py-2 space-y-2 ">
                  <li>
                     <Link to="/etrendadmin/addpimage" className="flex items-center w-full p-2 text-[#b2babb] transition duration-75 rounded-lg pl-11 group  dark:text-white  hover:text-white">Add Product Image</Link>
                  </li>
                  <li>
                     <Link to="/etrendadmin/allpimage" className="flex items-center w-full p-2 text-[#b2babb] transition duration-75 rounded-lg pl-11 group  dark:text-white  hover:text-white">Product Image List</Link>
                  </li>
                 
            </ul>
       
          </li>
          <li>
          <button type="button" className="flex items-center w-full px-4 py-3 text-base text-white transition duration-75 rounded-lg group hover:bg-[#333a48] dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example6" data-collapse-toggle="dropdown-example6">
            <svg class="flex-shrink-0 w-5 h-5  mr-4 text-white transition duration-75   dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
                  <span className="flex-1  text-left rtl:text-right whitespace-nowrap">Size</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-example6" className="hidden py-2 space-y-2 ">
                  <li>
                     <Link to="/etrendadmin/addsize" className="flex items-center w-full p-2 text-[#b2babb] transition duration-75 rounded-lg pl-11 group  dark:text-white  hover:text-white">Add Size</Link>
                  </li>
                  <li>
                     <Link to="/etrendadmin/allsize" className="flex items-center w-full p-2 text-[#b2babb] transition duration-75 rounded-lg pl-11 group  dark:text-white  hover:text-white">Size List</Link>
                  </li>
                 
            </ul>
       
          </li>
          <li>
          <button type="button" className="flex items-center w-full px-4 py-3 text-base text-white transition duration-75 rounded-lg group hover:bg-[#333a48] dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example8" data-collapse-toggle="dropdown-example8">
            <svg class="flex-shrink-0 w-5 h-5  mr-4 text-white transition duration-75   dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
                  <span className="flex-1  text-left rtl:text-right whitespace-nowrap">Stock</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-example8" className="hidden py-2 space-y-2 ">
                  <li>
                     <Link to="/etrendadmin/addstock" className="flex items-center w-full p-2 text-[#b2babb] transition duration-75 rounded-lg pl-11 group  dark:text-white  hover:text-white">Add Stock</Link>
                  </li>
                  <li>
                     <Link to="/etrendadmin/allstock" className="flex items-center w-full p-2 text-[#b2babb] transition duration-75 rounded-lg pl-11 group  dark:text-white  hover:text-white">Stock List</Link>
                  </li>
                 
            </ul>
       
          </li>
          <li>
          <button type="button" className="flex items-center w-full px-4 py-3 text-base text-white transition duration-75 rounded-lg group hover:bg-[#333a48] dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example7" data-collapse-toggle="dropdown-example7">
            <svg class="flex-shrink-0 w-5 h-5  mr-4 text-white transition duration-75   dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
                  <span className="flex-1  text-left rtl:text-right whitespace-nowrap">Order</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-example7" className="hidden py-2 space-y-2 ">
                
                  <li>
                     <Link to="/etrendadmin/allproduct" className="flex items-center w-full p-2 text-[#b2babb] transition duration-75 rounded-lg pl-11 group  dark:text-white  hover:text-white">Order List</Link>
                  </li>
                 
            </ul>
          </li>
          <li>
            <Link to="javascript:void(0)"
              className="text-white font-bold hover:text-blue-600 text-[15px] flex items-center hover:bg-white rounded px-4 py-3 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-4"
                viewBox="0 0 193.769 193.769">
                <path
                  d="m149.203 41.104-9.348 12.009c20.15 15.679 30.201 41.063 26.234 66.253-2.906 18.484-12.838 34.73-27.964 45.748-15.131 11.012-33.64 15.488-52.124 12.567-38.157-6.008-64.32-41.938-58.322-80.098C30.585 79.097 40.52 62.85 55.648 51.835c13.208-9.615 28.991-14.233 45.086-13.317L87.579 52.319l9.759 9.313 20.766-21.801.005.008 9.303-9.769-9.752-9.303-.005.003L95.862 0l-9.31 9.769 14.2 13.525c-19.303-.913-38.21 4.702-54.059 16.242C28.28 52.943 16.19 72.717 12.65 95.221c-7.302 46.445 24.54 90.184 70.985 97.493a86.181 86.181 0 0 0 13.434 1.055c17.89 0 35.273-5.623 50.011-16.356 18.415-13.409 30.503-33.183 34.043-55.682 4.829-30.654-7.403-61.55-31.92-80.627z"
                  data-original="#000000" />
                <path
                  d="M105.24 151.971v-.003h.001v-8.757c10.383-1.159 20.485-7.718 20.485-20.17 0-16.919-15.732-18.859-27.223-20.274-7.347-.878-12.97-1.897-12.97-6.348 0-6.188 8.722-6.855 12.473-6.855 5.567 0 11.507 2.617 13.525 5.957l.586.971 11.542-5.341-.571-1.164c-4.301-8.793-12.009-11.337-17.85-12.364v-7.71H91.723v7.677c-12.582 1.856-20.054 8.839-20.054 18.829 0 16.29 14.791 17.943 25.582 19.153 9.617 1.134 14.094 3.51 14.094 7.469 0 7.563-10.474 8.154-13.685 8.154-7.147 0-14.038-3.566-16.031-8.301l-.495-1.169-12.539 5.316.5 1.169c3.713 8.691 11.725 14.137 22.63 15.425v8.336h13.515z"
                  data-original="#000000" />
              </svg>
              <span>Refunds</span>
            </Link>
          </li>
          <li>
            <Link to="javascript:void(0)"
              className="text-white font-bold hover:text-blue-600 text-[15px] flex items-center hover:bg-white rounded px-4 py-3 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-4"
                viewBox="0 0 512 512">
                <path
                  d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                  data-original="#000000" />
              </svg>
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to="javascript:void(0)"
              className="text-white font-bold hover:text-blue-600 text-[15px] flex items-center hover:bg-white rounded px-4 py-3 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[18px] h-[18px] mr-4"
                viewBox="0 0 6.35 6.35">
                <path
                  d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                  data-original="#000000" />
              </svg>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>

    </>
  )
}

export default Sidebar