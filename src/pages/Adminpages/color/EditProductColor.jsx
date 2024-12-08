import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProductColor = () => {
  const [data, setData] = useState({
    product: "",
    product_title: "", // For displaying current product title
    color: "",
    color_name: "", // For displaying current color name
    color_img: "",
  });

  const [color, setColor] = useState([]);
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  
  // Fetch color and product options
  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const colorResponse = await axios.get('http://127.0.0.1:8000/comp/allproductcolor/');
        const productResponse = await axios.get('http://127.0.0.1:8000/product/allProduct/');
        setProduct(productResponse.data);
        setColor(colorResponse.data);
      } catch (error) {
        toast.error("Failed to fetch color and product data");
      }
    };
    fetchStockData();
  }, []);

  // Fetch the specific product color to edit
  useEffect(() => {
    const fetchProductColor = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/comp/singleproductcolor/${id}/`);
        setData({
          product: response.data.product.id,
          product_title: response.data.product_title,  // Product title from API
          color: response.data.color.id,
          color_name: response.data.color_name,  // Color name from API
          color_img: response.data.color_img,  // Existing image URL
        });
      } catch (err) {
        toast.error("Error fetching product color data: " + err.message);
      }
    };
    fetchProductColor();
  }, [id]);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (name === "color_img" && files.length > 0) {
      setData((items) => ({
        ...items,
        color_img: files[0],  // Handle file input
      }));
    } else {
      setData((items) => ({
        ...items,
        [name]: value,  // Handle other input changes
      }));
    }
  };

  // Submit form
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("product", data.product);
    formData.append("color", data.color);

    // Only append the image if a new file is uploaded
    if (data.color_img instanceof File) {
      formData.append("color_img", data.color_img);
    }

    try {
      await axios.put(`http://127.0.0.1:8000/comp/updateDeleteproductcolor/${id}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Product color updated successfully");
      navigate("/etrendadmin/allpcolor");

      setData({
        product: "",
        color_img: "",
        color: ""
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      toast.error("Product color update failed: " + err.message);
    }
  };

  return (
    <>
      <ToastContainer theme='colored' position='top-center' />
      <div className="flex justify-between mx-20 mt-5 items-center" >
        <h1 className='font-semibold text-3xl'>Edit Product Color</h1>
        <h2 className='text-sm text-gray-600 font-medium'>Dashboard / <span className='text-blue-500'>Edit Product Color</span></h2>
      </div>
      <div className="flex flex-col gap-9 mt-5 mx-60">
        <div className="rounded-sm border border-stroke bg-white shadow-md">
          <div className="border-b-2 border-stroke pb-5">
            <h3 className="font-medium text-[#2a3140] text-center text-xl mt-5">
              Edit Product Color
            </h3>
          </div>
          <form onSubmit={onSubmit} className='px-20'>
            <div className="py-6 mx-auto">
              <div className="mb-4">
                <label htmlFor='product' className="block text-sm font-medium text-[#2a3140]">Product<span className="text-red-600">*</span></label>
                <select name="product" value={data.product} onChange={handleChange} className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black">
                  <option value=""></option> {/* Display current product title */}
                  {product.map((prod) => (
                    <option key={prod.id} value={prod.id}>{prod.title}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor='color' className="block text-sm font-medium text-[#2a3140]">Color<span className="text-red-600">*</span></label>
                <select name="color" value={data.color} onChange={handleChange} className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black">
                  <option value=""></option> {/* Display current color name */}
                  {color.map((clr) => (
                    <option key={clr.id} value={clr.id}>{clr.color_name}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor='color_img' className="block text-sm font-medium text-[#2a3140]">Upload Color Image <span className="text-red-600">*</span></label>
                
                {/* Show existing image if present */}
                {typeof data.color_img === 'string' && (
                  <div className="mb-4">
                    <img src={data.color_img} alt="Current Color" className="h-32 w-32 object-cover mb-2" />
                    <p className="text-xs text-gray-400 mb-4">Current Image</p>
                  </div>
                )}

                <input type="file" name="color_img" onChange={handleChange} ref={fileInputRef} className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black" />
                <p className="text-xs text-gray-400 mt-2">PNG, JPG, SVG, WEBP, and GIF are allowed.</p>
              </div>
              <button type='submit' className="w-full justify-center rounded bg-[#3c50e0] p-3 font-medium text-white">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditProductColor;
