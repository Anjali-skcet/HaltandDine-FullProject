import React from "react";
import Navbar from "../Navbar";
import "./Menu.css";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import Soup from '../../Images/Soup.jpg';
import Starter from '../../Images/Starter.jpg';
import Meals from '../../Images/orderonline.jpg';
import Biriyani from '../../Images/biriyani.jpg';
import Dessert from '../../Images/dessert.jpg';
import Beverages from '../../Images/beverages.jpg';

function Menu() {
  return (
    <div>
    {/*} <div className="menusec"></div>
      <div className="menunav">
      <h1>Menu</h1>
      <ul className="list">
      <li><Link to="/home">Home &gt;</Link></li>
      <li><Link to="/menu">Menu &gt;</Link></li>
      </ul>
      </div>*/}
      <div className="mes">
      <Navbar />
      <h2 className="topic">Our Menu</h2>
      {/*<h3>A place to pause, a place to feast!</h3>*/}
      <p>Our diverse menu caters to every palate, offering a wide range of delicious options.</p>
      <p>Explore our menu and discover a world of flavors waiting to be savored.</p>
      <div className="categories" style={{marginLeft:"30px"}}>
      {[
        { cat: 'Soups', img: Soup },
        { cat: 'Side Dishes', img: Starter },
        { cat: 'Main Course', img: Meals },
        { cat: 'Biriyani & Rice', img: Biriyani },
        { cat: 'Dessert', img: Dessert },
        { cat: 'Beverages', img: Beverages },
      ].map(({ cat, img }) => (
        <Link key={cat} to={`/menulist/${cat}`} className="category-item">
          <button style={{ backgroundImage: `url(${img})` }} />
          <span>{cat}</span>
        </Link>
      ))}
    </div>
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
