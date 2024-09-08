import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "../Styles/Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "5th Grade Teacher",
    quote:
      "These books have transformed my classroom. My students are more engaged than ever!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Parent",
    quote:
      "I've seen a significant improvement in my child's interest in reading since we started using these books.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "School Librarian",
    quote:
      "The quality and variety of these educational books are unmatched. They're always in high demand!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Readers Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-quote">{testimonial.quote}</p>
            <p className="testimonial-author">{testimonial.name}</p>
            <p className="testimonial-role">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
