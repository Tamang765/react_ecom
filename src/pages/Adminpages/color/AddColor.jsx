import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddColor = () => {
  const[data,setData]=useState({
    color_name:"",
    hex_code:""

})

const navigate = useNavigate(); 

function handleChange(event){
    const {name, value} = event.target;
    setData((items)=>({
        ...items,
        [name] : value,
    }))
}

const onSubmit = async(e) =>{
  e.preventDefault();
  const formData = new FormData();
  formData.append("color_name", data.color_name);
  formData.append("hex_code", data.hex_code);

    try{
        const response = await axios.post('http://127.0.0.1:8000/comp/createColor/', formData, {
          headers: {
            "Content-Type": "multipart/form-data",  
          },
        });
      

        toast.success("Color added successfully");
        navigate('/etrendadmin/addcolor');  // Assuming you want to redirect after submission
        setData({ color_name: "", hex_code:"" });  // Clear the form after successful submission
    
    }
    catch (err) {
      toast("Color creation failed", err);
    }

}
  return (
    <>
     <ToastContainer theme='colored' position='top-center'/>
    <div className="flex justify-between mx-20 mt-5 items-center" >
    <h1 className='font-semibold text-3xl'>Add Color</h1>
    <h2 className='text-sm text-gray-600 font-medium'>Dashboard / <span className='text-blue-500'>Add Color</span></h2>
  </div>
          <div class="flex flex-col gap-9 mt-5 mx-60">
           <div class="rounded-sm border border-stroke bg-white shadow-md" >
                  <div class="border-b-2 border-stroke pb-5">
                    <h3 class="font-medium text-[#2a3140] dark:text-white text-center text-xl mt-5">
                      Add Color
                    </h3>
                  </div>
                  <form action="#" className='px-20' onSubmit={onSubmit}>
                    <div class="py-6 mx-auto">
                      

                      <div class="mb-4">
                        <label htmlFor='color_name'
                          class="mb-3 block text-sm font-medium text-[#2a3140] dark:text-white">
                          Color Name <span class="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter a color name"
                          name='color_name'
                          value={data.color_name}
                          class="w-full  rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-[#e2e8f0] active:border-[#e2e8f0] disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-[#e2e8f0]"
                          onChange={handleChange} />
                      </div>
                      <div class="mb-4">
                        <label htmlFor='hex_code'
                          class="mb-3 block text-sm font-medium text-[#2a3140] dark:text-white">
                          Hex Value <span class="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter a color name"
                          name='hex_code'
                          value={data.hex_code}
                          class="w-full  rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-[#e2e8f0] active:border-[#e2e8f0] disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-[#e2e8f0]"
                          onChange={handleChange} />
                      </div>


                      <button
                      type='submit'
                        class="flex w-full justify-center rounded bg-[#3c50e0] p-3 font-medium text-white hover:bg-opacity-90"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
    </>
  )
}

export default AddColor