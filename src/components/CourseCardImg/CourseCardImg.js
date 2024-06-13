import React from "react";
import "./CourseCardImg.css";

const CourseCardImg = () => {
  return (
    <div className="c-c-i-bg">
      <img className="c-c-img" src={require("./pexels-pixabay.png")} />
    </div>
  );
};

export default CourseCardImg;
