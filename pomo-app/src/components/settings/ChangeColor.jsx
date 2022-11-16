import React from "react";
import CheckIcon from "@mui/icons-material/Check";

const ChangeColor = ({ text, defaultColor, changeColor }) => {
  return (
    <div className="modal-section">
      <h3>{text}</h3>
      <div className="button-group">
        <button
          className="circle-btn theme1"
          onClick={() => changeColor("theme1")}
        >
          {defaultColor === "theme1" ? <CheckIcon /> : ""}
        </button>
        <button
          className="circle-btn theme2"
          onClick={() => changeColor("theme2")}
        >
          {defaultColor === "theme2" ? <CheckIcon /> : ""}
        </button>
        <button
          className="circle-btn theme3"
          onClick={() => changeColor("theme3")}
        >
          {defaultColor === "theme3" ? <CheckIcon /> : ""}
        </button>
      </div>
    </div>
  );
};

export default ChangeColor;
