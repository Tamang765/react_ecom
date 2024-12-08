import React from 'react'
import { Link } from 'react-router-dom'

const DataTable = ({data, deleteContact}) => {
  const{id,size_name}=data

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this size?')) {
      deleteContact(id); // Call the deleteContact function passed from the parent
    }
  };
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {id}
              </th>
              <td className="px-6 py-4">
                  {size_name}
              </td>
             
              <td className="px-6 py-4">
                  <Link to={`/etrendadmin/editSize/${id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link> &nbsp; &nbsp;
                  <Link to="#" onClick={handleDelete} className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</Link>
              </td>
          </tr>

    </>
  )
}

export default DataTable