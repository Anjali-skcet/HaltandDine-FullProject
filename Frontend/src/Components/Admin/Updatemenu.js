import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Updatemenu.css';
import Adminnavbar from './Adminnavbar';
import Soup from '../../Images/Soup.jpg';
import Starter from '../../Images/Starter.jpg';
import Meals from '../../Images/orderonline.jpg';
import Biriyani from '../../Images/biriyani.jpg';
import Dessert from '../../Images/dessert.jpg';
import Beverages from '../../Images/beverages.jpg';

const UpdateMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [category, setCategory] = useState('');
  const [dishname, setDishName] = useState('');
  const [dishprice, setDishPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    fetchMenuItems();
  }, []); 

  const fetchMenuItems = async () => {
    try {
      const response = await axios.get('http://localhost:8080/forkandfortune/getfullmenu');
      setMenuItems(response.data);
    } catch (error) {
      console.error('Error fetching menu items:', error);
    }
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    if (category && dishname && dishprice && description && image) {
      try {
        const newItem = { category, dishname, dishprice, description, image };
        await axios.post('http://localhost:8080/forkandfortune/createmenu', newItem);
        setMenuItems([...menuItems, newItem]);
        setCategory('');
        setDishName('');
        setDishPrice('');
        setDescription('');
        setImage('');
      } catch (error) {
        console.error('Error adding menu item:', error);
      }
    }
  };

  return (
    <div className='image'>
      <Adminnavbar />
      <div className="update-menu">
        <h1>Update Menu</h1>
        <br/><br/>
        <form onSubmit={handleAddItem} className="menu-form">
          <label>
            Category:
            <select value={category} onChange={(e) => setCategory(e.target.value)} required style={{marginLeft:"60px"}}>
              <option value="">Select Category</option>
              <option value="Soups">Soups</option>
              <option value="Side Dishes">Side Dishes</option>
              <option value="Main Course">Main Course</option>
              <option value="Biriyani & Rice">Biriyani/Rice</option>
              <option value="Dessert">Dessert</option>
              <option value="Beverages">Beverages</option>
            </select>
          </label>
          <label>
            Item Name:
            <input 
              type="text" 
              value={dishname} 
              onChange={(e) => setDishName(e.target.value)} 
              required 
            />
          </label>
          <label>
            Item Price:
            <input 
              type="text"
              inputMode='numeric' 
              value={dishprice} 
              onChange={(e) => setDishPrice(e.target.value)} 
              required 
              style={{marginLeft:"48px"}}
            />
          </label>
          <label>
          Image URL:
          <input 
          type="text" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
          required 
          style={{marginLeft:"35px"}}
          />
          </label>
          <label>
            Description:
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              required 
              style={{marginLeft:"38px",width:"200px",fontFamily:"Mooli",fontSize:"18px"}}
            />
          </label>
          <br></br>
          <button type="submit">Add Item</button>
        </form>
        <h2>Menu Categories</h2>
        <div className="menu-categories" style={{marginLeft:"30px"}}>
          {[
            { cat: 'Soups', img: Soup },
            { cat: 'Side Dishes', img: Starter },
            { cat: 'Main Course', img: Meals },
            { cat: 'Biriyani & Rice', img: Biriyani },
            { cat: 'Dessert', img: Dessert },
            { cat: 'Beverages', img: Beverages },
          ].map(({ cat, img }) => (
            <Link key={cat} to={`/menu/${cat}`} className="menu-category-item">
              <button style={{ backgroundImage: `url(${img})` }} />
              <span>{cat}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpdateMenu;
