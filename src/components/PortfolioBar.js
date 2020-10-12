import React from "react";
import Contact from "./Contact";
import "../componentsStyles/PortfolioBar.css";

const PortfolioBar = () => {
  return (
    <div id="portfolioBar">
      <span>사진</span>
      <span>Portfolio</span>
      <Contact />
    </div>
  );
};

export default PortfolioBar;
