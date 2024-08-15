import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Viewreview.css';
import Adminnavbar from './Adminnavbar';

const reviews = [
  {
    name: 'Aarav Patel',
    review: 'The experience was fantastic! The staff was attentive, and the dishes were a perfect blend of flavors.',
    date: 'August 11, 2024',
  },
  {
    name: 'Meera Iyer',
    review: 'Absolutely loved the ambiance! The food was served hot and fresh, making the entire experience worthwhile.',
    date: 'July 30, 2024',
  },
  {
    name: 'Rohan Desai',
    review: 'A delightful dining experience. The variety on the menu is impressive, and everything we ordered was delicious.',
    date: 'June 25, 2024',
  },
  {
    name: 'Ananya Singh',
    review: 'The service was top-notch, and the food was cooked to perfection. Definitely coming back!',
    date: 'May 18, 2024',
  },
  {
    name: 'Vikram Sharma',
    review: 'Had an amazing time here. The staff were courteous, and the desserts were out of this world!',
    date: 'April 5, 2024',
  },
  {
    name: 'Pooja Verma',
    review: 'The restaurant exceeded my expectations! Every dish was full of flavor, and the service was prompt.',
    date: 'March 10, 2024',
  },
];

const ReviewPage = () => {
  return (
    <div className='reviewbg'>
    <Adminnavbar/>
    <div className="review-container">
      <h1>Customer Reviews</h1>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
        className="re-carousel"
      >
        {reviews.map((review, index) => (
          <div key={index} className="re-slide">
            <div className="re-content">
              <h3>{review.name}</h3>
              <p>"{review.review}"</p>
              <span>{review.date}</span>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
    </div>
  );
};

export default ReviewPage;
