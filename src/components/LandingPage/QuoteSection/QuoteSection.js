import React from "react";
import "./QuoteSection.css";

const QuoteSection = () => {
  return (
    <div className="my-quote-section">
      <div className="my-quote row">
        <div className="q-s-container-1">
          <p className="q-s-font-control-1">
            "Education is the most powerful weapon which you can use to changes
            the world."
          </p>
        </div>
        <div className="q-s-container-2">
          <p className="q-s-font-control-2">Nelson Mandela</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;
