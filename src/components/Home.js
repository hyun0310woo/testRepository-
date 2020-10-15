import React from "react";
import "../componentsStyles/Home.css";
// import PortfolioBar from "./PortfolioBar";

const Home = () => {
  return (
    // <div id="main">
    //   <div>
    //     <div class="img"></div>
    //     <h1>Hello</h1>
    //   </div>
    // </div>
    <div id="main">
      <div class="hero-wrap hero-wrap-2 js-fullheight">
        <div class="overlay"></div>
        <div class="js-fullheight d-flex justify-content-center align-items-center">
          <div class="col-md-8 text text-center">
            <div class="img"></div>
            <div class="desc">
              <h2 class="subheading">Hello I'm</h2>
              <h1 class="mb-4">Elen Henderson</h1>
              <p class="mb-4">
                I am A Blogger Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts. Separated they live in Bookmarksgrove right at the coast
                of the Semantics, a large language ocean.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
