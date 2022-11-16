import React from "react";

const TimerButton = ({ active, toggleTimerButton }) => {
  return (
    <text
      x="50%"
      y="50%"
      className="timer-button"
      onClick={() => toggleTimerButton()}
    >
      {active ? "Pause" : "Start"}
    </text>
  );
};

export default TimerButton;
