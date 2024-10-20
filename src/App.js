// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Collection from './Collection';
import About from './About';
import Contact from './Contact';
import Product from './Product';
import Login from './Login';
import Register from './Register';
import Navbar from './Navbar';
import CartPage from './Cart'; // Ensure correct import for CartPage

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if the user is logged in
  const [cartItems, setCartItems] = useState([]); // Track items in the cart

  // Load cart from localStorage on initial load
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  // Save cart to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add an item to the cart
  const handleAddToCart = (item) => {
    if (isLoggedIn) {
      setCartItems((prevItems) => [...prevItems, item]);
    } else {
      alert('You need to login to add items to the cart.');
    }
  };

  // Function to remove an item from the cart (for use in CartPage)
  const handleRemoveFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div className="px-4">
        <Navbar isLoggedIn={isLoggedIn} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/collection"
            element={<Collection addToCart={handleAddToCart} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                removeFromCart={handleRemoveFromCart}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
