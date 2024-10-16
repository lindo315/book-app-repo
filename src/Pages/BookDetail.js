import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaBookOpen,
  FaInfoCircle,
  FaCheck,
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaImage,
  FaGraduationCap,
  FaLanguage,
} from "react-icons/fa";
import Breadcrumb from "../Components/Breadcrumb";
import { books, mainBooks } from "../mockData";
import "../Styles/BookDetail.css";

const BookDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [mainBook, setMainBook] = useState(null);
  const [activeModule, setActiveModule] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [enlargedImageIndex, setEnlargedImageIndex] = useState(null);

  useEffect(() => {
    let foundMainBook = mainBooks.find((mb) => mb.id === id);
    let foundModule = books.find((b) => b.id === parseInt(id));

    if (foundMainBook) {
      setMainBook(foundMainBook);
      // Set the first module as active by default
      const firstModule = books.find((b) => b.mainBookId === foundMainBook.id);
      setActiveModule(firstModule);
    } else if (foundModule) {
      const associatedMainBook = mainBooks.find(
        (mb) => mb.id === foundModule.mainBookId
      );
      setMainBook(associatedMainBook);
      setActiveModule(foundModule);
    }
  }, [id]);

  if (!mainBook) return <div>Book not found</div>;

  const handleAddToCart = () => {
    setIsLoading(true);
    setTimeout(() => {
      addToCart(mainBook);
      setIsLoading(false);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 3000);
    }, 1500);
  };

  const handleModuleClick = (moduleId) => {
    const module = books.find((b) => b.id === moduleId);
    setActiveModule(module);
  };

  const handleImageClick = (index) => {
    setEnlargedImageIndex(index);
  };

  const handleNextImage = () => {
    const images = activeModule.images;
    setEnlargedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    const images = activeModule.images;
    setEnlargedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
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
      <Breadcrumb items={["Home", "Shop", mainBook.title]} />
      <div className="book-detail-content">
        <div className="main-book-section">
          <img
            src={mainBook.cover}
            alt={mainBook.title}
            className="main-book-cover"
          />
          <h1 className="book-title">{mainBook.title}</h1>
          <div className="book-meta">
            <span>
              <FaGraduationCap /> Graad: {mainBook.grade}
            </span>
            <span>
              <FaLanguage /> Language: Afrikaans
            </span>
          </div>
          <p className="book-description">{mainBook.description}</p>
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
        </div>
        <div className="modules-section">
          <h2>Modules in this book:</h2>
          <div className="modules-grid">
            {mainBook.modules.map((moduleNumber) => {
              const moduleBook = books.find(
                (b) =>
                  b.mainBookId === mainBook.id &&
                  b.subject === `Module ${moduleNumber}`
              );
              return (
                <div
                  key={moduleBook.id}
                  className={`module-item ${
                    activeModule && activeModule.id === moduleBook.id
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleModuleClick(moduleBook.id)}
                >
                  <img
                    src={moduleBook.cover}
                    alt={moduleBook.title}
                    className="module-cover"
                  />
                  <div className="module-info">
                    <h3>{moduleBook.title}</h3>
                    <p>{moduleBook.subject}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="module-preview-section">
        <h2>
          Module Preview:{" "}
          {activeModule ? activeModule.title : "Select a module"}
        </h2>
        {activeModule && (
          <div className="preview-images">
            {activeModule.images && activeModule.images.length > 0 ? (
              activeModule.images.map((image, index) => (
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
        )}
      </div>
      {enlargedImageIndex !== null && (
        <div className="enlarged-image-overlay">
          <div className="enlarged-image-container">
            <img
              src={activeModule.images[enlargedImageIndex]}
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
