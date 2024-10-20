import React from 'react';
import './NewArrivals.css';


const NewArrivals = () => {
  const newArrivals = [
    { id: 1, name: "New Arrival 1", imgSrc: "", price: "$120" },
    { id: 2, name: "New Arrival 2", imgSrc: "", price: "$150" },
    { id: 3, name: "New Arrival 3", imgSrc: "", price: "$100" },
    { id: 4, name: "New Arrival 4", imgSrc: "", price: "$180" },
    { id: 5, name: "New Arrival 5", imgSrc: "", price: "$130" },
    { id: 6, name: "New Arrival 6", imgSrc: "", price: "$160" },
    { id: 7, name: "New Arrival 7", imgSrc: "", price: "$140" },
    { id: 8, name: "New Arrival 8", imgSrc: "", price: "$175" },
    { id: 9, name: "New Arrival 9", imgSrc: "", price: "$110" },
    { id: 10, name: "New Arrival 10", imgSrc: "", price: "$155" },
  ];

  return (
    <div className="new-arrivals">
      <h1 className="section-title">New Arrivals</h1>
      <div className="arrivals-grid">
        {newArrivals.map((shoe) => (
          <div className="arrival-item" key={shoe.id}>
            <img src={shoe.imgSrc} alt={shoe.name} className="arrival-image" />
            <p className="arrival-name">{shoe.name}</p>
            <p className="arrival-price">{shoe.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;

