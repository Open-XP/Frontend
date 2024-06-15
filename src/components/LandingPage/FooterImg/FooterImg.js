import React from "react";
import "./FooterImg.css";

const FooterImg = () => {
  return (
    <div className="footer-img-row">
      <div className="footer-img-color"></div>
      <div>
        <img className="footer-img" src={require("./openxp.png")} />
      </div>
    </div>
  );
};

export default FooterImg;
