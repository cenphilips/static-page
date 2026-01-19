import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

const Nav = () => {
    const { user } = useAuthContext()
  return (
    <div className='bg-gray-800 shadow-md flex justify-between items-center h-18 px-[2%]'>
        <div className='w-[30%]'>
            <h1 className='text-white text-4xl font-bold uppercase'>Blog</h1>
        </div>
        <div className='w-full'>
            <ul className='flex justify-end space-x-1'>
                <li className='px-6 py-2 text-gray-300 hover:text-white rounded-md text-lg font-medium'><Link to="/">Home</Link></li>
                <li className='px-6 py-2 text-gray-300 hover:text-white rounded-md text-lg font-medium'><Link to="/about">About</Link></li>
                <li className='px-6 py-2 text-gray-300 hover:text-white rounded-md text-lg font-medium'><Link to="/services">Services</Link></li>
                <li className='px-6 py-2 text-gray-300 hover:text-white rounded-md text-lg font-medium'><Link to="/contact">Contact</Link></li>
                <li className='px-6 py-2 text-gray-300 hover:text-white rounded-md text-lg font-medium'><Link to="/products">Products</Link></li>
                {!user && <li className='px-6 py-2 text-gray-300 hover:text-white rounded-md text-lg font-medium'><Link to="/pages/Login">Login</Link></li>}
            </ul>
        </div>
    </div>
  )
}

export default Nav