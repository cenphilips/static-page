import About from './About'
import Products from './Products'
import Contact from './Contact'
import Services from './Services'
import Nav from './Nav'
import { Routes, Route } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import AddStudent from './AddStudent'
import AddProduct from './AddProduct'
import UpdateStudent from './UpdateStudent'


function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/add-student' element={<AddStudent />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/update-student/:id' element={<UpdateStudent />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
