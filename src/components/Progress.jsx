import React from "react";
import "./Progress.css";

const Progress = ({ count }) => {
  return (
    <div id="progress-container">
      <div className="progress-card">
        <img className="img-left" src="assets/lines.png" alt="" />
        <div className="progress-text">
          <p className="progress-title">In-Progress</p>
          <p className="progress-count">{count}</p>
        </div>
        <img className="img-right" src="assets/lines.png" alt="" />
      </div>

      <div className="resolved-card">
        <img className="img-left" src="assets/lines.png" alt="" />
        <div className="resolved-text">
          <p className="resolved-title">Resolved</p>
          <p className="resolved-count">0</p>
        </div>
        <img className="img-right" src="assets/lines.png" alt="" />
      </div>
    </div>
  );
};

export default Progress;
