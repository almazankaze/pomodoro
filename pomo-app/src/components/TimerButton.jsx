import React from "react";
import { useGlobalContext } from "../context";

const TimerButton = () => {
  const { isActive, toggleTimerButton } = useGlobalContext();

  return (
    <text x="50%" y="50%" className="timer-button" onClick={toggleTimerButton}>
      {isActive ? "Pause" : "Start"}
    </text>
  );
};

export default TimerButton;
