import React from "react";
import "./CommunitySection.css";

const CommunitySection = () => {
  return (
    <div className="c-s-row">
      <div className="c-s-bg">
        <div className="c-s-bg-container">
          <div className="c-s-left-side">
            <div className="c-s-left-side-1">
              <p>
                Beyond Exam Preparations: A Gateway to Guaranteed Exam Success
              </p>
            </div>
            <div className="c-s-left-side-2">
              <div className="c-s-drop-shadown">
                <div className="c-c-left-side-2-internal-1">
                  <div>
                    <div>
                      <img src={require("../../../icons/teamwork.png")} />
                    </div>
                  </div>
                  <div className="c-s-left-internal-1-font-control-1">
                    <p>Global Exam Preparation Community</p>
                  </div>
                </div>
                <div className="c-s-left-side-2-internal-2">
                  <p>
                    Join a Top tutors and Students all over the world, and learn
                    together in a beautiful Virtual community, tailored to allow
                    you thrive
                  </p>
                </div>
                <div className="c-s-left-side-2-internal-3">
                  <div className="c-s-left-side-2-internal-3-text-1">
                    <div>
                      <p>Read More</p>
                    </div>
                    <div className="">
                      <img
                        className="c-s-arrow-icon"
                        src={require("../../../icons/Arrow.png")}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="c-s-left-side-3">
                <div className="c-s-left-side-internal-3-container">
                  <div>
                    <img src={require("../../../icons/best-practice.png")} />
                  </div>
                  <div className="c-s-side-internal-3-text">
                    <p>Practical Tools to allow you ace your exams</p>
                    <div className="c-s-line"></div>
                  </div>
                </div>
                <div className="c-s-left-side-internal-3-container">
                  <div>
                    <img src={require("../../../icons/best-practice.png")} />
                  </div>
                  <div className="c-s-side-internal-3-text">
                    <p>Practical Tools to allow you ace your exams</p>
                    <div className="c-s-line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-s-icon-container">
          <div className="c-s-icon">
            <img src={require("../../../icons/Frame.png")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
