import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Products = (props) => {

  const [products, setProducts] = useState([])

useEffect(() => {
        fetch("http://localhost:3000/Products")
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok'); 
          }
          return res.json();
        })
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));
}, [])

  return (
    <div>
      <h1>This is our Products page</h1>
      <div>{props.children}</div>
      <div className='mt-10 w-full p-10'>
        <div>
          <Link to='/add-product' className='text-blue-500 mb-1 inline-block border-2 rounded-lg px-4 py-2'>
          + Add Product
          </Link>
        </div>
        <table className='table-auto w-full border-collapse border border-gray-400'>
          <thead className='px-4 py-2 bg-gray-200 border'>
            <tr>
              <th className='px-4 py-2'>ID</th>
              <th className='px-4 py-2'>Product Name</th>
              <th className='px-4 py-2'>Prices</th>
              <th className='px-4 py-2'>Vendor</th>
              <th className='px-4 py-2' colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className='border px-4 py-2'>{product.id}</td>
                <td className='border px-4 py-2'>{product.name}</td>
                <td className='border px-4 py-2'>{product.price}</td>
                <td className='border px-4 py-2'>{product.vendor}</td>
                <td className='border px-4 py-2' >
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm rounded px-3 py-1 cursor-pointer'>Update</button>
                </td>
                <td className='border px-4 py-2'>
                  <button className='bg-red-500 hover:bg-red-700 text-white font-bold text-sm rounded px-3 py-1 cursor-pointer'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
  )
}

export default Products