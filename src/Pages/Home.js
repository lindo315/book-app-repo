import React, { useRef, useState, useEffect } from "react";
// import Navbar from "../Components/Navbar";
import AuthorSection from "../Components/AuthorSection";
// import FeaturedBooks from "../Components/FeaturedBooks";
import BookFeatures from "../Components/BookFeatures";
import TeacherBookCollection from "../Components/TeacherBookCollection";
import ProductsComponent from "../Components/ProductsComponent";
import Testimonials from "../Components/Testimonials";
import "../Styles/Home.css";

const Home = ({ addToCart }) => {
  const teacherBookCollectionRef = useRef(null);

  const scrollToTeacherBookCollection = () => {
    teacherBookCollectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const [currentBookIndex, setCurrentBookIndex] = useState(0);

  const bookCovers = [
    "/images/Graad 6 Ruimte.png",
    "/images/Graad 7 Tegnologie.png",
    "/images/Graad 4 Sport.png",
  ];

  const authors = [
    {
      name: "Elna Pretorius",
      image: "/images/woman.png",
      bio: "With over 20 years of experience in primary education, Elna Pretorius brings a wealth of knowledge to her engaging and innovative teaching materials.",
      booksPublished: 12,
      classroomsImpacted: 5000,
      rating: 4.9,
      books: [
        {
          id: 1,
          title: "Interactive Mathematics: Grade 5",
          cover: "/images/page.png",
          subject: "Mathematics",
          description:
            "A comprehensive math textbook that makes learning fun and engaging for 5th graders.",
          price: 29.99,
          type: "Physical",
          publisher: "Luminous Publishing",
          language: "English",
          isbn: "978-1234567890",
          dimension: "8.5 x 11 inches",
          pages: 250,
          rating: 4.8,
        },
        {
          id: 2,
          title: "STEM Projects for Young Learners",
          cover: "/images/page.png",
          subject: "Science",
          description:
            "Exciting hands-on projects that integrate science, technology, engineering, and math for primary school students.",
          price: 34.99,
          type: "Physical",
          publisher: "Luminous Publishing",
          language: "English",
          isbn: "978-2345678901",
          dimension: "8 x 10 inches",
          pages: 200,
          rating: 4.7,
        },
      ],
    },
    {
      name: "Lindie Isherwood",
      image: "/images/woman.png",
      bio: "A passionate advocate for STEM education, Lindie Isherwood combines his background in computer science with his teaching experience to create cutting-edge resources.",
      booksPublished: 8,
      classroomsImpacted: 3500,
      rating: 4.8,
      books: [
        {
          id: 3,
          title: "Coding for Kids: Python Basics",
          cover: "/images/page.png",
          subject: "Computer Science",
          description:
            "An introductory programming book that teaches children the fundamentals of Python in a fun, interactive way.",
          price: 32.99,
          type: "Physical",
          publisher: "TechKids Press",
          language: "English",
          isbn: "978-3456789012",
          dimension: "7.5 x 9.5 inches",
          pages: 180,
          rating: 4.9,
        },
        {
          id: 4,
          title: "Digital Literacy in the 21st Century",
          cover: "/images/page.png",
          subject: "Computer Science",
          description:
            "A comprehensive guide to navigating the digital world, covering topics from online safety to critical thinking in the age of information.",
          price: 36.99,
          type: "Physical",
          publisher: "TechKids Press",
          language: "English",
          isbn: "978-4567890123",
          dimension: "8 x 10 inches",
          pages: 220,
          rating: 4.6,
        },
      ],
    },
  ];

  return (
    <div className="container">
      {/* <Navbar /> */}
      <main className="main">
        <section className="hero-section">
          <div className="content">
            <div className="textContent">
              {/* <div className="welcome-div">
                <h2 className="subtitle">Welcome to</h2>
              </div> */}

              {/* <h1 className="title">Briljante Boeke</h1> */}
              <div className="big-logo">
                <img
                  src="/images/Logo.png"
                  alt="Briljante Boeke Logo"
                  className="logo-big"
                />
              </div>
              {/* <h2 className="subtitle1">Empowering Education</h2> */}
              <button
                className="button"
                onClick={scrollToTeacherBookCollection}
              >
                Verken Ons Werkboeke
                <br></br>
                Explore Our Books
              </button>
            </div>
            <div className="imageContent">
              <img
                src={bookCovers[currentBookIndex]}
                alt="Featured book cover"
                className="bookCover currentBookCover"
              />
              <img
                src={bookCovers[(currentBookIndex + 1) % bookCovers.length]}
                alt="Featured book cover"
                className="bookCover nextBookCover"
              />
              <img
                src={bookCovers[(currentBookIndex + 2) % bookCovers.length]}
                alt="Featured book cover"
                className="bookCover lastBookCover"
              />
            </div>
          </div>
          <div className="ring-design">
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
          </div>
        </section>

        <section className="introduction-section">
          <h2 className="section-title1">
            Ontmoet die Ontwerpers <br></br>Meet Our Expert Educators
          </h2>
          <p className="section-description">
            Our authors are not just writers – they're experienced educators
            passionate about transforming the classroom experience. With years
            of hands-on teaching experience, they create resources that truly
            resonate with both students and teachers alike.
          </p>
        </section>

        <section className="authors-section">
          {authors.map((author, index) => (
            <AuthorSection key={index} author={author} />
          ))}
        </section>

        {/* <FeaturedBooks addToCart={addToCart} /> */}

        <BookFeatures />

        <div ref={teacherBookCollectionRef}>
          <TeacherBookCollection authors={authors} addToCart={addToCart} />
        </div>

        <ProductsComponent />

        <Testimonials />
      </main>
    </div>
  );
};

export default Home;
