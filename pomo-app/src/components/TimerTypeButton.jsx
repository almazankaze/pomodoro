import React from "react";
import "./styles/TimerTypeButton.css";
import { useGlobalContext } from "../context";

const TimerTypeButton = ({ id, myText }) => {
  const { currentTimer, changeTimer } = useGlobalContext();

  return (
    <button
      className={`btn ${id === currentTimer ? "active" : ""}`}
      onClick={() => changeTimer(id)}
    >
      {myText}
    </button>
  );
};

export default TimerTypeButton;
