import React from "react";
import "./styles/ChangeColor.css";
import CheckIcon from "@mui/icons-material/Check";

const ChangeColor = ({ text }) => {
  return (
    <div className="modal-section">
      <h3>{text}</h3>
      <div className="button-group">
        <button className="circle-btn theme1-fill">
          <CheckIcon />
        </button>
        <button className="circle-btn theme2-fill"></button>
        <button className="circle-btn theme3-fill"></button>
      </div>
    </div>
  );
};

export default ChangeColor;
