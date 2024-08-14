import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css";
export const Header = ({cart}) => {
  return (
    <div className='navbar'>
    <div className='logo'>shopping cart</div>
    <ul>
        <li>
            <Link to={"/"}>home</Link>
        </li>
        <li>
            <Link to={"/Cart"}><span className='cart-count'>{cart.length}</span>View Cart</Link>
        </li>
    </ul>
    </div>
  )
}
