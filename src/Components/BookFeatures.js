import React from "react";
import {
  FaSearch,
  FaClipboardList,
  FaFileInvoiceDollar,
  FaBook,
} from "react-icons/fa";
import "../Styles/BookFeatures.css";

const processSteps = [
  {
    icon: <FaSearch />,
    title: "Snuffel deur Katalogus",
    title2: "Browse our Catalogue",
    description:
      "Snuffel deur ons katalogus en kies die boeke vir die grade wat die beste by jou behoeftes pas.",
    description2:
      "Explore our catalogue and select the books for the grades that best suit your needs.",
  },
  {
    icon: <FaClipboardList />,
    title: "Versoek Kwotasie",
    title2: "Request Quote",
    description:
      "Vul jou besonderhede op ons eenvoudige kwotasie versoekvorm in.",
    description2: "Fill in your details on our simple quote request form.",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Ontvang Kwotasie",
    title2: "Receive Quote",
    description:
      "Ons sal vir jou ’n gedetailleerde kwotasie,  volgens jou keuses, per e-pos stuur.",
    description2:
      "We will email you a detailed quote tailored to your selections.",
  },
  {
    icon: <FaBook />,
    title: "Plaas Bestelling",
    title2: "Place Order",
    description:
      "Op aanvaarding van die kwotasie, sal ons vir jou ’n faktuur stuur en die bal aan die rol sit.",
    description2:
      "Upon acceptance of the quote, we will send you an invoice to get the ball rolling.",
  },
];

const BookFeatures = () => {
  return (
    <section className="book-features">
      <h2 className="features-title">
        Sit die bal aan die rol | Get the ball rolling
      </h2>
      <p className="features-subtitle">
        Volg hierdie maklike stappe om ‘n kwotasie aan te vra. <br></br> Follow
        these easy steps to request a quote.
      </p>
      <div className="features-grid">
        {processSteps.map((step, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">{step.icon}</div>
            <h3 className="feature-title">{step.title}</h3>
            <h3 className="feature-title2">{step.title2}</h3>
            <p className="feature-description">{step.description}</p>
            <p className="feature-description">{step.description2}</p>
            <div className="step-number">{index + 1}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookFeatures;
