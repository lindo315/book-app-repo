import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import "../Styles/AddToCartNotification.css";

const AddToCartNotification = ({ book, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for fade-out animation before closing
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`add-to-cart-notification ${isVisible ? "visible" : ""}`}>
      <FaCheckCircle className="check-icon" />
      <p className="message">"{book.title}" has been added to your cart!</p>
    </div>
  );
};

export default AddToCartNotification;
