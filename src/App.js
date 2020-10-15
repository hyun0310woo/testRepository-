import React from "react";
import { Route } from "react-router-dom";
import Education from "./components/Education";
import Introduce from "./components/Introduce";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import PortfolioBar from "./components/PortfolioBar";
import Home from "./components/Home";
import "./App.css";

const App = () => {
  return (
    <div id="colorlib-page">
      <PortfolioBar />
      <Route exact path="/" component={Home} />
      <Route path="/Education" component={Education} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Skills" component={Skills} />
      <Route path="/Contact" component={Contact} />
    </div>
  );
};

export default App;
