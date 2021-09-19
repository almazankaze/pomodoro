import { useGlobalContext } from "../context";

const Timer = () => {
  const { minutes, seconds } = useGlobalContext();

  // adds a zero when number is a single digit
  function addZero(x) {
    if (x < 10) {
      return (x = "0" + x);
    } else {
      return x;
    }
  }

  return (
    <div className="timer">{addZero(minutes) + ":" + addZero(seconds)}</div>
  );
};

export default Timer;
