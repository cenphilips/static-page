import { useState } from 'react'
import About from './About'


function App() {
  const [name, setName] = useState("Ikenna")

  const callSetName = () => {
    setName("Remigius")
  }
  return (
    <>
     <h1 className='text-3xl bg-black text-white text-center'>Welcome to React class</h1>
     <p>My name is {name}</p>
     <button onClick={callSetName}>Change name</button>
     <button onClick={() => setName("Ikenna")}>Reset name</button>
      <About />
    </>
  )
}

export default App
