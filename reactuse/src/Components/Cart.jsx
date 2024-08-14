import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cartt.css';

export const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure each product in the cart has a default quantity of 1 if not already set
    setCart(cart.map(product => ({ ...product, quantity: product.quantity || 1 })));
  }, []);

  useEffect(() => {
    // Calculate the total price based on the quantities and prices of the products
    setTotal(cart.reduce((acc, curr) => acc + (parseInt(curr.price) * curr.quantity), 0));
  }, [cart]);

  const handleQuantityChange = (id, delta) => {
    setCart(cart.map(product =>
      product.id === id ? { ...product, quantity: product.quantity + delta } : product
    ));
  };

  const handleRemoveProduct = (id) => {
    setCart(cart.filter(product => product.id !== id));
    
  };

  return (
    <>
      <h1 className='cart-heading'>CART PRODUCTS</h1>
      <div className='cart-container'>
        {
          cart.map((product) => (
            <div className="cart-product" key={product.id}>
              <div className="img">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="cart-product-details">
                <h3>{product.title}</h3>
                <p>Price: Rs {product.price}</p>
                <div className="quantity">
                  <button onClick={() => handleQuantityChange(product.id, -1)} disabled={product.quantity <= 1}>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
                </div>
                <button className="remove-button" onClick={() => handleRemoveProduct(product.id)}>Remove</button>
              </div>
            </div>
          ))
        }
      </div>
      <h2 className='cart-amt'>Total Amount: Rs {total}</h2>
    </>
  );
};
