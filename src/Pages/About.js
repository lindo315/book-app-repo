import React from "react";
import { FaBook, FaGraduationCap, FaUsers, FaGlobe } from "react-icons/fa";
import "../Styles/About.css";

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Brilliant</h1>
        <p>Empowering Education Through Exceptional Books</p>
      </header>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At Brilliant, we're dedicated to revolutionizing education by
          providing high-quality, engaging books written by experienced
          educators. Our goal is to inspire a love for learning in students of
          all ages and equip teachers with the best resources available.
        </p>
      </section>

      <section className="stats-section">
        <div className="stat-item">
          <FaBook className="stat-icon" />
          <h3>500+</h3>
          <p>Books Published</p>
        </div>
        <div className="stat-item">
          <FaGraduationCap className="stat-icon" />
          <h3>100+</h3>
          <p>Expert Authors</p>
        </div>
        <div className="stat-item">
          <FaUsers className="stat-icon" />
          <h3>1M+</h3>
          <p>Students Impacted</p>
        </div>
        <div className="stat-item">
          <FaGlobe className="stat-icon" />
          <h3>50+</h3>
          <p>Countries Reached</p>
        </div>
      </section>

      <section className="story-section">
        <h2>Our Story</h2>
        <p>
          Founded in 2010 by a group of passionate educators, Brilliant started
          with a simple idea: to create textbooks that students would actually
          enjoy reading. Over the years, we've grown into a leading educational
          publisher, collaborating with hundreds of expert teachers and
          researchers to develop innovative learning materials.
        </p>
        <p>
          Today, our books are used in classrooms around the world, helping
          students discover the joy of learning and achieve their full
          potential.
        </p>
      </section>

      <section className="team-section">
        <h2 className="team-heading">Meet Our Team</h2>
        <div className="team-grid">
          {/* Add team member components here */}
          <div className="team-member">
            <img src="/images/woman.png" alt="Jane Doe" />
            <h3>Emily Thornton</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="/images/woman.png" alt="John Smith" />
            <h3>Michael Chen</h3>
            <p>Head of Content</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>
    </div>
  );
};

export default About;
