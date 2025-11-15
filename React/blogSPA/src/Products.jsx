import React, {useState, useEffect} from 'react'


const Products = (props) => {

  const [products, setProducts] = useState([])

useEffect(() => {
        fetch("http://localhost:3000/Products")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));
}, [])

  return (
    <div>
      <h1>This is our Products page</h1>
      <div>{props.children}</div>
      <div>
        
      </div>
    </div>
    
  )
}

export default Products