import React, { useState } from "react";
import "./styles/TimerTypeButton.css";

const TimerTypeButton = ({ myText }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      className={`btn ${isActive ? "active" : ""}`}
      onClick={() => setIsActive(!isActive)}
    >
      {myText}
    </button>
  );
};

export default TimerTypeButton;
