import React from "react";
import "../componentsStyles/Home.css";

const Home = () => {
  return (
    <div id="mainPage">
      <div id="contentsBox">
        <h1 id="hello">제목 제목 제목</h1>

        <section id="textBox">
          <div id="profileImg"></div>
          <p id="text1" class="introduceText">
            텍스트 작성 공간텍스트 작성 공간텍스트 작성 공간텍스트 작성
            공간텍스트 작성 공간텍스트 작성 공간텍스트 작성 공간텍스트 작성
            공간텍스트 작성 공간텍스트 작성 공간텍스트 작성 공간텍스트 작성 공간
          </p>

          <p id="text2" class="introduceText">
            텍스트 작성 공간텍스트 작성 공간텍스트 작성 공간텍스트 작성
            공간텍스트 작성 공간텍스트 작성 공간텍스트 작성 공간텍스트 작성
            공간텍스트 작성 공간텍스트 작성 공간텍스트 작성 공간텍스트 작성 공간
          </p>
        </section>
      </div>

      <div id="gaugeBar">
        <div>게이지</div>
      </div>
    </div>
  );
};

export default Home;
