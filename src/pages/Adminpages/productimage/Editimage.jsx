import React,{useState, useEffect} from 'react'
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Editimage = () => {
  const [data, setData] = useState({
    product: "",
    is_display_image: "",
    image: "",
    color: ""
    
  });

  const { id } = useParams(); 
  const navigate = useNavigate(); 
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/comp/singleProductimg/${id}/`);
        setData(response.data);
      } catch (err) {
       toast("Error fetching product image data", err.message);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "image") {
  
      setData((items) => ({
        ...items, 
        image: event.target.files[0],  
      }));

    } else {
    
      setData((items) => ({
        ...items,  
        [name]: value  
      }));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("product", data.product);  
    formData.append("is_display_image", data.is_display_image); 
    formData.append("image", data.image); 
    formData.append("color", data.color);  

    try {
      await axios.put(`http://127.0.0.1:8000/comp/updateDeleteProductimg/${id}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast("Product image updated successfully");
      navigate("/etrendadmin/pimage"); 
    } catch (err) {
      toast("Product image update failed", err.message);
    }
  };

  return (
    <>
    
    <ToastContainer theme='colored' position='top-center' />
      <div className="flex justify-between mx-20 mt-5 items-center" >
        <h1 className='font-semibold text-3xl'>Edit Product Image</h1>
        <h2 className='text-sm text-gray-600 font-medium'>Dashboard / <span className='text-blue-500'>Edit Product Image</span></h2>
      </div>
      <div className="flex flex-col gap-9 mt-5 mx-60">
        <div className="rounded-sm border border-stroke bg-white shadow-md" >
          <div className="border-b-2 border-stroke pb-5">
            <h3 className="font-medium text-[#2a3140] text-center text-xl mt-5">
              Edit Product Image
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

export default Editimage