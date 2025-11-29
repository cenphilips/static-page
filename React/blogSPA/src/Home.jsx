import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [count, setCount] = useState(0)
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/Students')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        return res.json()
      })
      .then((data) => setStudents(data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <div className=''>
      <div className='my-5'>
        <div>
          <h1 className='text-3xl block text-center'>
            Welcome to our Blog SPA Home Page
          </h1>
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
          <div className='mt-10 w-full p-10'>
            <div>
              <Link
                to='/add-student'
                className='text-blue-500 mb-1 inline-block border-2 rounded-lg px-4 py-2'
              >
                + Add Student
              </Link>
            </div>
            <table className='table-auto w-full border-collapse border border-gray-400'>
              <thead className='px-4 py-2 bg-gray-200 border'>
                <tr>
                  <th className='px-4 py-2'>ID</th>
                  <th className='px-4 py-2'>First Name</th>
                  <th className='px-4 py-2'>Last Name</th>
                  <th className='px-4 py-2'>Age</th>
                  <th className='px-4 py-2'>Major</th>
                  <th className='px-4 py-2' colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td className='border px-4 py-2'>{student.id}</td>
                    <td className='border px-4 py-2'>{student.firstname}</td>
                    <td className='border px-4 py-2'>{student.lastname}</td>
                    <td className='border px-4 py-2'>{student.age}</td>
                    <td className='border px-4 py-2'>{student.major}</td>
                    <td className='border px-4 py-2' >
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm rounded px-3 py-1 cursor-pointer'>Update</button>
                    </td>
                    <td className='border px-4 py-2'>
                      <button className='bg-red-500 hover:bg-red-700 text-white font-bold text-sm rounded px-3 py-1 cursor-pointer'>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
