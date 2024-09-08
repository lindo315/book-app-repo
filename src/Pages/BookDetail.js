import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../Components/Breadcrumb";
import { FaShoppingCart } from "react-icons/fa";
import "../Styles/BookDetail.css";

const BookDetail = ({ books, addToCart }) => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <div>Book not found</div>;

  return (
    <div className="book-detail-page">
      <Breadcrumb items={["Home", "Shop", book.title]} />
      <div className="book-detail-content">
        <div className="book-image">
          <img src={book.cover} alt={book.title} />
        </div>
        <div className="book-info">
          <div className="in-stock">In stock</div>
          <h1>{book.title}</h1>
          <div className="price">
            <span className="current-price">R{book.price.toFixed(2)} ZAR</span>
            {book.originalPrice && (
              <span className="original-price">
                R{book.originalPrice.toFixed(2)} ZAR
              </span>
            )}
          </div>
          <div className="rating">{/* Implement star rating here */}</div>
          <p className="description">{book.description}</p>
          <div className="author">By, {book.author}</div>
          <div className="stock-info">
            <span className="icon">📦</span> Copy in Stock This Time
          </div>
          <div className="book-details">
            <div>
              <strong>Book Type:</strong> {book.type}
            </div>
            <div>
              <strong>Publisher:</strong> {book.publisher}
            </div>
            <div>
              <strong>Language:</strong> {book.language}
            </div>
            <div>
              <strong>Paperback:</strong> {book.paperback}
            </div>
            <div>
              <strong>ISBN-09:</strong> {book.isbn}
            </div>
            <div>
              <strong>Dimension:</strong> {book.dimension}
            </div>
          </div>
          <div className="add-to-cart">
            <input type="number" defaultValue={1} min={1} />
            <button onClick={() => addToCart(book)}>
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
