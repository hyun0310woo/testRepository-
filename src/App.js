import React from "react";
import Education from "./components/Education";
import Introduce from "./components/Introduce";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import PortfolioBar from "./components/PortfolioBar";
import "./App.css";

const App = () => {
  return (
    <div id="App">
      <PortfolioBar />
      <div id="Cards">
        <Contact />
        <Education />
        <Introduce />
        <Projects />
        <Skills />
      </div>
    </div>
  );
};

export default App;
