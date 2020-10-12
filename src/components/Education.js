import React from "react";
import "../componentsStyles/Education.css";

const Education = () => {
  return (
    <div onClick={() => alert("선택")} id="EducationCard">
      <div id="EducationText">Education</div>
    </div>
  );
};

export default Education;
