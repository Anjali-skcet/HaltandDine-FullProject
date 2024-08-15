import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../Navbar';
import { useCart } from '../Cartcontext';
import './Menulist.css';

const Categoryitems = () => {
  const { category } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const { addToCart, cartItems } = useCart(); // Assuming cartItems is available in context
  const [cartCount, setCartCount] = useState(0); // State for cart notification count
  const [notification, setNotification] = useState(null); // State for popup notification

  useEffect(() => {
    fetchCategoryItems();
  }, [category]);

  const handleIncrement = (index) => {
    const updatedItems = [...menuItems];
    updatedItems[index].quantity += 1;
    setMenuItems(updatedItems);
  };

  const handleDecrement = (index) => {
    const updatedItems = [...menuItems];
    if (updatedItems[index].quantity > 0) {
      updatedItems[index].quantity -= 1;
      setMenuItems(updatedItems);
    }
  };

  const handleAddToCart = (item) => {
    if (item.quantity > 0) {
      addToCart(item);
      setCartCount(cartCount + item.quantity); // Update the cart count
      setNotification(`${item.quantity} of ${item.dishname} added to cart!`); // Set notification message
      setTimeout(() => setNotification(null), 5000); // Clear notification after 5 seconds
      console.log(`Added ${item.quantity} of ${item.dishname} to cart`);
    } else {
      setNotification("Please select a quantity before adding to cart");
      setTimeout(() => setNotification(null), 5000); // Clear notification after 5 seconds
    }
  };

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategoryItems = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/forkandfortune/getfullmenu`);
      const filteredItems = response.data.filter(item => item.category === category);
      const itemsWithQuantity = filteredItems.map(item => ({ ...item, quantity: 0 }));
      setMenuItems(itemsWithQuantity);
    } catch (error) {
      setError('Error fetching menu items');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='menudetails'>
      <Navbar cartCount={cartCount} /> {/* Pass cartCount to Navbar */}
      {notification && <div className="notification">{notification}</div>} {/* Display notification */}
      <div className="menu-items-container">
        <div className="menu-items">
          <h1>{category}</h1>
          <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
            <img src={`/Images/${item.image}`} alt={item.dishname} />
            <div className="item-details">
            <div className="item-header">
            <span>{item.dishname}</span>
            <span className="item-price">₹{item.dishprice}</span>
            </div>
            <p style={{marginBottom:"10px"}}>{item.description}</p>
            <div className="quantity-cart-con">
            <div className="quantity-con">
            <button onClick={() => handleDecrement(index)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleIncrement(index)}>+</button>
            </div>
            <button className="add-to-cart" onClick={() => handleAddToCart(item)}>
            Add to Cart
            </button>
            </div>
            </div>
            </li>
          ))}
          </ul>
          <Link to="/menu">
          <button className="back-to-menu">Back to Menu</button>
          </Link>
        </div>
        </div>
        </div>
      );
};

export default Categoryitems;
