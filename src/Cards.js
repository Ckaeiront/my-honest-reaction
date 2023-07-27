import React from "react";
import './Cards.css';

const Cards = function ({ children }) {
  return (
    <div className="cards">
      {children}
    </div>
  );
};

export default Cards;
