import React from "react";

const Card = ({ product }) => {

  if (!product) return null;

  return (
    <div className="card mb-4" style={{ width: "22rem" }}>
      <img
        src={
          product?.images?.[0] ||
          "https://via.placeholder.com/300"
        }
        className="card-img-top"
        alt={product?.title}
      />

      <div className="card-body">
        <h5 className="card-title">{product?.title}</h5>
        <p className="card-text">{product?.description}</p>
      </div>
    </div>
  );
};

export default Card;


