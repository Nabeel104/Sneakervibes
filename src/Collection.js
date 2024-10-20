// Collection.js
import React from 'react';
import './Collection.css';

// Import shoe images
import jordanSpizike from './image/Jordan_Spizike_Low.png';
import lvTrainer from './image/LV_Trainer_Sneaker.png';
import madeInUsa from './image/Made_in_USA_990v6.png';
import courtClassic from './image/CourtClassicResMensSneakers.png';
import freshFoam from './image/FreshFoamArishv4.png';
import gelKayano from './image/GEL_KAYANO31.png';
import KOOPA from './image/KOOPA.png';
import OnitsukaTiger from './image/OnitsukaTiger.png';
import Clothfirstshoes from './image/Clothfirstshoes.png';
import SKECHTRACKS from './image/SKECHTRACK.png';
import ChuckDeLuxeWedge from './image/Chuck70DeLuxeWedge.png';
import CarinaWomenSneakers from './image/Carina2.0WomenSneakers.png';

// Shoe data
const items = [
  { id: 1, name: 'Jordan Spizike Low', image: jordanSpizike, price: 150 },
  { id: 2, name: 'LV Trainer Sneaker', image: lvTrainer, price: 220 },
  { id: 3, name: 'Made in USA 990v6', image: madeInUsa, price: 180 },
  { id: 4, name: 'Court Classic Res Men\'s Sneakers', image: courtClassic, price: 120 },
  { id: 5, name: 'Fresh Foam Arish v4', image: freshFoam, price: 140 },
  { id: 6, name: 'GEL-KAYANO 31', image: gelKayano, price: 160 },
  { id: 7, name: 'Chuck 70 De Luxe Wedge', image: ChuckDeLuxeWedge, price: 130 },
  { id: 8, name: 'Carina 2.0 Women Sneakers', image: CarinaWomenSneakers, price: 110 },
  { id: 9, name: 'KOOPA', image: KOOPA, price: 90 },
  { id: 10, name: 'Onitsuka Tiger', image: OnitsukaTiger, price: 100 },
  { id: 11, name: 'Cloth First Shoes', image: Clothfirstshoes, price: 80 },
  { id: 12, name: 'SKECH TRACKS', image: SKECHTRACKS, price: 85 },
];

const categories = ['Men', 'Women', 'Kids'];

const Collection = ({ addToCart }) => (
  <div className="collection-container">
    <h1 className="collection-title">Our Exclusive Shoes Collection</h1>

    {/* Render each category section */}
    {categories.map((category, index) => (
      <div className="category-section" key={category}>
        <h2 className="category-title">{category}'s Collection</h2>
        <div className="collection-grid">
          {items.slice(index * 4, (index + 1) * 4).map((item) => (
            <div key={item.id} className="collection-item">
              <img src={item.image} alt={item.name} className="collection-image" />
              <p className="shoe-name">{item.name}</p>
              <p>${item.price}</p>
              <button className="buy-now" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Collection;
