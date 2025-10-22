import { useState } from 'react'


function App() {
  const [name, setName] = useState("Ikenna")

  const callSetName = () => {
    setName("Remigius")
  }
  return (
    <>
     <h1>Welcome to React class</h1>
     <p>My name is {name}</p>
     <button onClick={callSetName}>Change name</button>
    </>
  )
}

export default App
