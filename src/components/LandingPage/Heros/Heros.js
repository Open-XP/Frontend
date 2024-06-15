import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Heros.css";

const Heros = () => {
  return (
    <div className="my-hero">
      <div className="my-hero-container row">
        <div className="col hero-col-set-1">
          <div className="hero-left-col">
            <div className="hero-left-card-1 hero-exam">
              <p id="hero-left-move">
                Prepare for your Tartiary Exams, and Scholarship Exams.
              </p>
            </div>
            <div id="hero-left-move" className="second-left-text-row">
              <p className="second-left-text-row-text">
                Embark on a journey towards academic excellence and scholarship
                triumphs. At Opensourcexp. We offer guidiance, strategic exam
                prep, and sholarship mastery.
              </p>
            </div>
            <div id="hero-left-move" className="hero-button-list-left">
              <div className="hero-test-study-btn">
                <div>
                  <button className="blue-box">Take test now</button>
                </div>
                <div>
                  <button className="purple-box">Study</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col hero-col-set-2">
          <div className="hero-right-col">
            <div className="hero-right-col-container">
              <div className="hero-right-card-1">
                <p className="hero-text-manipualte">
                  Start preparing for Exams.
                </p>
              </div>
              <div className="hero-email-div">
                <p>Email Address*</p>
              </div>
              <div id="hero-email-password" className="email-and-password">
                <input
                  id="hero-email-password"
                  className="input-1 text-black general-padding"
                  type="text"
                  placeholder="Enter your email address"
                />
              </div>
              <div id="hero-email-password" className="email-and-password">
                <input
                  id="hero-email-password"
                  className="input-2 general-padding"
                  type="text"
                  placeholder="Enter your password"
                />
              </div>

              <div id="hero-email-password">
                <button className="hero-button-1 general-padding">
                  Start Learning For Free
                </button>
              </div>

              <div className="hero-line">
                <div className="hero-left-line"></div>
                <div className="hero-line-text">
                  <p>or join using</p>
                </div>
                <div className="hero-right-line"></div>
              </div>
              <div className="hero-button-list-right" id="hero-email-password">
                <div>
                  <button id="hero-button-2">LinkedIn</button>
                  <div className="linkedin-image">
                    <img
                      id="hero-icon-resize"
                      src={require("../../../icons/linkedin.png")}
                      alt="LinkedIn"
                    />
                  </div>
                </div>
                <div>
                  <button id="hero-button-2">Google</button>
                  <div className="google-image">
                    <img
                      id="hero-icon-resize"
                      src={require("../../../icons/google.png")}
                      alt="LinkedIn"
                    />
                  </div>
                </div>
                <div>
                  <button id="hero-button-2">Facebook</button>
                  <div className="facebook-image">
                    <img
                      id="hero-icon-resize"
                      src={require("../../../icons/facebook.png")}
                      alt="LinkedIn"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heros;
