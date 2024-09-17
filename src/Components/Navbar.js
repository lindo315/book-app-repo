import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";
import { FaShoppingBasket, FaUser } from "react-icons/fa";

const Navbar = ({ cartItemCount, toggleCart }) => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="leftSection">
        <Link to="/" className="logo-link">
          <img
            src="/images/Logo-white.png"
            alt="Bokify Logo"
            className="logo"
          />
        </Link>
        <div className="navLinks">
          <Link
            to="/"
            className={`navLink ${location.pathname === "/" ? "active" : ""}`}
          >
            Tuis | Home
          </Link>
          <Link
            to="/about"
            className={`navLink ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            Ons | About us
          </Link>
          <Link
            to="/shop"
            className={`navLink ${
              location.pathname === "/shop" ? "active" : ""
            }`}
          >
            Werkboeke | Workbooks
          </Link>
          <Link
            to="/blog"
            className={`navLink ${
              location.pathname === "/blog" ? "active" : ""
            }`}
          >
            Ander Produkte | Other Products
          </Link>
          <Link
            to="/contact"
            className={`navLink ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
            Kontak | Contact
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
          <FaShoppingBasket />
          {cartItemCount > 0 && (
            <span className="cartCount">{cartItemCount}</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
