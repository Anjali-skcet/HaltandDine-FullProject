import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './Cartcontext';
import './Cart.css';

const Cart = () => {
  const { cartItems, updateCartItemQuantity, removeCartItem, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [notification, setNotification] = useState('');

  const handleCheckout = () => {
    if (!paymentMethod) {
      setNotification('Please select a payment method');
      return;
    }
    // Implement checkout logic here
    setNotification(`Proceeding to checkout with ${paymentMethod}`);
    clearCart(); // Clear the cart after checkout
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.dishprice * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {notification && <div className="notification">{notification}</div>}
      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={`/Images/${item.image}`} alt={item.dishname} />
                <div className="cart-item-details">
                  <div className="item-header">
                    <span>{item.dishname}</span>
                    <span className="item-price">₹{item.dishprice}</span>
                  </div>
                  <div className="quantity-cart-container">
                    <div className="quantity-controls">
                      <button 
                        onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 0}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button className="remove-item-btn" onClick={() => removeCartItem(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h2>Total: ₹{calculateTotal()}</h2>
            <div className="payment-container">
              <label htmlFor="payment-method">Select Payment Method:</label>
              <select
                id="payment-method"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="">Choose...</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="UPI">UPI</option>
                <option value="Net Banking">Net Banking</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
              </select>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>Pay Now</button>
            <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/menu">
            <button className="back-to-menu">Back to Menu</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
