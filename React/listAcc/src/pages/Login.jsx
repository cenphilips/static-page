import { Link } from "react-router-dom"
function Login(){

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#111827] px-4">
            
            <div className="w-full max-w-md bg-[#1f2937] rounded-2xl shadow-xl p-8 border border-slate-700">

                {/* Heading */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-semibold text-[#d1d5db]">
                        Sign in to your account
                    </h1>
                    <p className="text-sm text-[#d1d5db] mt-2">
                        Or {" "}
                        <Link to="/register">
                            <span className="underline hover:no-underline">
                                sign up for a new account
                            </span>
                        </Link>
                    </p>
                </div>

                {/* Form */}
                <form action="" className="space-y-5">

                    {/* Email */}
                    <div>
                        <label htmlFor="" className="block text-sm text-gray-300 mb-2"> Email Address</label>
                        <input 
                            type="email"
                            placeholder="Email Address"
                            className="w-full bg-[#374151] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    {/* password */}
                    <div>
                        <label htmlFor="" className="block text-sm text-gray-300 mb-2">Password</label>
                        <input 
                            type="password"
                            placeholder="*********"
                            className="w-full bg-[#374151] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />                                                
                    </div>

                    {/* Options */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 text-gray-300">
                            <input type="checkbox" className=" w-3 h-3 accent-sky-500" />
                            Remember me
                        </label>

                        <a href="" className=" text-gray-300 cursor-pointer underline">Forgot your password?</a>
                    </div>

                    {/* Submit*/}

                    <Link to="/dashboard">
                        <button 
                            type="submit"
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium cursor-pointer">
                                Sign in
                        </button>                   
                    </Link>

                </form>
            </div>
        </div>
    )
}

export default Login