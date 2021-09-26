const Timer = ({ minutes, seconds }) => {
  // adds a zero when number is a single digit
  function addZero(x) {
    if (x < 10) {
      return (x = "0" + x);
    } else {
      return x;
    }
  }

  return (
    <text x="50%" y="50%" className="timer">
      {addZero(minutes) + ":" + addZero(seconds)}
    </text>
  );
};

export default Timer;
