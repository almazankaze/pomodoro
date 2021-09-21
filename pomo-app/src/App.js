import "./App.css";
import CircleProgressBar from "./components/CircleProgressBar";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import TimerTypeToggler from "./components/TimerTypeToggler";

function App() {
  return (
    <div className="App">
      <h1 className="heading">pomodoro</h1>
      <TimerTypeToggler />
      <CircleProgressBar
        trailStrokeColor="hsl(224, 36%, 15%)"
        strokeColor="hsl(6, 63%, 50%)"
      />
      <IconButton aria-label="settings">
        <SettingsIcon style={{ fontSize: "2rem", color: "gray" }} />
      </IconButton>
    </div>
  );
}

export default App;
