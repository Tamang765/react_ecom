import React,{useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditSize = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        size_name:""
    });

    useEffect(()=>{
        const fetchSize = async ()=>{
            try{
                let res = await fetch(`http://127.0.0.1:8000/comp/updateDeleteSize/${id}/`);
                let size = await res.json();
                setFormData(size);
            }catch(e){
                console.log(e.message);
            }
        };
        fetchSize();
    }, [id])

    const handleInputChange = (e)=>{
        const {name, value } = e.target;
        setFormData((items) => ({
            ...items,
            [name]: value,
          }));

    };

    const updateSize = async ()=>{
   
        try{
            const res = await fetch(`http://127.0.0.1:8000/comp/updateDeleteSize/${id}/`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(formData)
            });
            if (res.ok){
                toast.success("Size Updated Successfully")
                setTimeout(() => {
                    navigate("/etrendadmin/allsize"); // Navigate after successful update
                  }, 2000); // Delay the navigation to allow the toast to be visible
            }else{
                toast("Update failed");
            }
            
        }
        catch(e){
            toast("Update size failed", e.message);
        }
    }

  return (
    <>
      <ToastContainer theme='colored' position='top-center'/>
    <div className="flex justify-between mx-20 mt-5 items-center" >
    <h1 className='font-semibold text-3xl'>Size Form</h1>
    <h2 className='text-sm text-gray-600 font-medium'>Dashboard / <span className='text-blue-500'>Edit Size Form</span></h2>
  </div>
          <div class="flex flex-col gap-9 mt-5 mx-60">
           <div class="rounded-sm border border-stroke bg-white shadow-md" >
                  <div class="border-b-2 border-stroke pb-5">
                    <h3 class="font-medium text-[#2a3140] dark:text-white text-center text-xl mt-5">
                      Size Form
                    </h3>
                  </div>
                  <form action="#" className='px-20' onSubmit={updateSize}>
                    <div class="py-6 mx-auto">
                      

                      <div class="mb-4">
                        <label htmlFor='size_name'
                          class="mb-3 block text-sm font-medium text-[#2a3140] dark:text-white">
                          Size Name <span class="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter a size name"
                          name='size_name'
                          value={formData.size_name}
                          class="w-full  rounded border-[1.5px] border-stroke border-[#e2e8f0] bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-[#e2e8f0] active:border-[#e2e8f0] disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-[#e2e8f0]"
                          onChange={handleInputChange} />
                      </div>


                      <button
                      type='submit'
                        class="flex w-full justify-center rounded bg-[#3c50e0] p-3 font-medium text-white hover:bg-opacity-90"
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>

    
    </>
  )
}

export default EditSize