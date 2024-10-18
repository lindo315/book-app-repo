import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FaShoppingCart,
  FaCheck,
  FaImage,
  FaGraduationCap,
  FaLanguage,
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
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
    setEnlargedImageIndex((prevIndex) =>
      prevIndex === activeModule.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setEnlargedImageIndex((prevIndex) =>
      prevIndex === 0 ? activeModule.images.length - 1 : prevIndex - 1
    );
  };

  const handleCloseEnlarged = () => {
    setEnlargedImageIndex(null);
  };

  return (
    <div className="book-detail-page">
      <Breadcrumb items={["Home", "Shop", mainBook.title]} />
      <div className="main-book-section">
        <div className="main-book-info">
          <img
            src={mainBook.cover}
            alt={mainBook.title}
            className="main-book-cover"
          />
          <div className="main-book-details">
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
        <div className="enlarged-image-overlay" onClick={handleCloseEnlarged}>
          <div
            className="enlarged-image-container"
            onClick={(e) => e.stopPropagation()}
          >
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
