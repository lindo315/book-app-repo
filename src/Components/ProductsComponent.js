import React from "react";
import { FaBook, FaCalendar, FaFileAlt, FaUser } from "react-icons/fa";
import "../Styles/ProductsComponent.css";

const ProductsComponent = () => {
  const products = [
    {
      icon: <FaBook />,
      title: "Part of Series",
      description:
        "Immerse yourself in our comprehensive homework series, designed to support continuous learning.",
    },
    {
      icon: <FaCalendar />,
      title: "From the Publisher",
      description:
        "Discover our engaging homework materials, where education and enjoyment converge beautifully.",
    },
    {
      icon: <FaFileAlt />,
      title: "Content Length",
      description:
        "With varied lengths tailored to each grade, our homework offers an immersive learning experience.",
    },
    {
      icon: <FaUser />,
      title: "Grade Level",
      description:
        "Our homework materials cater to various grade levels, ensuring age-appropriate content and challenges.",
    },
  ];

  return (
    <section className="products-section">
      <h2 className="products-title">Featured Homework Materials</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-icon">{product.icon}</div>
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsComponent;
