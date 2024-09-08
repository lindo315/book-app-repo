import React, { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import Breadcrumb from "../Components/Breadcrumb";
import BookModal from "../Components/BookModal";
import { books } from "../mockData";
import "../Styles/Shop.css";

const Shop = ({ addToCart }) => {
  const [activeSubject, setActiveSubject] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const subjects = ["All", ...new Set(books.map((book) => book.subject))];

  useEffect(() => {
    const results = books.filter(
      (book) =>
        (activeSubject === "All" || book.subject === activeSubject) &&
        (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredBooks(results);
  }, [activeSubject, searchTerm]);

  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = (book) => {
    addToCart({ ...book, quantity: 1 });
  };

  return (
    <section className="teacher-book-collection shop-page">
      <Breadcrumb items={["Home", "Shop"]} />
      <h2 className="collection-title">Educational Book Shop</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search books or authors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="search-icon" />
      </div>
      <div className="subject-filters">
        {subjects.map((subject) => (
          <button
            key={subject}
            className={`subject-button ${
              activeSubject === subject ? "active" : ""
            }`}
            onClick={() => setActiveSubject(subject)}
          >
            {subject}
          </button>
        ))}
      </div>
      <div className="books-grid">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <div className="book-cover-container1">
              <img src={book.cover} alt={book.title} className="book-cover" />
              <div className="subject-tag">{book.subject}</div>
            </div>
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">{book.author}</p>
              <p className="book-price">R{book.price.toFixed(2)}</p>
              <p className="book-description">{book.description}</p>
              <div className="book-actions">
                <button
                  className="read-more-button"
                  onClick={() => openModal(book)}
                >
                  Read More
                </button>
                <button
                  className="get-quote-button"
                  onClick={() => handleAddToCart(book)}
                >
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          </div>
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

export default Shop;
