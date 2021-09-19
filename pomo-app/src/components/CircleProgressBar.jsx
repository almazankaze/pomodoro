import React from "react";
import "./styles/CircleProgressBar.css";
import { useGlobalContext } from "../context";

const CircleProgressBar = ({ trailStrokeColor, strokeColor, innerText }) => {
  const INITIAL_OFFSET = 25;
  const circleConfig = {
    viewBox: "0 0 100 40",
    x: "50",
    y: "20",
    radio: "15.91549430918954",
  };

  const { getTimePercentage } = useGlobalContext();

  return (
    <svg viewBox={circleConfig.viewBox}>
      <circle
        className="ring"
        cx={circleConfig.x}
        cy={circleConfig.y}
        r={circleConfig.radio}
        fill="transparent"
        stroke={trailStrokeColor}
      />

      <circle
        className="path"
        cx={circleConfig.x}
        cy={circleConfig.y}
        r={circleConfig.radio}
        fill="transparent"
        stroke={strokeColor}
        strokeDasharray={`${getTimePercentage()} ${100 - getTimePercentage()}`}
        strokeDashoffset={INITIAL_OFFSET}
      />
      <g className="circle-label">
        <text x="50%" y="50%" className="circle-percentage">
          {getTimePercentage()}%
        </text>
        <text x="50%" y="50%" className="circle-text">
          {innerText}
        </text>
      </g>
    </svg>
  );
};

export default CircleProgressBar;
