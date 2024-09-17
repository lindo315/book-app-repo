import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaShoppingCart,
  FaBookOpen,
  FaInfoCircle,
  FaCheck,
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaImage,
  FaStar,
  FaGraduationCap,
  FaLanguage,
  FaCalendarAlt,
} from "react-icons/fa";
import Breadcrumb from "../Components/Breadcrumb";
import { books } from "../mockData";
import "../Styles/BookDetail.css";

const BookDetail = ({ addToCart }) => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoading, setIsLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [enlargedImageIndex, setEnlargedImageIndex] = useState(null);

  if (!book) return <div>Book not found</div>;

  const handleAddToCart = () => {
    setIsLoading(true);
    setTimeout(() => {
      addToCart(book);
      setIsLoading(false);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 3000);
    }, 1500);
  };

  const handleImageClick = (index) => {
    setEnlargedImageIndex(index);
  };

  const handleNextImage = () => {
    setEnlargedImageIndex((prevIndex) =>
      prevIndex === book.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setEnlargedImageIndex((prevIndex) =>
      prevIndex === 0 ? book.images.length - 1 : prevIndex - 1
    );
  };

  const handleCloseEnlarged = () => {
    setEnlargedImageIndex(null);
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "/images/page.png"; // Replace with an actual fallback image path
  };

  return (
    <div className="book-detail-page">
      <Breadcrumb items={["Home", "Shop", book.title]} />
      <div className="book-detail-content">
        <div className="book-image-section">
          <img src={book.cover} alt={book.title} className="book-cover" />
        </div>
        <div className="book-info-section">
          <h1 className="book-title">{book.title}</h1>
          <p className="book-author">by {book.author}</p>
          <div className="book-rating">
            {/* <FaStar className="star-icon" /> */}
            <span>
              {/* {book.rating.toFixed(1)} ({book.reviews} reviews) */}
            </span>
          </div>
          {/* <p className="book-price">${book.price.toFixed(2)}</p> */}
          <p className="book-description1">{book.description}</p>
          <div className="book-meta">
            <span>
              <FaGraduationCap /> Graad: {book.grade}
            </span>
            <span>
              <FaBookOpen /> Module: {book.subject}
            </span>
            <span>
              <FaLanguage /> Language: {book.language}
            </span>
            {/* <span>
              <FaCalendarAlt /> Published: {book.publishDate}
            </span> */}
          </div>
          <button
            className={`add-to-cart-btn ${isLoading ? "loading" : ""} ${
              isAdded ? "added" : ""
            }`}
            onClick={handleAddToCart}
            disabled={isLoading || isAdded}
          >
            {isLoading ? (
              <div className="loading-spinner"></div>
            ) : isAdded ? (
              <>
                <FaCheck /> Added to Cart
              </>
            ) : (
              <>
                <FaShoppingCart /> Add Quote
              </>
            )}
          </button>
          {/* <div className="book-meta">
            <span>
              <strong>Module:</strong> {book.subject}
            </span>
            <span>
              <strong>Graad:</strong> {book.grade}
            </span>
          </div> */}
        </div>
      </div>
      <div className="book-tabs">
        <button
          className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => setActiveTab("overview")}
        >
          <FaInfoCircle /> Overview
        </button>
        <button
          className={`tab-btn ${activeTab === "preview" ? "active" : ""}`}
          onClick={() => setActiveTab("preview")}
        >
          <FaBookOpen /> Preview
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "overview" && (
          <div className="book-overview">
            <h2>About this book</h2>
            <p>{book.description}</p>
            <div className="key-features">
              <h3>Key Features</h3>
              <ul>
                <li>Engaging content tailored for {book.grade} students</li>
                <li>Interactive exercises and activities</li>
                <li>Aligned with current educational standards</li>
                <li>Includes digital resources and supplementary materials</li>
              </ul>
            </div>
          </div>
        )}
        {activeTab === "preview" && (
          <div className="book-preview">
            <h2>Book Preview</h2>
            <div className="preview-images">
              {book.images && book.images.length > 0 ? (
                book.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Preview page ${index + 1}`}
                    className="preview-image"
                    onClick={() => handleImageClick(index)}
                    onError={handleImageError}
                  />
                ))
              ) : (
                <div className="no-preview">
                  <FaImage />
                  <p>No preview images available</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {enlargedImageIndex !== null && (
        <div className="enlarged-image-overlay">
          <div className="enlarged-image-container">
            <img
              src={book.images[enlargedImageIndex]}
              alt={`Enlarged preview ${enlargedImageIndex + 1}`}
              className="enlarged-image"
            />
            <button className="close-enlarged" onClick={handleCloseEnlarged}>
              <FaTimes />
            </button>
            <button className="prev-image" onClick={handlePrevImage}>
              <FaArrowLeft />
            </button>
            <button className="next-image" onClick={handleNextImage}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
