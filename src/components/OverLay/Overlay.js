import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OverLay.css";

const OverLay = () => {
  return (
    <div className="overlay-image">
      <div className="hero-bg-color"></div>
      <div className="row">
        <div className="image-container ">
          <img
            style={{ margin: " 0 auto" }}
            src={require("./openxp.png")}
            alt="Background overlay"
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default OverLay;
