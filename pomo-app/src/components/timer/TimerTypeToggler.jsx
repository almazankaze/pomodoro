import TimerTypeButton from "./TimerTypeButton";

import "../../styles/TimerTypeToggler.css";

const TimerTypeToggler = () => {
  return (
    <div className="toggler-container">
      <div className="toggler">
        <TimerTypeButton id={0} myText="pomodoro" />
        <TimerTypeButton id={1} myText="short break" />
        <TimerTypeButton id={2} myText="long break" />
      </div>
    </div>
  );
};

export default TimerTypeToggler;
