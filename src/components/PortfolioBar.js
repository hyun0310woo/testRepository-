import React from "react";
import Contact from "./Contact";
import "../componentsStyles/PortfolioBar.css";

const PortfolioBar = () => {
  return (
    <div id="portfolioBar">
      <h1 id="logo">
        <a href="/">portFolio</a>
        <span>.</span>
      </h1>
      <nav id="colorlib-main-menu" role="navigation">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="Introduce">Introduce</a>
          </li>
          <li>
            <a href="Education">Education</a>
          </li>
          <li>
            <a href="Projects">Projects</a>
          </li>
          <li>
            <a href="Skills">Skills</a>
          </li>
          <li>
            <a href="Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PortfolioBar;
