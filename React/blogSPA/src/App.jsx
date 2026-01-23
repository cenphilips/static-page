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

import Login from './pages/login'
import Register from './pages/Register'
import { Queryclient, QueryClientProvider } from '@tanstack/react-query'

//create a client
const queryClient = new QueryClient()


function App() {

  return (
    <QueryClientProvider client={queryClient}>
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
        <Route path='/pages/login' element={<Login />} />
        <Route path='/pages/register' element={<Register />} />
      </Routes>
      <Footer />
    </>
    </QueryClientProvider>
  )
}

export default App
