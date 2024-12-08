import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addstock = () => {
  const [data, setData] = useState({
    product_color: "",
    size: "",
    movement_type: "",
    quantity: "",

    notes: ""
  });
  
  const [sizes, setSize] = useState([]); // State to store size options
  const [colors, setColor] = useState([]); // State to store product color options
  const navigate = useNavigate(); 

  // Fetch the stock options from the API (which include color and size)
  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const colorresponse = await axios.get('http://127.0.0.1:8000/comp/allproductcolor/'); // Adjust the URL as needed
        const sizeresponse = await axios.get('http://127.0.0.1:8000/comp/allSize/'); // Adjust the URL as needed
        setSize(sizeresponse.data); // Assuming the response contains a list of stocks
        setColor(colorresponse.data); // Assuming the response contains a list of stocks
      } catch (error) {
        toast.error("Failed to fetch data");
      }
    };
    
    fetchStockData();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setData((items) => ({
      ...items,
      [name]: value,
    }));
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("product_color", data.product_color);
    formData.append("size", data.size);
    formData.append("movement_type", data.movement_type);
    formData.append("quantity", data.quantity);

    formData.append("notes", data.notes);

    try {
      const response = await axios.post('http://127.0.0.1:8000/stock/createStock/', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Stock added successfully");
      navigate('/etrendadmin/addstock'); // Redirect after submission
      setData({ 
        product_color: "",
        size: "",
        movement_type: "",
        quantity: "",

        notes: ""
      }); // Clear the form after successful submission
    } catch (err) {
      toast.error("Stock creation failed");
    }
  };

  return (
    <>
      <ToastContainer theme='colored' position='top-center' />
      <div className="flex justify-between mx-20 mt-5 items-center" >
        <h1 className='font-semibold text-3xl'>Add Stock</h1>
        <h2 className='text-sm text-gray-600 font-medium'>Dashboard / <span className='text-blue-500'>Add Stock</span></h2>
      </div>
      <div className="flex flex-col gap-9 mt-5 mx-60">
        <div className="rounded-sm border border-stroke bg-white shadow-md" >
          <div className="border-b-2 border-stroke pb-5">
            <h3 className="font-medium text-[#2a3140] text-center text-xl mt-5">
              Add Stock
            </h3>
          </div>
          <form action="#" className='px-20' onSubmit={onSubmit}>
            <div className="py-6 mx-auto">

              {/* Dropdown for Product Color */}
              <div className="mb-4">
                <label htmlFor='product_color' className="mb-3 block text-sm font-medium text-[#2a3140]">
                  Product Color <span className="text-red-600">*</span>
                </label>
                <select
                  name="product_color"
                  value={data.product_color}
                  onChange={handleChange}
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none"
                >
                  <option value="">Select Color</option>
                  {colors.map((color) => (
                    <option key={color.id} value={color.id}>
                     {color.product_color_info}{/* Assuming each color has `color_name` */}
                    </option>
                  ))}
                </select>
              </div>

              {/* Dropdown for Size */}
              <div className="mb-4">
                <label htmlFor='size' className="mb-3 block text-sm font-medium text-[#2a3140]">
                  Size <span className="text-red-600">*</span>
                </label>
                <select
                  name="size"
                  value={data.size}
                  onChange={handleChange}
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none"
                >
                  <option value="">Select Size</option>
                  {sizes.map((size) => (
                    <option key={size.id} value={size.id}>
                      {size.size_name} {/* Assuming each stock has `size_name` */}
                    </option>
                  ))}
                </select>
              </div>

             {/* Dropdown for Movement Type */}
             <div className="mb-4">
                <label htmlFor='movement_type' className="mb-3 block text-sm font-medium text-[#2a3140]">
                  Movement Type <span className="text-red-600">*</span>
                </label>
                <select
                  name="movement_type"
                  value={data.movement_type}
                  onChange={handleChange}
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none"
                >
                  <option value="">Select Movement Type</option>
                  <option value="In">In</option>
                  <option value="Out">Out</option>
                </select>
              </div>

               {/* Input for Quantity */}
               <div className="mb-4">
                <label htmlFor='quantity' className="mb-3 block text-sm font-medium text-[#2a3140]">
                  Quantity <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={data.quantity}
                  onChange={handleChange}
                  required
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none"
                />
              </div>

              {/* Input for Notes */}
              <div className="mb-4">
                <label htmlFor='notes' className="mb-3 block text-sm font-medium text-[#2a3140]">
                  Notes  <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="notes"
                  value={data.notes}
                  onChange={handleChange}
                  rows="3"
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none"
                />
              </div>


              <button
                type='submit'
                className="flex w-full justify-center rounded bg-[#3c50e0] p-3 font-medium text-white hover:bg-opacity-90"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Addstock;
