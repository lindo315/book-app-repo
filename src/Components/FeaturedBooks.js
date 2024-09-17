import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaBookOpen,
  FaQuoteRight,
} from "react-icons/fa";
import BookModal from "./BookModal";
import "../Styles/FeaturedBooks.css";

const books = [
  {
    id: 1,
    title: "Interactive Mathematics: Grade 5",
    author: "Emily Thornton",
    description:
      "A comprehensive math textbook that makes learning fun and engaging for 5th graders.",
    cover: "/images/Graad 7 Musiek Cover.png",
    rating: 4.8,
    pages: 250,
    featuredQuote: "Makes math come alive for young minds!",
    price: 29.99,
    subject: "Mathematics",
    type: "Physical",
    publisher: "Luminous Publishing",
    language: "English",
    isbn: "978-1234567890",
    dimension: "8.5 x 11 inches",
  },
  {
    id: 2,
    title: "Coding for Kids: Python Basics",
    author: "Michael Chen",
    description:
      "An introductory programming book that teaches children the fundamentals of Python in a fun, interactive way.",
    cover: "/images/Grade 6 Space Theme Module 1.png",
    rating: 4.9,
    pages: 200,
    featuredQuote: "The perfect start for young coders!",
    price: 34.99,
    subject: "Computer Science",
    type: "Physical",
    publisher: "TechKids Press",
    language: "English",
    isbn: "978-0987654321",
    dimension: "7 x 9 inches",
  },
  {
    id: 3,
    title: "The World of Science: Middle School Edition",
    author: "Dr. Sarah Johnson",
    description:
      "An all-encompassing science textbook covering biology, chemistry, and physics for middle school students.",
    cover: "/images/Graad 7 Musiek Cover.png",
    rating: 4.7,
    pages: 300,
    featuredQuote: "Ignites a passion for scientific discovery!",
    price: 39.99,
    subject: "Science",
    type: "Physical",
    publisher: "Curiosity Press",
    language: "English",
    isbn: "978-1122334455",
    dimension: "8 x 10 inches",
  },
];

const FeaturedBooks = ({ addToCart }) => {
  const [currentBookIndex, setCurrentBookIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const nextBook = () => {
    setIsAnimating(true);
    setCurrentBookIndex((prevIndex) => (prevIndex + 1) % books.length);
  };

  const prevBook = () => {
    setIsAnimating(true);
    setCurrentBookIndex(
      (prevIndex) => (prevIndex - 1 + books.length) % books.length
    );
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const currentBook = books[currentBookIndex];

  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleGetQuote = (book) => {
    addToCart(book);
    navigate("/shop");
  };

  return (
    <section className="featured-books">
      <h2 className="section-title">Featured Books</h2>
      <div className="book-showcase">
        <button className="scroll-button" onClick={prevBook}>
          <FaChevronLeft />
        </button>
        <div className={`book-display ${isAnimating ? "animating" : ""}`}>
          <div className="book-cover-container">
            <img
              src={currentBook.cover}
              alt={currentBook.title}
              className="book-cover"
            />
            <div className="book-rating">
              <FaStar className="star-icon" />
              <span>{currentBook.rating.toFixed(1)}</span>
            </div>
          </div>
          <div className="book-info">
            <h3 className="book-title">{currentBook.title}</h3>
            <p className="book-author">by {currentBook.author}</p>
            <p className="book-description">{currentBook.description}</p>
            <div className="book-details">
              <div className="book-pages">
                <FaBookOpen className="book-icon" />
                <span>{currentBook.pages} pages</span>
              </div>
              <div className="book-quote">
                <FaQuoteRight className="quote-icon" />
                <span>"{currentBook.featuredQuote}"</span>
              </div>
            </div>
            <div className="book-actions">
              <button
                className="read-more-button"
                onClick={() => openModal(currentBook)}
              >
                Read More
              </button>
              <button
                className="get-quote-button"
                onClick={() => handleGetQuote(currentBook)}
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
        <button className="scroll-button" onClick={nextBook}>
          <FaChevronRight />
        </button>
      </div>
      <div className="book-indicators">
        {books.map((book, index) => (
          <span
            key={book.id}
            className={`indicator ${
              index === currentBookIndex ? "active" : ""
            }`}
            onClick={() => setCurrentBookIndex(index)}
          ></span>
        ))}
      </div>
      {selectedBook && (
        <BookModal
          book={selectedBook}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default FeaturedBooks;
