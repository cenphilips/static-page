import React, { useState } from 'react'

const Home = () => {
  const [count, setCount] = useState(0)
  return (
    <div className=''>
      <div className='my-5'>
        <div>
          <h1 className='text-3xl block text-center'>Welcome to our Blog SPA Home Page</h1>
        </div>
        <div className='flex flex-col items-center mt-5'>
          <h2 className='text-2xl my-3 text-center'>Counter: {count}</h2>
          <div>
            <button
              className='bg-blue-500 text-white px-4 py-2 mx-2 rounded cursor-pointer'
              onClick={() => setCount(count + 1)}
            >
              Increment
            </button>
            <button
              className='bg-red-500 text-white px-4 py-2 mx-2 rounded cursor-pointer'
              onClick={() => count > 0 && setCount(count - 1)}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
