import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')
    const [vendor, setVendor] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [succ, setSucc] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            if(!productName || !price || !vendor){
                setErrMsg('Please fill in all fields')
            }
            else{
                const newProduct = {
                    name: productName,
                    price,
                    vendor
                };

                const res = await fetch('http://localhost:3000/Products', { 
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newProduct)
                })

                if(!res.ok) {
                    throw new Error("Failed to add user")
                }
                // const data = await res.json();
                setSucc('Product added successfully');
                setTimeout(() => {
                    navigate('/products')
                }, 5000)
            }

        }
        catch (error) {
            setErrMsg(`Error: ${error.message}`)
        }
    }

    return(
        <div className="h-screen">
            <h1 className='text-3xl text-center mt-10'>Add Product Page</h1>
            <div>
                <form onSubmit={handleSubmit} className='w-1/2 mx-auto border-2 rounded-lg p-5 mt-10'>
                {errMsg && <p className='text-red-500 mb-5'>{errMsg}</p>}
                {succ && <p className='text-green-500 mb-5'>{succ}</p>}
                    <div className='m-5'>
                        <label htmlFor="productName" className='block mb-2'>
                            Product Name:{' '}
                        </label>
                        <input
                            type='text'
                            id='productName'
                            name='productName'
                            className='border-2 rounded-lg px-4 py-2 w-full'
                            placeholder='Product Name'
                            onChange={(e) => setProductName(e.target.value)}
                            onClick={() => setErrMsg('')}
                        />
                    </div>
                    <div className='m-5'>
                        <label htmlFor="price" className='block mb-2'>
                            Price:{' '}
                        </label>
                        <input
                            type='text'
                            id='price'
                            name='price'
                            className='border-2 rounded-lg px-4 py-2 w-full'
                            placeholder='Price'
                            onChange={(e) => setPrice(e.target.value)}
                            onClick={() => setErrMsg('')}
                        />
                    </div>
                    <div className='m-5'>
                        <label htmlFor="vendor" className='block mb-2'>
                            Vendor:{' '}
                        </label>
                        <input
                            type='text'
                            id='vendor'
                            name='vendor'
                            className='border-2 rounded-lg px-4 py-2 w-full'
                            placeholder='Vendor'
                            onChange={(e) => setVendor(e.target.value)}
                            onClick={() => setErrMsg('')}
                        />
                    </div>
                    <div className='m-5'>
                       <button
                          type='submit'
                          className='bg-green-500 text-white w-full px-4 py-2 rounded-lg cursor-pointer'
                        >
                          Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>       
    )
}


export default AddProduct