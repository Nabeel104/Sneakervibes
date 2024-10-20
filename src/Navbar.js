import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from './image/logo.png';
import cartIcon from './image/cart-icon.png';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleAuthClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false); // Log out
    } else {
      // Redirect to login page
      window.location.href = '/login';
    }
  };

  return (
    <header className='navbar'>
      <div className='navbar-logo'>
        <NavLink to='/' className='navbar-logo-link'>
          <img src={logo} alt='logo' className='logo-image' />
        </NavLink>
      </div>
      <nav className='navbar-menu'>
        <ul className='navbar-list'>
          <li className='navbar-item'>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}>
              Home
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink to='/collection' className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}>
              Collection
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}>
              About Us
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink to='/contact' className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className='navbar-auth'>
        <button className='auth-button' onClick={handleAuthClick}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
      <NavLink to='/cart' className='navbar-icon-link'>
          <img src={cartIcon} alt='cart' className='icon' />
        </NavLink>
    </header>
  );
};

export default Navbar;
