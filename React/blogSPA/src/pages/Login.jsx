import React, {useState} from "react";
import { Link } from 'react-router-dom'


const Login = () => {

    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <div className="text-center mb-12">
                    <h1 className="text-2xl font-semibold text-gray-700">Sign in to your account</h1>
                </div>
                <form action="">
                    <div className="mb-4">
                        <label  htmlFor="username" className="block text-sm font-medium text-gray-600 mb-2">Username or Email</label>
                        <input type="text" id="username" name="username" placeholder="you@example.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" required/>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">Password</label>
                        <input type="password" id="password" name="password" placeholder="********"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" required/>
                    </div>

                    <div className="flex items-center justify-end mb-6">
                        <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                    </div>

                    <div>
                        <button type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Sign In
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?
                        <Link to='/pages/register' className="text-blue-600 hover:text-blue-500 px-1 hover:underline">
                        Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login