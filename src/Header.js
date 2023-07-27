import React from "react";
import "./Header.css";

// Interpolation

const Header = function ({ title, subtitle }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </header>
  );
};

export default Header;
