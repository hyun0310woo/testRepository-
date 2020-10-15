import React from "react";
import Contact from "./Contact";
import "../componentsStyles/PortfolioBar.css";

const PortfolioBar = () => {
  return (
    <div id="portfolioBar">
      <h1 id="logo">portFolio</h1>
      <div class="section">
        <a href="/" class="r-link link text-underlined link4">
          Home
        </a>
      </div>
      <div class="section">
        <a href="Education" class="r-link link text-underlined link4">
          Education
        </a>
      </div>
      <div class="section">
        <a href="Projects" class="r-link link text-underlined link4">
          Projects
        </a>
      </div>
      <div class="section">
        <a href="Skills" class="r-link link text-underlined link4">
          Skills
        </a>
      </div>
      <div class="section">
        <div id="flashText">
          <a href="Contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBar;
