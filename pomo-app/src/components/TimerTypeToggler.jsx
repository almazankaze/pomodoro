import React from "react";
import TimerTypeButton from "./TimerTypeButton";
import "./styles/TimerTypeToggler.css";

const TimerTypeToggler = () => {
  return (
    <div className="toggler-container">
      <div className="toggler">
        <TimerTypeButton myText="pomodoro" />
        <TimerTypeButton myText="short break" />
        <TimerTypeButton myText="long break" />
      </div>
    </div>
  );
};

export default TimerTypeToggler;
