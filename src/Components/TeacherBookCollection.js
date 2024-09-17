import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { books } from "../mockData";
import "../Styles/TeacherBookCollection.css";

const TeacherBookCollection = () => {
  const [activeGrade, setActiveGrade] = useState("All");

  const grades = ["All", "3", "4", "5", "6", "7"];

  const filteredBooks =
    activeGrade === "All"
      ? books
      : books.filter((book) => book.number === activeGrade);

  const renderStars = (rating) => {
    return Array(5)
      .fill()
      .map((_, index) => (
        <FaStar
          key={index}
          className={index < Math.floor(rating) ? "star filled" : "star"}
        />
      ));
  };

  return (
    <section className="teacher-book-collection">
      <h2 className="collection-title">Educational Resources</h2>
      <div className="grade-filters">
        {grades.map((number) => (
          <button
            key={number}
            className={`grade-button ${activeGrade === number ? "active" : ""}`}
            onClick={() => setActiveGrade(number)}
          >
            Graad {number}
          </button>
        ))}
      </div>
      <div className="books-grid">
        {filteredBooks.map((book) => (
          <Link to={`/book/${book.id}`} key={book.id} className="book-card">
            <img src={book.cover} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title-1">{book.title}</h3>
              <p className="book-author">{book.author}</p>
              <div className="grade-div">
                <p className="book-grade">Graad: {book.number}</p>
              </div>

              {/* <div className="book-rating">{renderStars(book.rating)}</div> */}
              {/* <div className="book-price">
                <span className="current-price">
                  ${book.price.toFixed(2)} USD
                </span>
              </div> */}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TeacherBookCollection;
