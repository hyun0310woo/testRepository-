import React from "react";
import Education from "./components/Education";
import Introduce from "./components/Introduce";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import PortfolioBar from "./components/PortfolioBar";

const App = () => {
  return (
    <div>
      <PortfolioBar />
      <Contact />
      <Education />
      <Introduce />
      <Projects />
      <Skills />
    </div>
  );
};

export default App;
