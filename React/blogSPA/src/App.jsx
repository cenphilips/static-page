import { useState } from 'react'
import About from './About'
import Products from './Products'
import Contact from './Contact'
import Services from './Services'



function App() {
  const [name, setName] = useState("Ikenna")

  const callSetName = () => {
    setName("Remigius")
  }
  return (
    <>
     <h1 className='text-3xl bg-black text-white text-center'>Welcome to React class</h1>
     <p>My name is {name}</p>
     <button onClick={callSetName} className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded mr-2'>Change name</button>
     <button onClick={() => setName("Ikenna")} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded'>Reset name</button>
      <Services />
    </>
  )
}

export default App
