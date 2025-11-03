import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='bg-slate-400'>
        <div>
            <h1>Blog</h1>
        </div>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/products">Products</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Nav