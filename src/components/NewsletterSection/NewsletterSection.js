import React from "react";
import "./NewsletterSection.css";
import { Button } from "bootstrap";

const NewsletterSection = () => {
  return (
    <div className="n-s-row">
      <div className="n-s-bg">
        <div className="n-s-text-1">
          <div className="n-s-text-1-1">
            <p>Subscribe To Our Newsletter</p>
          </div>
          <div className="n-s-text-1-2">
            <p>
              Get news and information for any examination problem and questions
              you may have
            </p>
          </div>
        </div>
        <div className="n-s-text-2">
          <div className="n-s-text-2-1">
            <input
              className="n-s-placeholder"
              placeholder="Johndoe@gmail.com"
            />
          </div>
          <div className="n-s-text-2-2">
            <button className="n-s-button">Subscribe Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
