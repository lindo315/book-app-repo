import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartItemCount, toggleCart }) => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="leftSection">
        <Link to="/" className="logo-link">
          <img src="/images/Logo.png" alt="Bokify Logo" className="logo" />
        </Link>
        <div className="navLinks">
          <Link
            to="/"
            className={`navLink ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className={`navLink ${
              location.pathname === "/shop" ? "active" : ""
            }`}
          >
            Shop
          </Link>
          <Link
            to="/blog"
            className={`navLink ${
              location.pathname === "/blog" ? "active" : ""
            }`}
          >
            Blog
          </Link>
          <Link
            to="/about"
            className={`navLink ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`navLink ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="rightSection">
        {/* <div className="searchContainer">
          <input type="text" placeholder="Search" className="searchInput" />
          <FaSearch className="searchIcon" />
        </div> */}
        <FaUser className="icon userIcon" />
        <div className="cartIcon" onClick={toggleCart}>
          <FaShoppingCart />
          {cartItemCount > 0 && (
            <span className="cartCount">{cartItemCount}</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
