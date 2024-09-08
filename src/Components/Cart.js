import React from "react";
import { FaTimes, FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../Styles/Cart.css";

const Cart = ({ cart, setCart, isOpen, toggleCart }) => {
  const navigate = useNavigate();

  const updateQuantity = (index, change) => {
    const newCart = [...cart];
    newCart[index].quantity += change;
    if (newCart[index].quantity < 1) {
      newCart.splice(index, 1);
    }
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.cover} alt={item.title} />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>R{(item.price * item.quantity).toFixed(2)} ZAR</p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(index, -1)}>
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(index, 1)}>
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="subtotal">
            <strong>Subtotal:</strong> R{subtotal.toFixed(2)} ZAR
          </div>
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
