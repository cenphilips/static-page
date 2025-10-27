import React from 'react'
import { addNum, multiplyNum } from './helper'

const About = () => {
  const sum = addNum(5, 10)
  const product = multiplyNum(5, 10)
  return (
    <div>
      <h1>This is our About page.</h1>
      <p>The sum is: {sum}</p>
      <p>The product is: {product}</p>
    </div>
  )
}

export default About