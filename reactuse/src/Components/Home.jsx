import React, { useState } from 'react'
import data from "../assets/products.json"
import { Product } from './Product';
import './Hom.css'
export const Home = ({cart,setCart}) => {
    const [products] =useState(data);
  return (
    <>
    <h1 className='product-heading'>PRODUCTS</h1>
    <div className='productcontainer'>
        {products.map((product)=>(
            <Product key={product.id} product={product} cart={cart} setCart={setCart}/>
        ))}
    </div>
    </>
  )
}
