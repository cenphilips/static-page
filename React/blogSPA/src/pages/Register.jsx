import React, {useState} from "react";
import { Link } from "react-router-dom";


const Register = () => {

return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-12">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
                <p className="mt-2 text-sm text-gray-600">Join our community today</p>
            </div>

            <form action="" className="mt-8 space-y-5">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-bold text-gray-700 uppercase tracking-wide">First Name</label>
                        <input type="text" name="first-name" id="first-name" required
                                className="mt-2 block w-full px-4 py-3 bg-gray-50  border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                                placeholder="first name" />
                    </div>
                    <div>
                       <label htmlFor="last-name" className="block text-sm font-bold text-gray-700 uppercase tracking-wide">Last Name</label>
                       <input type="text" name="last-name" id="last-name" required
                               className="mt-2 block w-full px-4 py-3 bg-gray-50  border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                               placeholder="last name" />
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                       <label htmlFor="username" className="block text-sm font-bold text-gray-700 uppercase tracking-wide">Username</label>  
                       <div className="mt-2 relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">@</span>
                            <input type="text" name="username" id="username" required
                                className="block w-full pl-8 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                                placeholder="username"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="dob" className="block text-sm font-bold text-gray-700 uppercase tracking-wide">Date of Birth</label>
                        <input type="date" name="dob" id="dob" required
                                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"/>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 uppercase tracking-wide">Email Address</label>
                    <input type="email" name="email" id="email" required
                    className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                    placeholder="you@example.com" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="password" className="block text-sm font-bold text-gray-700 uppercase tracking-wide">Password</label>
                        <input type="password" name="password" id="password" required
                        className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white" 
                        placeholder="********"/>
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="block text-sm font-bold text-gray-700 uppercase tracking-wide">Confirm Password</label>
                        <input type="password" name="confirm-password" id="confirm-password" required
                        className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white" 
                        placeholder="********"/>
                    </div>
                </div>

                <div className="pt-4">
                    <button type="submit"
                            className="w-full fles justify-center py-2 px-4 border border-transparent text-sm font-black rounded-2xl text-white bg-blue-600 focus:outline-none hover:bg-blue-500">
                    Create Account</button>
                </div>
            </form>

            <div className="mt-8 text-center">
                <p>Already have an account?
                <Link to='/pages/login' className="text-blue-600 hover:text-blue-500 px-1 hover:underline">
                Login
                </Link>
                </p>
            </div>
        </div>
    </div>
    
)
}

export default Register