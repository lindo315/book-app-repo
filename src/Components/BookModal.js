import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import emailjs from "emailjs-com";
import "../Styles/BookModal.css";

const BookModal = ({ book, isOpen, onClose, addToCart }) => {
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    setQuoteForm({ ...quoteForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_2oyomxg", // Replace with your EmailJS service ID
        "template_2xhbn4b", // Replace with your EmailJS template ID
        {
          from_name: quoteForm.name,
          from_email: quoteForm.email,
          subject: `Quote Request for ${book.title}`,
          message: quoteForm.message,
          book_title: book.title,
          book_author: book.author,
          book_price: book.price,
        }
      )
      .then((response) => {
        setIsSubmitting(false);
        setSubmitMessage("Your quote request has been sent successfully!");
        setQuoteForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setIsSubmitting(false);
        setSubmitMessage(
          "There was an error sending your quote request. Please try again."
        );
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-modal" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="modal-body">
          <img src={book.cover} alt={book.title} className="modal-book-cover" />
          <div className="modal-book-info">
            <h2>{book.title}</h2>
            <p className="modal-book-author">by {book.author}</p>
            <p className="modal-book-price">R{book.price.toFixed(2)} ZAR</p>
            <p className="modal-book-description">{book.description}</p>
            <div className="modal-book-details">
              <p>
                <strong>Subject:</strong> {book.subject}
              </p>
              <p>
                <strong>Type:</strong> {book.type}
              </p>
              <p>
                <strong>Publisher:</strong> {book.publisher}
              </p>
              <p>
                <strong>Language:</strong> {book.language}
              </p>
              <p>
                <strong>ISBN:</strong> {book.isbn}
              </p>
              <p>
                <strong>Dimensions:</strong> {book.dimension}
              </p>
              <p>
                <strong>Pages:</strong> {book.pages}
              </p>
              <p>
                <strong>Rating:</strong> {book.rating.toFixed(1)}/5
              </p>
            </div>
          </div>
        </div>
        <div className="quote-form">
          <h3>Request a Quote</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={quoteForm.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={quoteForm.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={quoteForm.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Request Quote"}
            </button>
            {submitMessage && <p className="submit-message">{submitMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
