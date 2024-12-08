import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Editproduct = () => {
  

  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    Brand: "",
    subcategory: "",
    price: "",
    discounted_price: "",
    is_slider: false,
    is_featured: false,
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        let res = await axios.get(`http://127.0.0.1:8000/product/allsubCategory/`);
        setData(res.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchdata();
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let res = await fetch(`http://127.0.0.1:8000/product/updateDeleteProduct/${id}/`);
        let product = await res.json();
        console.log('Fetched Product:', product); // For debugging
        setFormData({
          ...product,
          subcategory: product.subcategory_details ? product.subcategory_details.id.toString() : "",
        });
        console.log('Form Data after setting subcategory:', {
          ...product,
          subcategory: product.subcategory_details ? product.subcategory_details.id.toString() : "",
        }); // Debugging
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchProduct();
  }, [id]);
  

 


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target; // Changed 'event' to 'e'
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  

  const updateProduct = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const res = await fetch(`http://127.0.0.1:8000/product/updateDeleteProduct/${id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        toast.success('Product Updated Successfully');
        // Clear the form
        setFormData({ 
          title: '',
          description: "",
          Brand: "",
          subcategory: "",
          price: "",
          discounted_price: "",
          is_slider: false,
          is_featured: false,
        });
        
        setTimeout(() => {
          navigate('/etrendadmin/allproduct'); // Navigate after successful update
        }, 2000); // Delay the navigation to allow the toast to be visible
      } else {
        toast.error('Update failed');
      }
    } catch (e) {
      toast.error('Update product failed', e.message);
    }
  };

  return (
    <>
        <ToastContainer theme='colored' position='top-center' />
      <div className="flex justify-between mx-20 mt-5 items-center">
        <h1 className='font-semibold text-3xl'>Edit Product</h1>
        <h2 className='text-sm text-gray-600 font-medium'>Dashboard / <span className='text-blue-500'>Edit Product</span></h2>
      </div>
      <div className="flex flex-col gap-9 mt-5 mx-60">
        <div className="rounded-sm border border-stroke bg-white shadow-md">
          <div className="border-b-2 border-stroke pb-5">
            <h3 className="font-medium text-[#2a3140] dark:text-white text-center text-xl mt-5">
              Edit Product
            </h3>
          </div>
          <form className='px-20' onSubmit={updateProduct}>
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
                  value={formData.title}
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-[#e2e8f0] active:border-[#e2e8f0] disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-[#e2e8f0]"
                  onChange={handleInputChange}
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
                  value={formData.description}
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-[#e2e8f0] active:border-[#e2e8f0] disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-[#e2e8f0]"
                  onChange={handleInputChange}
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
                  value={formData.Brand}
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-[#e2e8f0] active:border-[#e2e8f0] disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-[#e2e8f0]"
                  onChange={handleInputChange}
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
                  value={formData.subcategory}
                  onChange={handleInputChange}
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none"
                >
                  <option value="">{formData.subcategory}</option>
                  {data.map((data) => (
                    <option key={data.id} value={data.id}>
                      {data.title} ({data.category_title})
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
                  value={formData.price}
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-[#e2e8f0] active:border-[#e2e8f0] disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-[#e2e8f0]"
                  onChange={handleInputChange}
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
                  value={formData.discounted_price}
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-[#e2e8f0] active:border-[#e2e8f0] disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-[#e2e8f0]"
                  onChange={handleInputChange}
                />
              </div>

              {/* Is Slider Checkbox */}
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  name='is_slider'
                  checked={formData.is_slider}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label htmlFor='is_slider' className="text-sm font-medium text-[#2a3140] dark:text-white">Is Slider</label>
              </div>

              {/* Is Featured Checkbox */}
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  name='is_featured'
                  checked={formData.is_featured}
                  onChange={handleInputChange}
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
  )
}

export default Editproduct