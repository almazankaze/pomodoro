import React from "react";
import "./styles/TimerTypeButton.css";
import { useGlobalContext } from "../context";

const TimerTypeButton = ({ id, myText }) => {
  const { currentTimer, changeTimer, defaultColor } = useGlobalContext();

  return (
    <button
      className={`btn ${id === currentTimer ? defaultColor : ""}`}
      onClick={() => changeTimer(id)}
    >
      {myText}
    </button>
  );
};

export default TimerTypeButton;
