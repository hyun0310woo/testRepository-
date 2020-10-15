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
        <div>
          <div class="col-md-8 text text-center">
            <div class="img"></div>
            <div id="backImg"></div>
            <div class="desc">
              <h2 class="subheading">Hello I'm</h2>
              <h1 class="mb-4">Web Developer</h1>
              <p class="mb-4">
                개인의 아이디어가 단지 생각에 그치는 것이 아닌 , 그것을 서비스로
                만들어 사람들에게 알릴 수 있는 개발자라는 직업에 매력을 느꼈으며
                어떻게 하면 사용자들이 더 편리하게 웹 , 앱을 사용할 수 있을까 ?
                를 고민하는 제 모습을 보고 프론트엔드 를 결심하게 되었습니다 .
              </p>
              <p class="mb-4">
                팀 프로젝트를 통해 협업의 힘과 중요성을 경험했기에 단순히 코드만
                작성하는 개발자가 아닌 , 협업과 소통을 통해 더욱 성장하는
                개발자를 목표로 합니다.
              </p>
            </div>
            <br></br>
            <span>블로그</span>
            <span>깃헙</span>
            <span>이메일</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
