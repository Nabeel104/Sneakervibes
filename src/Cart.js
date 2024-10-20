// CartPage.js
import React from 'react';
import './Collection.css'; // Reusing the same styles for simplicity

const CartPage = ({ cartItems, removeFromCart }) => {
  const renderEmptyCartMessage = () => (
    <p>Your cart is empty. Start shopping!</p>
  );

  const renderCartItems = () => (
    <div className="cart-flex">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-item-image" />
          <div className="cart-item-details">
            <h2 className="cart-item-name">{item.name}</h2>
            <p className="cart-item-price">${item.price.toFixed(2)}</p>
            <div className="cart-item-buttons">
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
              <button className="buy-button">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? renderEmptyCartMessage() : renderCartItems()}
    </div>
  );
};

export default CartPage;
