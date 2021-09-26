import React from "react";
import "./styles/ChangeTimers.css";

const ChangeTimers = ({
  text,
  main,
  short,
  long,
  changeMain,
  changeShort,
  changeLong,
}) => {
  return (
    <div className="timers-section">
      <h3>{text}</h3>

      <div className="change-timers-group">
        <div className="timer-input">
          <p className="timer-text">pomodoro</p>
          <input
            type="number"
            value={main}
            onChange={(e) => changeMain(e.target.value)}
          ></input>
        </div>
        <div className="timer-input">
          <p className="timer-text">short break</p>
          <input
            type="number"
            value={short}
            onChange={(e) => changeShort(e.target.value)}
          ></input>
        </div>
        <div className="timer-input">
          <p className="timer-text">long break</p>
          <input
            type="number"
            value={long}
            onChange={(e) => changeLong(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default ChangeTimers;
