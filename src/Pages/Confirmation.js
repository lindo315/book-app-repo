import React from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../Components/Breadcrumb";
import "../Styles/Confirmation.css";

const Confirmation = () => {
  const location = useLocation();
  const { orderDetails } = location.state || {};

  return (
    <div className="confirmation-page">
      <Breadcrumb items={["Home", "Shop", "Checkout", "Confirmation"]} />
      <h1>Order Confirmation</h1>
      <div className="confirmation-content">
        <div className="confirmation-message">
          <h2>Thank you for your order!</h2>
          <p>
            Your order has been successfully placed. We'll send you an email
            with the order details and tracking information once your order
            ships.
          </p>
        </div>
        {orderDetails && (
          <div className="order-details">
            <h3>Order Details</h3>
            <p>
              <strong>Name:</strong> {orderDetails.firstName}{" "}
              {orderDetails.lastName}
            </p>
            <p>
              <strong>Email:</strong> {orderDetails.email}
            </p>
            <p>
              <strong>Address:</strong> {orderDetails.address},{" "}
              {orderDetails.city}, {orderDetails.zipCode},{" "}
              {orderDetails.country}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Confirmation;
