import "./App.css";
import CircleProgressBar from "./components/CircleProgressBar";
import Timer from "./components/Timer";
import TimerButton from "./components/TimerButton";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";

function App() {
  return (
    <div className="App">
      <Timer />
      <TimerButton />
      <CircleProgressBar
        trailStrokeColor="gray"
        strokeColor="teal"
        innerText="complete"
      />
      <IconButton aria-label="settings">
        <SettingsIcon />
      </IconButton>
    </div>
  );
}

export default App;
