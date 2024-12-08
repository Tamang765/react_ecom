import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is imported for the API request
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Editsub = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: '' // Store category ID
  });

  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchSubData = async () => {
      try {
        const categoryresponse = await axios.get('http://127.0.0.1:8000/product/allCategory/'); // Adjust the URL as needed
        setCategory(categoryresponse.data); // Assuming the response contains a list of categories
      } catch (error) {
        toast.error("Failed to fetch categories");
      }
    };
    
    fetchSubData();
  }, []);
  
  useEffect(() => {
    const fetchSubCategory = async () => {
      try {
        let res = await fetch(`http://127.0.0.1:8000/product/updateDeleteSubCategory/${id}/`);
        let subcategory = await res.json();
        setFormData(subcategory);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchSubCategory();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((items) => ({
      ...items,
      [name]: value
    }));
  };

  const updateSubCategory = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const res = await fetch(`http://127.0.0.1:8000/product/updateDeleteSubCategory/${id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        toast.success('Subcategory Updated Successfully');
        // Clear the form
        setFormData({ title: '', category: '' });
        
        setTimeout(() => {
          navigate('/etrendadmin/allsub'); // Navigate after successful update
        }, 2000); // Delay the navigation to allow the toast to be visible
      } else {
        toast.error('Update failed');
      }
    } catch (e) {
      toast.error('Update subcategory failed', e.message);
    }
  };

  return (
    <>
      <ToastContainer theme="colored" position="top-center" />
      <div className="flex justify-between mx-20 mt-5 items-center">
        <h1 className="font-semibold text-3xl">Edit Sub Category</h1>
        <h2 className="text-sm text-gray-600 font-medium">
          Dashboard / <span className="text-blue-500">Edit Sub Category</span>
        </h2>
      </div>
      <div className="flex flex-col gap-9 mt-5 mx-60">
        <div className="rounded-sm border border-stroke bg-white shadow-md">
          <div className="border-b-2 border-stroke pb-5">
            <h3 className="font-medium text-[#2a3140] dark:text-white text-center text-xl mt-5">
              Edit Sub Category
            </h3>
          </div>
          <form className="px-20" onSubmit={updateSubCategory}>
            <div className="py-6 mx-auto">
              {/* Title Input */}
              <div className="mb-4">
                <label htmlFor="title" className="mb-3 block text-sm font-medium text-[#2a3140] dark:text-white">
                  Title <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter a subcategory name"
                  name="title"
                  value={formData.title}
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-[#e2e8f0] active:border-[#e2e8f0] disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white"
                  onChange={handleInputChange}
                />
              </div>

              {/* Dropdown for Category */}
              <div className="mb-4">
                <label htmlFor="category" className="mb-3 block text-sm font-medium text-[#2a3140]">
                  Category <span className="text-red-600">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category} // Category ID is stored here
                  onChange={handleInputChange}
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none"
                >
                  {/* Option to show selected category title */}
                  <option value="">{formData.category ? formData.category.title : "Select a Category"}</option>
                  {category.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
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
};

export default Editsub;
