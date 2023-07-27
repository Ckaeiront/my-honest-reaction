import React from "react";
import './Card.css';

const Card = function({image, title, text}) {
  return (
    <div className="card">
      <img src={image} alt="foto recebida pelos universitarios"/>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Card;
