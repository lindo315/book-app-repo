import React from "react";
import { FaTimes, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../Styles/Cart.css";

const Cart = ({ cart, setCart, isOpen, toggleCart }) => {
  const navigate = useNavigate();

  const clearCart = () => {
    setCart([]);
  };

  const handleCheckout = () => {
    toggleCart(); // Close the cart
    navigate("/checkout"); // Navigate to the checkout page
  };

  return (
    <div className={`cart ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button className="close-cart" onClick={toggleCart}>
          <FaTimes />
        </button>
      </div>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.cover} alt={item.title} />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>Grade: {item.grade}</p>
                <p>Modules:</p>
                <ul>
                  {item.modules.map((module, index) => (
                    <li key={index}>Module {module}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <button className="checkout-button" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
          <button className="clear-cart-button" onClick={clearCart}>
            <FaTrash /> Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
