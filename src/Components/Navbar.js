import React from "react";
import "../Styles/Navbar.css";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="leftSection">
        <img src="/images/Logo.png" alt="Bokify Logo" className="logo" />
        <div className="navLinks">
          <a href="#" className="navLink">
            Home
          </a>
          <a href="#" className="navLink">
            Shop
          </a>
          <a href="#" className="navLink">
            Blog
          </a>
          <a href="#" className="navLink">
            Page
          </a>
          <a href="#" className="navLink">
            Contact
          </a>
        </div>
      </div>
      <div className="rightSection">
        <div className="searchContainer">
          <input type="text" placeholder="Search" className="searchInput" />
          <FaSearch className="searchIcon" />
        </div>
        <FaUser className="icon" />
        <div className="cartIcon">
          <FaShoppingCart />
          <span className="cartCount">0</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
