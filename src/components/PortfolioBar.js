import React from "react";
import Contact from "./Contact";
import "../componentsStyles/PortfolioBar.css";
import { Button } from "reactstrap";

const PortfolioBar = () => {
  return (
    <div id="portfolioBar">
      <div>Education</div>
      <div>Introduce</div>
      <div>Projects</div>
      <div>Skills</div>
      <Button outline color="secondary">
        Contact
      </Button>
    </div>
  );
};

export default PortfolioBar;
