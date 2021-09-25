import React from "react";
import "./styles/ChangeFont.css";

const ChangeFont = ({ text }) => {
  return (
    <div className="modal-section">
      <h3>{text}</h3>
      <div className="button-group">
        <button className="circle-btn current-font">Aa</button>
        <button className="circle-btn">Aa</button>
        <button className="circle-btn">Aa</button>
      </div>
    </div>
  );
};

export default ChangeFont;
