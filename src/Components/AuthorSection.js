import React from "react";
import { FaStar, FaBookOpen, FaChalkboardTeacher } from "react-icons/fa";
import "../Styles/AuthorSection.css";

const AuthorSection = ({ author }) => {
  return (
    <div className="author-section">
      <div className="author-image-container">
        <img src={author.image} alt={author.name} className="author-image" />
        <div className="bestseller-tag">Expert Educator</div>
        <div className="rating">
          <div className="avatar-group">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="avatar"
                style={{
                  backgroundImage: `url(https://i.pravatar.cc/150?img=${
                    index + 20
                  })`,
                }}
              ></div>
            ))}
          </div>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <FaStar key={index} className="star" />
            ))}
          </div>
          <div className="average-rating">Rating {author.rating}</div>
        </div>
      </div>
      <div className="author-info">
        <h3 className="meet-author">Featured Author</h3>
        <h2 className="author-name">{author.name}</h2>
        <p className="author-bio">{author.bio}</p>
        <div className="author-stats">
          <div className="stat">
            <FaBookOpen className="stat-icon" />
            <span className="stat-number">{author.booksPublished}</span>
            <span className="stat-label">Books Published</span>
          </div>
          <div className="stat">
            <FaChalkboardTeacher className="stat-icon" />
            <span className="stat-number">{author.classroomsImpacted}+</span>
            <span className="stat-label">Classrooms Impacted</span>
          </div>
        </div>
        <div className="author-actions">
          <button className="contact-button">Contact Author</button>
          <button className="shop-button">View Books</button>
        </div>
      </div>
    </div>
  );
};

export default AuthorSection;
