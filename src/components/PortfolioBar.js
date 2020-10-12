import React from "react";
import Contact from "./Contact";
import "../componentsStyles/PortfolioBar.css";

const PortfolioBar = () => {
  return (
    <div id="portfolioBar">
      <div id="profileImg">사진 </div>
      PortfolioBar
      <div id="a">
        <Contact />
      </div>
    </div>
  );
};

export default PortfolioBar;
