import React from "react";
import CheckIcon from "@mui/icons-material/Check";

const ChangeColor = ({ text, defaultColor, changeColor }) => {
  return (
    <div className="modal-section">
      <h3>{text}</h3>
      <div className="button-group">
        <button
          className="circle-btn theme1-color"
          onClick={() => changeColor("theme1-color")}
        >
          {defaultColor === "theme1-color" ? <CheckIcon /> : ""}
        </button>
        <button
          className="circle-btn theme2-color"
          onClick={() => changeColor("theme2-color")}
        >
          {defaultColor === "theme2-color" ? <CheckIcon /> : ""}
        </button>
        <button
          className="circle-btn theme3-color"
          onClick={() => changeColor("theme3-color")}
        >
          {defaultColor === "theme3-color" ? <CheckIcon /> : ""}
        </button>
      </div>
    </div>
  );
};

export default ChangeColor;
