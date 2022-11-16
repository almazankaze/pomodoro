import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import TimerButton from "./TimerButton";
import "../../styles/PomodoroTimer.css";

const PomodoroTimer = ({
  id,
  currentTimer,
  min,
  trailStrokeColor,
  strokeColor,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [defaultMin, setDefaultMin] = useState(min);
  const [minutes, setMinutes] = useState(min);
  const [seconds, setSeconds] = useState(0);
  const [defaultTotalSec, setDefaultTotalSec] = useState(min * 60);
  const [totalSeconds, setTotalSeconds] = useState(min * 60);

  const INITIAL_OFFSET = 25;
  const circleConfig = {
    viewBox: "0 0 120 40",
    x: "60",
    y: "20",
    radio: "15.91549430918954",
  };

  const getTimePercentage = () => {
    return (totalSeconds / defaultTotalSec) * 100;
  };

  const toggleTimerButton = () => {
    if (totalSeconds <= 0) {
      // reset timer
      setMinutes(defaultMin);
      setTotalSeconds(defaultTotalSec);
    }
    if (!isActive) {
      if (seconds === 0) {
        setSeconds(59);
        setMinutes((minutes) => minutes - 1);
      } else {
        setSeconds((seconds) => seconds - 1);
      }

      setTotalSeconds((totalSeconds) => totalSeconds - 1);
    }

    setIsActive(!isActive);
  };

  useEffect(() => {
    let interval = null;

    // if timer is active
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          setSeconds(59);
          setMinutes((minutes) => minutes - 1);
        } else {
          setSeconds((seconds) => seconds - 1);
        }

        setTotalSeconds((totalSeconds) => totalSeconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    if (totalSeconds === 0) {
      setIsActive(false);
    }
  }, [totalSeconds]);

  useEffect(() => {
    setIsActive(false);
    setDefaultMin(min);
    setMinutes(min);
    setSeconds(0);
    setDefaultTotalSec(min * 60);
    setTotalSeconds(min * 60);
  }, [min]);

  return (
    <svg
      viewBox={circleConfig.viewBox}
      preserveAspectRatio="xMinYMin meet"
      className={currentTimer === id ? "visible" : "non-visible"}
    >
      <circle
        className="ring"
        cx={circleConfig.x}
        cy={circleConfig.y}
        r={circleConfig.radio}
        fill="hsl(224, 36%, 15%)"
        stroke={trailStrokeColor}
      />

      <circle
        className="path"
        cx={circleConfig.x}
        cy={circleConfig.y}
        r={circleConfig.radio}
        fill="hsl(224, 36%, 15%)"
        stroke={strokeColor}
        strokeDasharray={`${getTimePercentage()} ${100 - getTimePercentage()}`}
        strokeDashoffset={INITIAL_OFFSET}
      />
      <g fill="white" className="circle-label">
        <Timer minutes={minutes} seconds={seconds} />
        <TimerButton active={isActive} toggleTimerButton={toggleTimerButton} />
      </g>
    </svg>
  );
};

export default PomodoroTimer;
