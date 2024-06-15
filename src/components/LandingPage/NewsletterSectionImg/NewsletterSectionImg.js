import React from "react";
import "./NewsletterSectionImg.css";

const NewsletterSectionImg = () => {
  return (
    <div className="n-s-img-container">
      <img className="n-s-bg-img" src={require("./Asset.png")} />
    </div>
  );
};

export default NewsletterSectionImg;
