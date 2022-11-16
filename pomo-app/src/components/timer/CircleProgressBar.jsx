import React from "react";
import Timer from "./Timer";
import { useGlobalContext } from "../context";
import TimerButton from "./TimerButton";

import "../../styles/CircleProgressBar.css";

const CircleProgressBar = ({ trailStrokeColor, strokeColor }) => {
  const INITIAL_OFFSET = 25;
  const circleConfig = {
    viewBox: "0 0 120 40",
    x: "60",
    y: "20",
    radio: "15.91549430918954",
  };

  const { getTimePercentage } = useGlobalContext();

  return (
    <svg viewBox={circleConfig.viewBox} preserveAspectRatio="xMinYMin meet">
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
        <Timer />
        <TimerButton />
      </g>
    </svg>
  );
};

export default CircleProgressBar;
