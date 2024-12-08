import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addproduct = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    Brand: "",
    subcategory: "",
    price: "",
    discounted_price: "",
    is_slider: false,
    is_featured: false,
  });

  const navigate = useNavigate();

  const [subcategory, setSubCategory] = useState([]);
  // Fetch the stock options from the API (which include subcategory)
  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const subcategoryresponse = await axios.get('http://127.0.0.1:8000/product/allsubCategory/'); // Adjust the URL as needed

        setSubCategory(subcategoryresponse.data); // Assuming the response contains a list of stocks
      } catch (error) {
        toast.error("Failed to fetch data");
      }
    };

    fetchStockData();
  }, []);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setData((items) => ({
      ...items,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(data)
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("Brand", data.Brand);
    formData.append("subcategory", data.subcategory);
    formData.append("price", data.price);
    formData.append("discounted_price", data.discounted_price);
    formData.append("is_slider", data.is_slider);
    formData.append("is_featured", data.is_featured);

    try {
      await axios.post('http://127.0.0.1:8000/product/createProduct/', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Product added successfully");
      navigate('/etrendadmin/addproduct'); // Redirect after submission
      setData({ // Clear the form after successful submission
        title: "",
        description: "",
        Brand: "",
        subcategory: "",
        price: "",
        discounted_price: "",
        is_slider: false,
        is_featured: false,
      });
    } catch (err) {
      toast.error("Product creation failed: " + err.message);
    }
  };

  return (
    <>
      <ToastContainer theme='colored' position='top-center' />
      <div className="flex justify-between mx-20 mt-5 items-center">
        <h1 className='font-semibold text-3xl'>Add Product</h1>
        <h2 className='text-sm text-gray-600 font-medium'>Dashboard / <span className='text-blue-500'>Add Product</span></h2>
      </div>
      <div className="flex flex-col gap-9 mt-5 mx-60">
        <div className="rounded-sm border border-stroke bg-white shadow-md">
          <div className="border-b-2 border-stroke pb-5">
            <h3 className="font-medium text-[#2a3140] dark:text-white text-center text-xl mt-5">
              Add Product
            </h3>
          </div>
          <form className='px-20' onSubmit={onSubmit}>
            <div className="py-6 mx-auto">
              {/* Title Input */}
              <div className="mb-4">
                <label htmlFor='title' className="mb-3 block text-sm font-medium text-[#2a3140] dark:text-white">
                  Title <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter product title"
                  name='title'
                  value={data.title}
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-[#e2e8f0] active:border-[#e2e8f0] disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-[#e2e8f0]"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Description Input */}
              <div className="mb-4">
                <label htmlFor='description' className="mb-3 block text-sm font-medium text-[#2a3140] dark:text-white">
                  Description <span className="text-red-600">*</span>
                </label>
                <textarea
                  placeholder="Enter product description"
                  name='description'
                  value={data.description}
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-[#e2e8f0] active:border-[#e2e8f0] disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-[#e2e8f0]"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Brand Input */}
              <div className="mb-4">
                <label htmlFor='Brand' className="mb-3 block text-sm font-medium text-[#2a3140] dark:text-white">
                  Brand <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter brand name"
                  name='Brand'
                  value={data.Brand}
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-[#e2e8f0] active:border-[#e2e8f0] disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-[#e2e8f0]"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Subcategory Input */}
              <div className="mb-4">
                <label htmlFor='subcategory' className="mb-3 block text-sm font-medium text-[#2a3140] dark:text-white">
                  Subcategory <span className="text-red-600">*</span>
                </label>
                <select
                  name="subcategory"
                  value={data.subcategory}
                  onChange={handleChange}
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none"
                >
                  <option value="">Select Category</option>
                  {subcategory.map((subcategory) => (
                    <option key={subcategory.id} value={subcategory.id}>
                      {subcategory.title} ({subcategory.category_title})
                    </option>
                  ))}
                </select>

              </div>

              {/* Price Input */}
              <div className="mb-4">
                <label htmlFor='price' className="mb-3 block text-sm font-medium text-[#2a3140] dark:text-white">
                  Price <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter product price"
                  name='price'
                  value={data.price}
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-[#e2e8f0] active:border-[#e2e8f0] disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-[#e2e8f0]"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Discounted Price Input */}
              <div className="mb-4">
                <label htmlFor='discounted_price' className="mb-3 block text-sm font-medium text-[#2a3140] dark:text-white">
                  Discounted Price
                </label>
                <input
                  type="number"
                  placeholder="Enter discounted price"
                  name='discounted_price'
                  value={data.discounted_price}
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-[#e2e8f0] active:border-[#e2e8f0] disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-[#e2e8f0]"
                  onChange={handleChange}
                />
              </div>

              {/* Is Slider Checkbox */}
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  name='is_slider'
                  checked={data.is_slider}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor='is_slider' className="text-sm font-medium text-[#2a3140] dark:text-white">Is Slider</label>
              </div>

              {/* Is Featured Checkbox */}
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  name='is_featured'
                  checked={data.is_featured}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor='is_featured' className="text-sm font-medium text-[#2a3140] dark:text-white">Is Featured</label>
              </div>

              {/* Submit Button */}
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

export default Addproduct;
