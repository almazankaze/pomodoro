import React from "react";
import { useGlobalContext } from "../context";

const TimerButton = () => {
  const { isActive, toggleTimerButton } = useGlobalContext();

  return (
    <button onClick={toggleTimerButton}>{isActive ? "Pause" : "Start"}</button>
  );
};

export default TimerButton;
