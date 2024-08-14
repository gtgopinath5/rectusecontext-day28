import React from 'react';
import './Pro.css';

export const Product = ({ product,cart,setCart }) => {
  const name = product.title.length > 30 ? product.title.substring(0, 30) + ".." : product.title;
  const des = product.description.length > 70 ? product.description.substring(0, 70) + ".." : product.description;

  const addCart=()=>{
    setCart([...cart,product])
  };
  const removeCart=()=>{
    setCart(cart.filter((c)=>c,id!==product.id))
  };
  return (
    <div className="product">
      <div className="img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <p>Price: Rs {product.price}</p>
        <p>{des}</p>
        <p>Category: {product.category}</p>
        <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        {
        cart.includes(product)?<button className='btn-remove' onClick={removeCart}> remove from Cart</button>:
        <button onClick={addCart}>Add To Cart</button>
        }
      </div>
    </div>
  );
};
