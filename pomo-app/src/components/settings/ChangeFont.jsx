import React from "react";
import "./styles/ChangeFont.css";

const ChangeFont = ({ text, defaultFont, changeFont }) => {
  return (
    <div className="modal-section">
      <h3>{text}</h3>
      <div className="button-group">
        <button
          className={`circle-btn font1 ${
            defaultFont === "font1" ? "current-font" : ""
          }`}
          onClick={() => changeFont("font1")}
        >
          Aa
        </button>
        <button
          className={`circle-btn font2 ${
            defaultFont === "font2" ? "current-font" : ""
          }`}
          onClick={() => changeFont("font2")}
        >
          Aa
        </button>
        <button
          className={`circle-btn font3 ${
            defaultFont === "font3" ? "current-font" : ""
          }`}
          onClick={() => changeFont("font3")}
        >
          Aa
        </button>
      </div>
    </div>
  );
};

export default ChangeFont;
