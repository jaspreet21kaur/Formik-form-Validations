import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Base from './components/Base'
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'


const App = () => {
  return (
<BrowserRouter>

 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/services' element={<Services/>}/>
  <Route path='/contact' element={<Contact/>}/>
 </Routes>
 </BrowserRouter>
  )
}

export default App