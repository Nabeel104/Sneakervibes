import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import NikeCourtVIsionLowNextNature from './image/NikeCourtVIsionLowNextNature.png';
import  Core from './image/576Core.png';
import LVTrainerSneaker from './image/LVTrainerSneaker.png';
import CHILDRENSHIGHTOPCANVASSNEAKER from './image/CHILDRENSHIGHTOPCANVASSNEAKER.png'

const Home = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/collection');
  };

  return (
    <div className="home-container">
      {/* Banner Section */}
      <div className="banner">
        <div className="banner-content">
          <h1>Welcome to SneakerVibez</h1>
          <p>Your perfect place for the best footwear.</p>
          <button className="shop-now-button" onClick={handleShopNowClick}>
            Shop Now
          </button>
        </div>
      </div>

      {/* Shoes Listing Section */}
      <div className="shoes-section">
        <h2>Our Latest Collection</h2>
        <div className="shoes-grid">
          <div className="shoe-card">
            <img src={NikeCourtVIsionLowNextNature} alt="Sporty Sneaker" className="shoe-image" />
            <h3>Nike Court VIsion Low Next Nature</h3>
            <p>Rs. 4,995.00</p>
          </div>

          <div className="shoe-card">
            <img src={Core} alt="Classic Leather" className="shoe-image" />
            <h3>576 Core</h3>
            <p>Rs. 8999</p>
          </div>

          <div className="shoe-card">
            <img src={LVTrainerSneaker} alt="Running Shoes" className="shoe-image" />
            <h3>LV Trainer Sneaker</h3>
            <p>Rs. 128,000</p>
          </div>

          <div className="shoe-card">
            <img src={CHILDRENSHIGHTOPCANVASSNEAKER} alt="Casual Slip-on" className="shoe-image" />
            <h3>CHILDREN'S HIGH TOP CANVAS SNEAKER</h3>
            <p>Rs.4999</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
