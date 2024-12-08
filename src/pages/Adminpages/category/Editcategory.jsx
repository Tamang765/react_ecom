import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Editcategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: ''
  });

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        let res = await fetch(`http://127.0.0.1:8000/product/updateDeleteCategory/${id}/`);
        let category = await res.json();
        setFormData(category);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchCategory();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((items) => ({
      ...items,
      [name]: value
    }));
  };

  const updateCategory = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const res = await fetch(`http://127.0.0.1:8000/product/updateDeleteCategory/${id}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        toast.success('Category Updated Successfully');
        // Clear the form
        setFormData({ title: '' });
        
        setTimeout(() => {
          navigate('/etrendadmin/allcategory'); // Navigate after successful update
        }, 2000); // Delay the navigation to allow the toast to be visible
      } else {
        toast.error('Update failed');
      }
    } catch (e) {
      toast.error('Update category failed', e.message);
    }
  };

  return (
    <>
      <ToastContainer theme="colored" position="top-center" />
      <div className="flex justify-between mx-20 mt-5 items-center">
        <h1 className="font-semibold text-3xl">Edit Category</h1>
        <h2 className="text-sm text-gray-600 font-medium">
          Dashboard / <span className="text-blue-500">Edit Category</span>
        </h2>
      </div>
      <div className="flex flex-col gap-9 mt-5 mx-60">
        <div className="rounded-sm border border-stroke bg-white shadow-md">
          <div className="border-b-2 border-stroke pb-5">
            <h3 className="font-bold text-[#2a3140] dark:text-white text-center text-xl mt-5">
              Edit Category
            </h3>
          </div>
          <form className="px-20" onSubmit={updateCategory}>
            <div className="py-6 mx-auto">
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="mb-3 block text-sm font-medium text-[#2a3140] dark:text-white"
                >
                  Category Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter a category name"
                  name="title"
                  value={formData.title}
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-[#e2e8f0] active:border-[#e2e8f0] dark:border-form-strokedark dark:bg-form-input dark:text-white"
                  onChange={handleInputChange}
                />
              </div>

              <button
                type="submit"
                className="flex w-full justify-center rounded bg-[#3c50e0] p-3 font-medium text-white hover:bg-opacity-90"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Editcategory;
