import { useState } from "react"
import {Sun, Moon, LogIn, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar(){


return(
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0a] border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between  px-6 py-3 text-gray-300">

            {/* Left Side */}
            <div className="flex items-center justify-between gap-12 px-2">
                {/* Logo */}
                <div className="text-xl font-bold text-white tracking-wide">
                    listacctech
                    <span className="block text-xs font-light tracking-widest text-gray-400">ACADEMY</span>
                </div>

                {/* Link */}
                <nav className="hidden md:flex gap-6 text-gray-300">
                    <a className="hover:text-white" href="#">Home</a>
                    <a className="hover:text-white" href="#">All Paths</a>
                    <a className="hover:text-white" href="#">About</a>
                    <a className="hover:text-white" href="#">Contact</a>
                </nav>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
                <Link to="/">
                    <button className="flex items-center gap-2 text-gray-300 hover:text-white">
                        <LogIn size={16}/>
                        <span className="hidden sm:inline cursor-pointer">Sign In</span> 
                    </button>              
                </Link>

                <Link to="/register"> 
                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-black px-3 py-1 rounded-full cursor-pointer">
                            <Rocket size={15}/>Get Started
                    </button>
                </Link>
            </div>

        </div>
    </header>
)
}

export default Navbar