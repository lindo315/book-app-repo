import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Breadcrumb.css";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="breadcrumb-separator">/</span>}
          {index === items.length - 1 ? (
            <span className="breadcrumb-current">{item}</span>
          ) : (
            <Link
              to={
                index === 0 ? "/" : index === 1 ? `/${item.toLowerCase()}` : "#"
              }
              className="breadcrumb-link"
            >
              {item}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
