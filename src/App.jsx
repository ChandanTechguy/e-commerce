import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from '../src/pages/Home'
import Shop from '../src/pages/Shop'
import Blog from "../src/pages/Blog";
import Contact from "../src/pages/Contact";
import About from "../src/pages/About";
import Cart from "../src/pages/Cart"
import Login from "../src/pages/Login"
import Wishlist from '../src/pages/Wishlist'

function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='home' element={<Home/>} />
      <Route path='shop' element={<Shop/>} />
      <Route path='blog' element={<Blog/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='about' element={<About/>} />
      <Route path='cart' element={<Cart/>} />
      <Route path='login' element={<Login/>} />
      <Route path='wishlist' element={<Wishlist/>} />
      </Route>
     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
