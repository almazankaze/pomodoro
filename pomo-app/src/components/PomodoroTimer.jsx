import React from "react";

const PomodoroTimer = ({ min, totalSec }) => {
  const [isActive, setIsActive] = useState(false);
  const [minutes, setMinutes] = useState(min);
  const [seconds, setSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(totalSec);

  const getTimePercentage = () => {
    return (totalSeconds / totalSeconds) * 100;
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

  return <div></div>;
};

export default PomodoroTimer;
