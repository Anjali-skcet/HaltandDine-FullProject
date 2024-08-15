import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [user,setUser]=useState(null)
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem
        );
      } else {
        return [...prevItems, item];
      }
    });
  };


  const updateCartItemQuantity = (itemId, quantity) => {
    if (quantity < 0) return; // Prevent negative quantities
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };
  
  const removeCartItem = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter(item => item.id !== itemId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateCartItemQuantity, removeCartItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
