import React from "react";
import "../componentsStyles/Home.css";
import PortfolioBar from "./PortfolioBar";

const Home = () => {
  return (
    <div id="colorlib-main">
      <div class="overlay">
        <div class="img"></div>
        <h2 class="subheading">Hello I'm</h2>
        <h1 class="mb-4">Elen Henderson</h1>
        <p>
          I am A Blogger Far far away, behind the word mountains, far from the
          countries Vokalia and Consonantia, there live the blind texts.
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </p>
      </div>
    </div>
  );
};

export default Home;
