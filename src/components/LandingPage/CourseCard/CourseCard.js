import React from "react";
import "./CourseCard.css";

const CourseCard = () => {
  return (
    <div className="c-c-row">
      <div className="c-c-bg">
        <div className="c-c-list">
          <div id="c-c-first-text-container">
            <div
              className="c-c-items-container c-c-font-control-1"
              id="c-c-first-text"
            >
              <p>
                Gear Towards Getting Your Desired Result for Scholaship Exams,
                Internationally and Locally
              </p>
            </div>
          </div>
          <div className="c-c-icon-text-bg">
            <div className="c-c-icon-text">
              <div
                className="c-c-items-container c-c-color-white"
                id="c-c-individual"
              >
                <img
                  src={require("../../../icons/technology.png")}
                  className="c-c-container-icon"
                />
                <div className="c-c-internal-text-container c-c-font-control-2">
                  <p>Science & Engineering</p>
                </div>
              </div>
              <div
                className="c-c-items-container c-c-color-blue"
                id="c-c-individual"
              >
                <img
                  src={require("../../../icons/paint-board-and-brush.png")}
                  className="c-c-container-icon"
                />
                <div className="c-c-internal-text-container c-c-font-control-2 text-white">
                  <p>Creative Arts and Craft</p>
                </div>
              </div>
              <div
                className="c-c-items-container c-c-color-white"
                id="c-c-individual"
              >
                <img
                  src={require("../../../icons/briefcase.png")}
                  className="c-c-container-icon"
                />
                <div className="c-c-internal-text-container c-c-font-control-2">
                  <p>Business & Accounting</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="c-c-items-container"
            id="c-c-text-container-2 c-c-font-control-3"
          >
            <p className="c-c-font-control-4">
              Our curriculum is geared towards all kinds of professional courses
              accross the world, our aim is solely creating an effective method
              students can easily ace their exams without any hassle, through
              our intense examination simulator and practices
            </p>
          </div>
          <div className="c-c-items-container more-button">More</div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
