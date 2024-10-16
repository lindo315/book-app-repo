import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "../Styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_2oyomxg", // Replace with your EmailJS service ID
        "template_2xhbn4b", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      )
      .then((response) => {
        setIsSubmitting(false);
        setSubmitMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        setIsSubmitting(false);
        setSubmitMessage(
          "There was an error sending your message. Please try again."
        );
      });
  };

  return (
    <div className="contact-page">
      <h1>Kontak Ons | Contact Us</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Ons hoor graag van jou! Of jy 'n vraag het oor ons boeke, hulp nodig
            het met 'n bestelling, of net wil groet, kontak ons ​​gerus.
            <br></br>
            <br></br>
            We'd love to hear from you! Whether you have a question about our
            books, need assistance with an order, or just want to say hello,
            feel free to reach out to us.
          </p>
          <div className="contact-details">
            <p>
              <FaEnvelope /> briljanteboeke@gmail.com
            </p>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Naam | Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Epos | Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Onderwerp | Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Jou bookskap | Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Stuur bookskap | Send Message"}
          </button>
          {submitMessage && <p className="submit-message">{submitMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
