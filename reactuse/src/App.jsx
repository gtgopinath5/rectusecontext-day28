
import './App.css'
import { Header } from './Components/Header'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Home } from './Components/Home'
import { Cart } from './Components/Cart'
import { useState } from 'react'
function App() {
  const [cart,setCart]=useState([])
  return (
    
    <>
      <BrowserRouter>
      <Header cart={cart}/>
      <div className='cointainer'>
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart}/>}/>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
      </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
