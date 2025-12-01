import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const UpdateStudent = () => {
  const { id } = useParams()
  const [student, setStudent] = useState(null)
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [dob, setDob] = useState('')
  const [major, setMajor] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [succ, setSucc] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:3000/Students/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        return res.json()
      })
      .then((data) => setStudent(data))
      .catch((err) => console.log(err))
  }, [id])

  const handleUpdateStudent = (e) => {
    e.preventDefault()
    const age = new Date().getFullYear() - new Date(dob).getFullYear()
    const studentData = {
      firstname: firstname || student.firstname,
      lastname: lastname || student.lastname,
      age: age || student.age,
      major: major || student.major,
    }
    fetch(`http://localhost:3000/Students/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        return res.json()
      })
      .then((data) => {
        setStudent(data)
        setSucc('Student updated successfully')
        setErrMsg('')
        setTimeout(() => {
          navigate('/')
        }, 5000)
      })
      .catch((err) => {
        setErrMsg('Failed to update student')
        setSucc('')
        console.log(err)
      })
  }
  return (
    <div className='h-screen'>
      <h1 className='text-3xl text-center mt-10'>Update Student Page</h1>
      <div>
        {student ? (
          <div className='w-1/2 mx-auto mt-10 p-5 border rounded-lg shadow-lg'>
            <h2 className='text-2xl mb-5'>Update Student ID: {student.id}</h2>
            {errMsg && <p className='text-red-500 mb-5'>{errMsg}</p>}
            {succ && <p className='text-green-500 mb-5'>{succ}</p>}
            <form>
              <div className='mb-4'>
                <label className='block mb-2'>First Name:</label>
                <div>
                  <input
                    type='text'
                    defaultValue={student.firstname}
                    className='w-full p-2 border rounded-lg'
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div className='mb-4'>
                <label className='block mb-2'>Last Name:</label>
                <div>
                  <input
                    type='text'
                    defaultValue={student.lastname}
                    className='w-full p-2 border rounded-lg'
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className='mb-4'>
                <label className='block mb-2'>Age:</label>
                <div className='flex gap-4'>
                  <div>
                    <input
                      type='number'
                      defaultValue={student.age}
                      className='w-full p-2 border rounded-lg'
                    />
                  </div>
                  <div>
                    <input
                      type='date'
                      defaultValue={student.dob}
                      className='w-full p-2 border rounded-lg'
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className='mb-4'>
                <label className='block mb-2'>Major:</label>
                <div>
                  <input
                    type='text'
                    defaultValue={student.major}
                    className='w-full p-2 border rounded-lg'
                    onChange={(e) => setMajor(e.target.value)}
                  />
                </div>
              </div>
              <div className='text-center mb-4 mt-2 w-full bg-red-500'>
                <button
                  onClick={(e) => handleUpdateStudent(e)}
                  className='text-white w-full cursor-pointer bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded'
                >
                  Update Student
                </button>
              </div>
            </form>
          </div>
        ) : (
          <p className='text-center mt-10'>Loading student data...</p>
        )}
      </div>
    </div>
  )
}

export default UpdateStudent
