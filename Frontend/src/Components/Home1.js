import React from "react";
import Navbar from "./Navbar";
import Slideshow from "./Slideshow";
import "../Components/Home1.css";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";
import Footer from "./Footer";
import masal from "../Images/masala.jpg";

function Home() {
    return (
      <div> 
      <div className="navbarstyle">
      <Navbar/>
      </div>
      <div className="homepage">
        </div>
        <div className="message">
                <h1>Welcome to Halt and Dine</h1>
                <h2 style={{marginBottom:"100px",color:"white"}}>Stop in for a taste of happiness !</h2>
                <div className="slideshow">
                <Slideshow interval={5000}>
                <Content2/>
                <Content1/>
                    <Content3/>
                    <Content4/>
                </Slideshow>
                </div>
            </div>
            <div className="about-us" style={{marginTop:"590px",backgroundImage:`url(${masal})`,backgroundAttachment:"fixed",color:"white",
              backgroundPosition:"bottom",backgroundSize:"cover",filter:"brightness(.9)"}}>
            <section className="intro">
            <h1 style={{paddingTop:"50px"}}>About Us</h1>
            <h2 style={{fontSize:"40px",fontWeight:"lighter",fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",color:"white"}}>
            We invite you to
            visit our restaurant</h2>
              <p>
                Welcome to our restaurant, where we serve delicious food with fresh ingredients. 
                Our chefs are passionate about creating unique dishes that will tantalize your taste buds. Come dine with us and experience the best in culinary delights.
              </p>
            </section>
      
            <section className="features">
              <h2 style={{color:"white"}}>Why people choose us?</h2>
              <p>Experience the perfect blend of delicious food and good fortune at Fork and Fortune!</p>
              <br></br>
              <br></br>
              <div className="feature-cards">
                <div className="feature-card"> 
                  <i className="fas fa-utensils"></i>
                  <h3>Menu for every taste</h3>
                  <p>Our diverse menu caters to every palate, offering a wide range of delicious options.</p>
                </div>
                <div className="feature-card">
                  <i className="fas fa-seedling"></i>
                  <h3>Always fresh ingredients</h3>
                  <p>We pride ourselves on using only the freshest ingredients to ensure the highest quality in every dish.</p>
                </div>
                <div className="feature-card">
                  <i className="fas fa-user"></i>
                  <h3>Experienced chefs</h3>
                  <p>Our skilled chefs bring years of culinary expertise to create exceptional dining experiences.</p>
                </div>
              </div>
            </section>
          </div>
            
            <Footer/>
            
        </div>
    );
}

export default Home;