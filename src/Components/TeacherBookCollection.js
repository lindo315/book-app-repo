import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import BookModal from "./BookModal";
import "../Styles/TeacherBookCollection.css";

const TeacherBookCollection = ({ authors, addToCart }) => {
  const [activeSubject, setActiveSubject] = useState("All");
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allBooks = authors.flatMap((author) =>
    author.books.map((book) => ({
      ...book,
      author: author.name,
      teacherInfo: author.bio,
    }))
  );

  const subjects = ["All", ...new Set(allBooks.map((book) => book.subject))];

  const filteredBooks =
    activeSubject === "All"
      ? allBooks
      : allBooks.filter((book) => book.subject === activeSubject);

  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleGetQuote = (book) => {
    addToCart(book);
  };

  return (
    <section className="teacher-book-collection">
      <h2 className="collection-title">Books by Our Expert Educators</h2>
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
                  onClick={() => handleGetQuote(book)}
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

export default TeacherBookCollection;
