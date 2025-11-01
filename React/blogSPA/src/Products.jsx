import React from 'react'

const Products = (props) => {
  return (
    <div>
      <h1>This is our Products page</h1>
      <div>{props.children}</div>
    </div>
  )
}

export default Products