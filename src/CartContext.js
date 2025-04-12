// src/CartContext.js
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage or initialize as an empty array
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const cartLength = cart.length;

  const addToCart = (item) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, item];
      localStorage.setItem('cart', JSON.stringify(newCart)); // Save to localStorage
      return newCart;
    });
    console.log(`${item.title} added to cart!`);
  };

  const removeFromCart = (itemIndex) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((_, index) => index !== itemIndex);
      localStorage.setItem('cart', JSON.stringify(newCart)); // Save to localStorage
      return newCart;
    });
    console.log(`Item removed from cart at index ${itemIndex}!`);
  };

  // Optional: Clear cart from localStorage when the component unmounts
  useEffect(() => {
    return () => {
      localStorage.removeItem('cart');
    };
  }, []);

  return (
    <CartContext.Provider value={{ cart, cartLength, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};