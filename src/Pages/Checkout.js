import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../Components/Breadcrumb";
import "../Styles/Checkout.css";

const Checkout = ({ cart, setCart }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call or processing time
    setTimeout(() => {
      navigate("/confirmation", { state: { orderDetails: formData, cart } });
      setCart([]);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="checkout-page">
      <Breadcrumb items={["Home", "Shop", "Checkout"]} />
      <h1>Request a Quote</h1>
      <div className="checkout-content">
        <form onSubmit={handleSubmit} className="checkout-form">
          <h2>Fill in your information</h2>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="zipCode">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            className="place-order-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="loading-spinner"></div>
                Processing...
              </>
            ) : (
              "Place Order"
            )}
          </button>
        </form>
        <div className="order-summary">
          <h2>Order Summary</h2>
          {cart.map((item) => (
            <div key={item.id} className="summary-item">
              <h3>{item.title}</h3>
              <p>Grade: {item.grade}</p>
              <p>Modules:</p>
              <ul>
                {item.modules.map((module, index) => (
                  <li key={index}>Module {module}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
