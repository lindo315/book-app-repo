import React, { useState } from "react";
import { FaGraduationCap, FaBook, FaQuoteRight } from "react-icons/fa";
import "../Styles/TeacherBookCollection.css";

// We'll assume this data is passed as a prop from the parent component
const TeacherBookCollection = ({ authors }) => {
  const [activeSubject, setActiveSubject] = useState("All");

  // Extract unique subjects from all books
  const subjects = [
    "All",
    ...new Set(
      authors.flatMap((author) => author.books.map((book) => book.subject))
    ),
  ];

  const allBooks = authors.flatMap((author) =>
    author.books.map((book) => ({
      ...book,
      author: author.name,
      teacherInfo: author.bio,
    }))
  );

  const filteredBooks =
    activeSubject === "All"
      ? allBooks
      : allBooks.filter((book) => book.subject === activeSubject);

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
              <div className="teacher-info">
                {/* <FaGraduationCap className="icon" /> */}
                {/* <p>{book.teacherInfo}</p> */}
              </div>
              <p className="book-description">{book.description}</p>
              <div className="book-actions">
                <button className="action-btn read-more-btn">
                  <FaBook className="icon" /> Read More
                </button>
                <button className="action-btn get-quote-btn">
                  <FaQuoteRight className="icon" /> Get Quote
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeacherBookCollection;
