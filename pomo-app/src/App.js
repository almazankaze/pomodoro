import "./App.css";
import CircleProgressBar from "./components/CircleProgressBar";
import Timer from "./components/Timer";
import TimerButton from "./components/TimerButton";

function App() {
  return (
    <div className="App">
      <Timer />
      <TimerButton />
      <CircleProgressBar
        trailStrokeColor="gray"
        strokeColor="teal"
        percentage={75}
        innerText="complete"
      />
    </div>
  );
}

export default App;
