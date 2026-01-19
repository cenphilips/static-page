import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

const Login = () => {
  const [errMsg, setErrMsg] = useState('')
  const [succ, setSucc] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { setUser } = useAuthContext()



  const handleLogin = async (e) => {
    e.preventDefault()
    try {
        if (!username || !password) {
            setErrMsg('Please fill in all fields')
        }else{
            const res = await fetch('http://localhost:3000/Students')
            if(res.ok) {
                const users = await res.json()
                const user = users.find(u => (u.username === username || u.email === username) && u.password === password)
                if(user) {
                    setSucc('Login successful')
                    setErrMsg('')
                    setUser(user)
                    navigate('/')
                } else {
                    setErrMsg('Invalid username or password')
                    setSucc('')
                }
            } else {
                setErrMsg('Failed to fetch users')
                setSucc('')
            }
        }
    } catch (error) {
        setErrMsg(`Error: ${error.message}`)
        setSucc('')
    }
  }

  return (
    <div className='bg-gray-100 flex items-center justify-center h-screen'>
      <div className='bg-white p-8 rounded-lg shadow-lg max-w-sm w-full'>
        <div className='text-center mb-12'>
          <h1 className='text-2xl font-semibold text-gray-700'>
            Sign in to your account
          </h1>
            {errMsg && <p className='text-red-500 mt-4'>{errMsg}</p>}
            {succ && <p className='text-green-500 mt-4'>{succ}</p>}
        </div>
        <form action=''>
          <div className='mb-4'>
            <label
              htmlFor='username'
              className='block text-sm font-medium text-gray-600 mb-2'
            >
              Username or Email
            </label>
            <input
              type='text'
              id='username'
              name='username'
              placeholder='you@example.com'
              onChange={(e) => setUsername(e.target.value)}
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500'
              required
            />
          </div>

          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-600 mb-2'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='********'
                onChange={(e) => setPassword(e.target.value)}
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500'
              required
            />
          </div>

          <div className='flex items-center justify-end mb-6'>
            <a href='#' className='text-sm text-blue-600 hover:underline'>
              Forgot password?
            </a>
          </div>

          <div>
            <button
              type='submit'
                onClick={handleLogin}
              className='w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
            >
              Sign In
            </button>
          </div>
        </form>

        <div className='mt-6 text-center'>
          <p className='text-sm text-gray-600'>
            Don't have an account?
            <Link
              to='/pages/register'
              className='text-blue-600 hover:text-blue-500 px-1 hover:underline'
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
