import React from "react";
import Navbar from "../Components/Navbar";
import AuthorSection from "../Components/AuthorSection";
import FeaturedBooks from "../Components/FeaturedBooks";
import BookFeatures from "../Components/BookFeatures";
import TeacherBookCollection from "../Components/TeacherBookCollection";
import "../Styles/Home.css";

const Home = () => {
  const authors = [
    {
      name: "Emily Thornton",
      image: "/images/woman.png",
      bio: "With over 20 years of experience in primary education, Emily Thornton brings a wealth of knowledge to her engaging and innovative teaching materials.",
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
        },
        {
          id: 2,
          title: "STEM Projects for Young Learners",
          cover: "/images/page.png",
          subject: "Science",
          description:
            "Exciting hands-on projects that integrate science, technology, engineering, and math for primary school students.",
        },
        {
          id: 3,
          title: "STEM Projects for Young Learners",
          cover: "/images/page.png",
          subject: "Science",
          description:
            "Exciting hands-on projects that integrate science, technology, engineering, and math for primary school students.",
        },
      ],
    },
    {
      name: "Michael Chen",
      image: "/images/woman.png",
      bio: "A passionate advocate for STEM education, Michael Chen combines his background in computer science with his teaching experience to create cutting-edge resources.",
      booksPublished: 8,
      classroomsImpacted: 3500,
      rating: 4.8,
      books: [
        {
          id: 4,
          title: "Coding for Kids: Python Basics",
          cover: "/images/page.png",
          subject: "Computer Science",
          description:
            "An introductory programming book that teaches children the fundamentals of Python in a fun, interactive way.",
        },
        {
          id: 5,
          title: "Digital Literacy in the 21st Century",
          cover: "/images/page.png",
          subject: "Computer Science",
          description:
            "A comprehensive guide to navigating the digital world, covering topics from online safety to critical thinking in the age of information.",
        },
        {
          id: 6,
          title: "Interactive Mathematics: Grade 5",
          cover: "/images/page.png",
          subject: "Mathematics",
          description:
            "A comprehensive math textbook that makes learning fun and engaging for 5th graders.",
        },
      ],
    },
    // Add more authors as needed
  ];

  return (
    <div className="container">
      <Navbar />
      <main className="main">
        <section className="hero-section">
          <div className="content">
            <div className="textContent">
              <h2 className="subtitle">Empowering Education</h2>
              <h1 className="title">
                Inspiring young minds
                <br />
                one book at a time
              </h1>
              <button className="button">Explore Our Books</button>
            </div>
            <div className="imageContent">
              <img
                src="/images/page.png"
                alt="Featured book cover"
                className="bookCover"
              />
              <img
                src="/images/page.png"
                alt="Featured book cover"
                className="bookCover secondBookCover"
              />
            </div>
          </div>
        </section>

        <section className="introduction-section">
          <h2 className="section-title1">Meet Our Expert Educators</h2>
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

        <FeaturedBooks />

        <BookFeatures />

        <TeacherBookCollection authors={authors} />
      </main>
    </div>
  );
};

export default Home;
