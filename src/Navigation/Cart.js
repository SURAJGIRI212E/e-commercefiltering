// src/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import './Cart.css'; // Import the Cart styles
// import './Cart.css'; // Optional: Add styles for the cart

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className='container'>
      
   
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.img} alt={item.title} className="cart-item-img" />
              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p>${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

    </div>
    <div className="total-price">
        Total Price: {cart.reduce((total, item) => total + Number(item.price), 0)}
      </div>
       </div>
  );
}

export default Cart;