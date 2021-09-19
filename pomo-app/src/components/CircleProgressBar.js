import React from 'react'
import './styles/CircleProgressBar.css'

const CircleProgressBar = ({trailStrokeColor, strokeColor, percentage, innerText,}) => {

    const INITIAL_OFFSET = 25
    const circleConfig = {
        viewBox: '0 0 100 40',
        x: '50',
        y: '20',
        radio: '15.91549430918954',
    }

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
            strokeDasharray={`${percentage} ${100 - percentage}`}
            strokeDashoffset={INITIAL_OFFSET}
            />
            <g className="circle-label">
                <text x="50%" y="50%" className="circle-percentage">
                    {percentage}%
                </text>
                <text x="50%" y="50%" className="circle-text">
                    {innerText}
                </text>
            </g>
        </svg>
    )
}

export default CircleProgressBar
