import React,{useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Editstock = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        product_color: "",
        size: "",
        movement_type: "",
        quantity: "",
        notes: ""
    });



    useEffect(()=>{
        const fetchStock = async ()=>{
            try{
                let res = await fetch(`http://127.0.0.1:8000/stock/updateDeleteStock/${id}/`);
                let stock = await res.json();
                setFormData(stock);

            
            }catch(e){
                console.log(e.message);
            }
        };
        fetchStock();
    }, [id])

          
  const [sizes, setSize] = useState([]); // State to store size options
  const [colors, setColor] = useState([]); // State to store product color options
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


    const handleInputChange = (e)=>{
        const {name, value } = e.target;
        setFormData((items) => ({
            ...items,
            [name]: value,
          }));

    };

    const updateStock = async ()=>{
   
        try{
            const res = await fetch(`http://127.0.0.1:8000/stock/updateDeleteStock/${id}/`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(formData)
            });
            if (res.ok){
                toast.success("Stock Updated Successfully")
                setTimeout(() => {
                    navigate("/etrendadmin/allstock"); // Navigate after successful update
                  }, 2000); // Delay the navigation to allow the toast to be visible
            }else{
                toast("Update failed");
            }
            
        }
        catch(e){
            toast("Update stock failed", e.message);
        }
    }
  return (
    <>
     <ToastContainer theme='colored' position='top-center' />
      <div className="flex justify-between mx-20 mt-5 items-center" >
        <h1 className='font-semibold text-3xl'>Edit Stock</h1>
        <h2 className='text-sm text-gray-600 font-medium'>Dashboard / <span className='text-blue-500'>Edit Stock</span></h2>
      </div>
      <div className="flex flex-col gap-9 mt-5 mx-60">
        <div className="rounded-sm border border-stroke bg-white shadow-md" >
          <div className="border-b-2 border-stroke pb-5">
            <h3 className="font-medium text-[#2a3140] text-center text-xl mt-5">
              Edit Stock
            </h3>
          </div>
          <form action="#" className='px-20' onSubmit={updateStock}>
            <div className="py-6 mx-auto">

              {/* Dropdown for Product Color */}
              <div className="mb-4">
                <label htmlFor='product_color' className="mb-3 block text-sm font-medium text-[#2a3140]">
                  Product Color <span className="text-red-600">*</span>
                </label>
                <select
                  name="product_color"
                  value={formData.product_color}
                  onChange={handleInputChange}
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none"
                >
                  <option value="">{formData.product_color_info}</option>
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
                  value={formData.size}
                  onChange={handleInputChange}
                  className="w-full rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none"
                >
                  <option value="">{formData.size_name}</option>
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
                  value={formData.movement_type}
                  onChange={handleInputChange}
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
                  value={formData.quantity}
                  onChange={handleInputChange}
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
                  value={formData.notes}
                  onChange={handleInputChange}
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
  )
}

export default Editstock