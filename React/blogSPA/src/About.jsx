import React from 'react'
import { addNum, multiplyNum } from './helper'
import { useAuthContext } from './hooks/useAuthContext'

const About = (props) => {
  const { user, theme } = useAuthContext()
  const { num1, num2, ...rest } = props
  const sum = addNum(num1, num2)
  const product = multiplyNum(num1, num2)
  let isMember = false
  console.log('User from context:', user)
  console.log('Theme from context:', theme)
  const students = [
    {name: 'Ikenna', member: true},
    {name: 'Remigius', member: false},
    {name: 'Chisom', member: true},
    {name: 'Amaka', member: false},
    {name: 'Uche', member: true},
  ]
  return (
    <div>
      <h1>This is our About page.</h1>
      <p>The sum is: {sum > 20 ? 'Sum is a large number' : sum}</p>
      <p>The product is: {product}</p>
      <p>
        {rest.greet}, {rest.name}!
      </p>
      <div>{isMember ? <button>Login</button> : <button>Sign Up</button>}</div>
      <div>
        <table className='w-full'>
          <thead>
            <tr className='border-2'>
              <th className='border-2'>Name</th>
              <th>Membership Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className='border-2'>
                <td className='border-2'>{student.name}</td>
                <td className='border-2'>{student.member ? 'Member' : 'Not a member'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default About