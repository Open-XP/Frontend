import React from "react";
import "./TestimonialSection.css";

const TestimonialSection = () => {
  return (
    <div className="t-s-row">
      <div className="t-s-bg">
        <div className="t-s-text-1-container">
          <div className="t-s-text-1">
            <p>Openxp Testimonials</p>
          </div>
          <div className="t-s-text-2">
            <p>
              Join us today and become a Straigh A student, below are Some of
              our outstanding students who aced their exams with ease
            </p>
          </div>
        </div>
        <div className="t-s-text-3">
          <div className="t-s-container-left-1">
            <div className="t-s-icon-control">
              <img src={require("../../icons/Mask-group.png")} />
            </div>
            <div className="t-s-font-control-1">
              <p>
                Openxp has Played a vital role in me becoming a model student,
                and true their help I have been able pass my final exams in
                order for me to study internationally.Growing as up from a
                humble background, I understand how much it means to put your
                all, and openxp gives you a very big community to support and
                learn.
              </p>
            </div>
            <div className="t-s-name-1">
              <p>Ariana Baker</p>
            </div>
          </div>
          <div className="t-s-container-lef-2">
            <div className="t-s-icon-control">
              <img src={require("../../icons/Mask-group.png")} />
            </div>
            <div className="t-s-font-control-2">
              <p>
                Openxp has Played a vital role in me becoming a model student,
                and true their help I have been able pass my final exams in
                order for me to study internationally.Growing as up from a
                humble background, I understand how much it means to put your
                all, and openxp gives you a very big community to support and
                learn.
              </p>
            </div>
            <div className="t-s-name-1">
              <p>Ariana Baker</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
