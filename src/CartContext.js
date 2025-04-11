// src/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const cartLength = cart.length;

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    console.log(`${item.title} added to cart!`);
  };
  const removeFromCart = (itemIndex) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== itemIndex));
    console.log(`Item removed from cart at index ${itemIndex}!`);
  };

 

  return (
    <CartContext.Provider value={{ cart, cartLength, addToCart,removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
};