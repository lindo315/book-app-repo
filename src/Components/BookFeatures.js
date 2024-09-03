import React from "react";
import { FaTrophy, FaHandshake, FaBrain, FaPen } from "react-icons/fa";
import "../Styles/BookFeatures.css";

const features = [
  {
    icon: <FaTrophy />,
    title: "Best Quality",
    description:
      "Premium Book Elegance and Durability Combined in this Best Quality Accessory.",
  },
  {
    icon: <FaHandshake />,
    title: "Quick & Friendly",
    description:
      "Quick and friendly service for your tech needs. Expert assistance in minutes.",
  },
  {
    icon: <FaBrain />,
    title: "Easy to Learn",
    description:
      "Amaze with a skillful perform. Express joy wherever you go with easy-to-learn.",
  },
  {
    icon: <FaPen />,
    title: "Handwritten",
    description:
      "Printed Crisp black text on white, conveying timeless in a classic book.",
  },
];

const BookFeatures = () => {
  return (
    <section className="book-features">
      <h2 className="features-title">Book's Top Features</h2>
      <p className="features-subtitle">
        Your trusted source for the finest. We consistently provide products
        that embody excellence and gain your confidence.
      </p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
            <button className="read-more-btn">→</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookFeatures;
