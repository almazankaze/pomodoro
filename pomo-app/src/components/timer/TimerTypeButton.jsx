import { useGlobalContext } from "../../context";

import "../../styles/TimerTypeButton.css";

const TimerTypeButton = ({ id, myText }) => {
  const { currentTimer, changeTimer, defaultColor } = useGlobalContext();

  return (
    <button
      className={`btn ${id === currentTimer ? defaultColor : ""}`}
      onClick={() => changeTimer(id)}
    >
      {myText}
    </button>
  );
};

export default TimerTypeButton;
