import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddSub = () => {
  const[data,setData]=useState({
    title:"",
    category:""

})

const [category, setCategory] = useState([]);

const navigate = useNavigate(); 

 // Fetch the stock options from the API (which include category)
 useEffect(() => {
  const fetchStockData = async () => {
    try {
      const categoryresponse = await axios.get('http://127.0.0.1:8000/product/allCategory/'); // Adjust the URL as needed
      
      setCategory(categoryresponse.data); // Assuming the response contains a list of stocks
    } catch (error) {
      toast.error("Failed to fetch data");
    }
  };
  
  fetchStockData();
}, []);

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
  formData.append("title", data.title);
  formData.append("category", data.category)

    try{
        const response = await axios.post('http://127.0.0.1:8000/product/createsubCategory/', formData, {
          headers: {
            "Content-Type": "multipart/form-data",  
          },
        });
      

        toast.success("Sub Category added successfully");
        navigate('/etrendadmin/addsub');  // Assuming you want to redirect after submission
        setData({ title: "" , category:""});  // Clear the form after successful submission
    
    }
    catch (err) {
      toast.error("Sub Category creation failed", err);
    }

}
  return (
    <>
     <ToastContainer theme='colored' position='top-center'/>
    <div className="flex justify-between mx-20 mt-5 items-center" >
    <h1 className='font-semibold text-3xl'>Add Sub Category</h1>
    <h2 className='text-sm text-gray-600 font-medium'>Dashboard / <span className='text-blue-500'>Add Sub Category</span></h2>
  </div>
          <div class="flex flex-col gap-9 mt-5 mx-60">
           <div class="rounded-sm border border-stroke bg-white shadow-md" >
                  <div class="border-b-2 border-stroke pb-5">
                    <h3 class="font-medium text-[#2a3140] dark:text-white text-center text-xl mt-5">
                      Add Sub Category
                    </h3>
                  </div>
                  <form action="#" className='px-20' onSubmit={onSubmit}>
                    <div class="py-6 mx-auto">
                      

                      <div class="mb-4">
                        <label htmlFor='title'
                          class="mb-3 block text-sm font-medium text-[#2a3140] dark:text-white">
                          Title <span class="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter a size name"
                          name='title'
                          value={data.title}
                          class="w-full  rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-[#e2e8f0] active:border-[#e2e8f0] disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-[#e2e8f0]"
                          onChange={handleChange} />
                      </div>
                       {/* Dropdown for Category*/}
              <div className="mb-4">
                <label htmlFor='category' className="mb-3 block text-sm font-medium text-[#2a3140]">
                  Category<span className="text-red-600">*</span>
                </label>
                <select
                  name="category"
                  value={data.category}
                  onChange={handleChange}
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none"
                >
                  <option value="">Select Category</option>
                  {category.map((category) => (
                    <option key={category.id} value={category.id}>
                     {category.title}{/* Assuming each category has `title` */}
                    </option>
                  ))}
                </select>
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

export default AddSub