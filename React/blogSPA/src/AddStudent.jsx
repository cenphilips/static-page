import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import postData from './pages/postData'

const AddStudent = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dob, setDob] = useState('')
  const [major, setMajor] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [succ, setSucc] = useState('')
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
        if (!firstName || !lastName || !dob || !major) {
          setErrMsg('Please fill in all fields')
        }else{
            const age = new Date().getFullYear() - new Date(dob).getFullYear();
            const newStudent = {
                firstname: firstName,
                lastname: lastName,
                age,
                major
            };
            await postData('http://localhost:3000/Students', newStudent);
            setSucc('Student added successfully');
            setTimeout(() => {
                navigate('/')
            }, 5000)
        }

    }catch (error) {
        setErrMsg(`Error: ${error.message}`)
    }
  }


  return (
    <div className='h-screen'>
      <h1 className='text-3xl text-center mt-10'>Add Student Page</h1>
      <div>
        <form
          onSubmit={handleSubmit}
          className='w-1/2 mx-auto border-2 rounded-lg p-5 mt-10'
        >
          {errMsg && <p className='text-red-500 mb-5'>{errMsg}</p>}
          {succ && <p className='text-green-500 mb-5'>{succ}</p>}
          <div className='m-5'>
            <label htmlFor='firstName' className='block mb-2'>
              First Name:{' '}
            </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              className='border-2 rounded-lg px-4 py-2 w-full'
              placeholder='First Name'
              onChange={(e) => setFirstName(e.target.value)}
              onClick={() => setErrMsg('')}
            />
          </div>
          <div className='m-5'>
            <label htmlFor='firstName' className='block mb-2'>
              Last Name:{' '}
            </label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              className='border-2 rounded-lg px-4 py-2 w-full'
              placeholder='Last Name'
              onChange={(e) => setLastName(e.target.value)}
              onClick={() => setErrMsg('')}
            />
          </div>
          <div className='m-5'>
            <label htmlFor='dob' className='block mb-2'>
              DOB:{' '}
            </label>
            <input
              type='date'
              id='dob'
              name='dob'
              className='border-2 rounded-lg px-4 py-2 w-full'
              placeholder='Date of Birth'
              onChange={(e) => setDob(e.target.value)}
              onClick={() => setErrMsg('')}
            />
          </div>
          <div className='m-5'>
            <label htmlFor='major' className='block mb-2'>
              Major:{' '}
            </label>
            <input
              type='text'
              id='major'
              name='major'
              className='border-2 rounded-lg px-4 py-2 w-full'
              placeholder='Major'
              onChange={(e) => setMajor(e.target.value)}
              onClick={() => setErrMsg('')}
            />
          </div>
          <div className='m-5'>
            <button
              type='submit'
              className='bg-green-500 text-white w-full px-4 py-2 rounded-lg cursor-pointer'
            >
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddStudent
