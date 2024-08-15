import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Adminnavbar from './Adminnavbar';
import './Categoryitems.css';

const Categoryitems = () => {
  const { category } = useParams();
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchCategoryItems();
  }, [category]);

  const fetchCategoryItems = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/forkandfortune/getfullmenu`);
      const filteredItems = response.data.filter(item => item.category === category);
      setMenuItems(filteredItems);
    } catch (error) {
      console.error('Error fetching menu items:', error);
    }
  };

  return (
    <div className="category-items-container">
      <Adminnavbar />
      <div className="category-items">
        <h1>{category}</h1>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              {/* Replace with actual path to your images */}
              <img src={`/Images/${item.image}`} alt={item.dishname} className='menuimage' />
              {item.dishname} - ₹{item.dishprice}<br></br><br></br>
              {item.description}
            </li>
          ))}
        </ul>
        <Link to="/update-menu">
          <button>Back to Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default Categoryitems;
