import React, { useState } from "react";
import "./styles/ChangeTimers.css";

const ChangeTimers = ({ text }) => {
  const [main, setMain] = useState(20);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);

  return (
    <div className="timers-section">
      <h3>{text}</h3>

      <div className="change-timers-group">
        <div className="timer-input">
          <p className="timer-text">pomodoro</p>
          <input
            type="number"
            value={main}
            onChange={(e) => setMain(e.target.value)}
          ></input>
        </div>
        <div className="timer-input">
          <p className="timer-text">short break</p>
          <input
            type="number"
            value={shortBreak}
            onChange={(e) => setShortBreak(e.target.value)}
          ></input>
        </div>
        <div className="timer-input">
          <p className="timer-text">long break</p>
          <input
            type="number"
            value={longBreak}
            onChange={(e) => setLongBreak(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default ChangeTimers;
