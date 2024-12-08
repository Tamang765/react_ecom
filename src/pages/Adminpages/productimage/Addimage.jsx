import React, { useState, useEffect, useRef} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addimage = () => {

  const [data, setData] = useState({
    product: "",
    is_display_image: "",
    image: "",
    color: ""
  })

  const [colors, setColor] = useState([])
  const [product, setProduct] = useState([])
  const navigate = useNavigate();

    // Ref for the file input field
    const fileInputRef = useRef(null);

  // Fetch the stock options from the API (which include color and size)
  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const colorresponse = await axios.get('http://127.0.0.1:8000/comp/allproductcolor/'); // Adjust the URL as needed
        const productresponse = await axios.get('http://127.0.0.1:8000/product/allProduct/'); // Adjust the URL as needed
        setProduct(productresponse.data); // Assuming the response contains a list of stocks
        setColor(colorresponse.data); // Assuming the response contains a list of stocks
      } catch (error) {
        toast.error("Failed to fetch data");
      }
    };

    fetchStockData();
  }, []);


  const handleChange = (event) => {
    // Destructure the 'name' and 'value' from the event.target (input field)
    const { name, value } = event.target;

    // Check if the input field's name is "img" (indicating it's a file input)
    if (name === "image") {
      // Update the state using 'setData'. Specifically, when the 'img' input changes, we update the 'img' field in the state with the selected file.
      setData((items) => ({
        ...items,  // Spread operator to retain the existing values in the 'data' state
        image: event.target.files[0],  // Assign the first selected file from the 'files' array to 'img'
      }));

    } else {
      // For all other input fields (non-file inputs), update the state dynamically based on the field's 'name'
      setData((items) => ({
        ...items,  // Spread operator to keep existing data in the state
        [name]: value  // Dynamically update the field in 'data' based on the input field's 'name' attribute
      }));
    }
  };


  const onSubmit = async (e) => {
    e.preventDefault();  // Prevent the default form submission behavior (which reloads the page)

    // Create a FormData object to handle the multipart/form-data required for file uploads
    const formData = new FormData();

    // Append form fields to FormData (in key-value pairs), ready to send as form data in a POST request
    formData.append("product", data.product);  // Add the selected product from the form to the formData object
    formData.append("is_display_image", data.is_display_image);  // Add the is_display_image flag from the form
    formData.append("image", data.image);  // Add the image file (which was selected in the file input)
    formData.append("color", data.color);  // Add the selected color to the formData

    try {
      // Make an Axios POST request to the backend API to create a new Product Image
      // Use the formData object in the body of the request
      await axios.post(`http://127.0.0.1:8000/comp/createProductImg/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",  // Set the content type to multipart/form-data for file uploads
        }
      });

      // If the request is successful, show a success message using the toast notification
      toast.success("Product Image Added Successfully");

      // Navigate the user to the "/products" page after the product image is successfully added
      navigate("/etrendadmin/addpimage");
      
      // Clear the form after successful submission
      setData({
        product: "",
        is_display_image: "",
        image: "",
        color: ""
      });  

       // Reset the file input using ref
       if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }


    } catch (err) {
      // If the request fails, show an error message using the toast notification
      toast.error("Product image Add failed", err.message);
    }
  };

  return (
    <>
      <ToastContainer theme='colored' position='top-center' />
      <div className="flex justify-between mx-20 mt-5 items-center" >
        <h1 className='font-semibold text-3xl'>Add Product Image</h1>
        <h2 className='text-sm text-gray-600 font-medium'>Dashboard / <span className='text-blue-500'>Add Product Image</span></h2>
      </div>
      <div className="flex flex-col gap-9 mt-5 mx-60">
        <div className="rounded-sm border border-stroke bg-white shadow-md" >
          <div className="border-b-2 border-stroke pb-5">
            <h3 className="font-medium text-[#2a3140] text-center text-xl mt-5">
              Add Product Image
            </h3>
          </div>
          <form action="#" className='px-20' onSubmit={onSubmit}>
            <div className="py-6 mx-auto">
              {/* Dropdown for Size */}
              <div className="mb-4">
                <label htmlFor='product' className="mb-3 block text-sm font-medium text-[#2a3140]">
                  Product Name <span className="text-red-600">*</span>
                </label>
                <select
                  name="product"
                  value={data.product}
                  onChange={handleChange}
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none"
                >
                  <option value="">Select Product</option>
                  {product.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.title} {/* Assuming each product image has `product.title` */}
                    </option>
                  ))}
                </select>
              </div>

              {/* Dropdown for Product Color */}
              <div className="mb-4">
                <label htmlFor='color' className="mb-3 block text-sm font-medium text-[#2a3140]">
                  Product Color <span className="text-red-600">*</span>
                </label>
                <select
                  name="color"
                  value={data.color}
                  onChange={handleChange}
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none"
                >
                  <option value="">Select Product with Color</option>
                  {colors.map((color) => (
                    <option key={color.id} value={color.id}>
                      {color.product_color_info}{/* Assuming each color has `color_name` */}
                    </option>
                  ))}
                </select>
              </div>



              {/* Dropdown for Display Image Type */}
              <div className="mb-4">
                <label htmlFor='is_display_image' className="mb-3 block text-sm font-medium text-[#2a3140]">
                  Display Image <span className="text-red-600">*</span>
                </label>
                <select
                  name="is_display_image"
                  value={data.is_display_image}
                  onChange={handleChange}
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none"
                >
                  <option value="">Select Display Image Type</option>
                  <option value="True">Yes</option>
                  <option value="False">No</option>
                </select>
              </div>

              {/* Input for Image */}
              <div className="mb-4">
                <label htmlFor='image' className="mb-3 block text-sm font-medium text-[#2a3140]">
                  Upload Image <span className="text-red-600">*</span>
                </label>
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  ref={fileInputRef}  // Attach the ref here
                  required
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none"
                />
                <p className="text-xs text-gray-400 mt-2">
                  PNG, JPG SVG, WEBP, and GIF are Allowed.
                </p>
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
  )
}

export default Addimage