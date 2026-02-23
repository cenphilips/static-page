import React from "react"
import {Eye, Phone} from "lucide-react"
import { Link } from "react-router-dom"

function Register () {

    return (
        <div className="main-h-screen bg-[#111827] flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-xl bg-[#111827] p-8">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-semibold text-[#214fc9]">
                        Create Your Account
                    </h1>
                    <p className="text-[#9ca3af] text-sm mt-2">
                        Already have an Account?
                        <Link to="/">
                            <span className="text-[#93c5fd] font-semibold hover:underline">
                                {" "} Sign in here
                            </span>
                        </Link>
                    </p>
                </div>

                {/* Form */}
                <form action="" className="">
                    <div className="space-y-6 w-full max-w-xl bg-[#1f2937] border border-[#374151] rounded-2xl shadow-2xl p-8">

                        {/* First Name */}
                        <div>
                            <label htmlFor="" className="block text-sm text-gray-300 mb-2">First Name</label>
                            <input type="text"
                                    placeholder="Henry"
                                    className="w-full bg-[#374151] rounded-xl px-4 py-3 border border-gray-500 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <label htmlFor="" className="block text-sm text-gray-300 mb-2">Last Name</label>
                            <input type="text"
                                    placeholder="Ford"
                                    className="w-full bg-[#374151] rounded-xl px-4 py-3 border border-gray-500 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>                        

                        {/* Phone */}
                        <div>
                            <label htmlFor="" className="block text-sm text-gray-300 mb-2">Phone Number</label>
                            <div className="flex gap-3">
                                <div className="relative flex-1">
                                    <Phone 
                                        size={16}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                    />
                                    <input type="tel"
                                        placeholder="+234 801 234 5678  or  080 111 22233"
                                        className="w-full bg-[#374151] rounded-xl pl-10 pr-4 py-3 border border-gray-500 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="bg-gray-400 text-white px-5 py-3 rounded-xl hover:bg-gray-500 transition cursor-pointer"
                                >
                                    Verify
                                </button>
                            </div>
                        </div> 

                        {/* Email */}
                        <div>
                            <label htmlFor="" className="block text-sm text-gray-300 mb-2">Email Address</label>
                            <input type="email"
                                    placeholder="email@gmailcom"
                                    className="w-full bg-[#374151] rounded-xl px-4 py-3 border border-gray-500 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>    

                        {/*  Learning Mode */}
                        <div>
                            <label htmlFor="" className="block text-sm text-gray-300 mb-2">How do you want to learn? {" "} 
                                <span className="text-red-500"> * </span>
                            </label>

                            <div className="flex flex-wrap gap-3">
                                {
                                    ["Online", "In-Person", "Hybrid"].map((item)=>(
                                        <button
                                            key={item}
                                            type="button"
                                            className="px-5 py-2 rounded-lg bg-[#2b394a] border border-gray-500 text-gray-300 hover:border-blue-500 transition cursor-pointer"
                                        >
                                            {item}
                                        </button>
                                    )
                                )}
                            </div>

                            <p className="text-xs text-gray-400 mt-2">
                                Please select your preferred learning mode
                            </p>
                        </div>                        

                        {/* Interest  */}
                        <div>
                            <label className="block text-sm text-gray-300 mb-3">
                                What is Your Area of Interest?{" "}
                                <span className="text-red-500">*</span>
                            </label>

                            <div className="flex flex-wrap gap-3">
                                {
                                    [
                                        "Frontend",
                                        "Backend",
                                        "Full-Stack",
                                        "DevOps",
                                        "Data Analysis",
                                        "UI/UX",
                                        "Digital Marketing",
                                        "Cyber Security",
                                        "Data Science",
                                        "Video Editing",
                                        "Animation",
                                    ].map((item)=>(
                                      <button
                                        key={item}
                                        type="button"
                                        className="px-4 py-2 rounded-lg bg-[#2b394a] border border-gray-500 text-gray-300 text-sm hover:border-blue-500 transition"                                     
                                      >
                                            {item}
                                      </button>  
                                    ))
                                }
                            </div>

                            <p className="text-xs text-gray-400 mt-2">
                                Please select at least one area of interest
                            </p>
                        </div> 
                        
                        {/* Password */}
                        <div>
                            <label htmlFor="" className="block text-sm text-gray-300 mb-2">Password</label>                           
                            <div className="relative">
                                <input type="password"
                                        placeholder="Enter your password"
                                        className="w-full bg-[#374151] rounded-xl px-4 py-3 border border-gray-500 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />

                                <Eye 
                                    size={20}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300"
                                />                               
                            </div>
                            <p className="text-xs text-gray-400 mt-2">
                                Must be at least 6 characters with uppercase, lowercase, and number
                            </p>
                        </div>    

                        {/* Confirm Password */}
                        <div>
                            <label htmlFor="" className="block text-sm text-gray-300 mb-2">Confirm Password</label>                           
                            <div className="relative">
                                <input type="password"
                                        placeholder="Confirm your password"
                                        className="w-full bg-[#374151] rounded-xl px-4 py-3 border border-gray-500 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />

                                <Eye 
                                    size={20}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300"
                                />                               
                            </div>
                        </div>    

                        {/* Terms  */}
                        <p className="text-xs text-gray-500 text-center pt-2">
                            By signing up, you agree to our terms of use.
                        </p>

                        {/* Submit   */}
                        <button
                            type="submit"
                            className="w-full mt-4 py-4 rounded-xl bg-[#969da9] text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition cursor-not-allowed"
                        >
                            <Phone size={18}/>
                            Verify Phone to Continue
                        </button>


                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register