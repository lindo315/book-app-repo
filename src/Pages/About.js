import React from "react";
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
    </div>
  );
};

export default About;
