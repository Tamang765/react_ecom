import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';  // Import toastify
import 'react-toastify/dist/ReactToastify.css';  // Import styles

const Productlist = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        let res = await axios.get('http://127.0.0.1:8000/product/allProduct/');
        setData(res.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchdata();
  }, []);

  // for delete data
  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this Product?');

    if (confirmDelete) {
      try {
        await axios.delete(`http://127.0.0.1:8000/product/updateDeleteProduct/${id}/`);
        setData(data.filter((items) => items.id !== id));

        toast.success('Product deleted successfully!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (e) {
        console.log('Delete Product failed', e.message);

        toast.error('Failed to delete product. Please try again.', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  return (
    <>
      <ToastContainer theme="colored" />
      <div className="flex justify-between mx-20 mt-5 items-center">
        <h1 className="font-semibold text-3xl">Product List</h1>
        <h2 className="text-sm text-gray-600 font-medium">Dashboard / <span className="text-blue-500">All Products</span></h2>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 mx-20">
        <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">ID</th>
              <th scope="col" className="px-6 py-3">Title</th>
              <th scope="col" className="px-6 py-3">Description</th>
              <th scope="col" className="px-6 py-3">Brand</th>
              <th scope="col" className="px-6 py-3">Sub Category</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Discounted Price</th>
              <th scope="col" className="px-6 py-3">Is Slider</th>
              <th scope="col" className="px-6 py-3">Is Featured</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((items, i) => (
              <tr
                className="bg-white text-sm border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={i}
              >
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {items.id}
                </th>
                <td className="px-6 py-4">{items.title || 'N/A'}</td>
                <td className="px-6 py-4">{items.description || 'N/A'}</td>
                <td className="px-6 py-4">{items.Brand || 'N/A'}</td>
                <td className="px-6 py-4">
                  {items.subcategory_details ? `${items.subcategory_details.title} (${items.subcategory_details.category_title})` : 'N/A'}
                </td>
                <td className="px-6 py-4">Rs. {items.price || 'N/A'}</td>
                <td className="px-6 py-4">{items.discounted_price || 'N/A'}</td>
                <td className="px-6 py-4">{items.is_slider ? 'Yes' : 'No'}</td>
                <td className="px-6 py-4">{items.is_featured ? 'Yes' : 'No'}</td>
                <td className="px-6 py-4">
                  <Link to={`/etrendadmin/editproduct/${items.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Edit
                  </Link>{' '}
                  &nbsp; &nbsp;
                  <Link to="#" onClick={() => deleteProduct(items.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between p-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of{' '}
            <span className="font-semibold text-gray-900 dark:text-white">1000</span>
          </span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Productlist;
