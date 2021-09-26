import "./App.css";
import CircleProgressBar from "./components/CircleProgressBar";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import TimerTypeToggler from "./components/TimerTypeToggler";
import Settings from "./components/settings/Settings";
import { useGlobalContext } from "./context";

function App() {
  const { openSettings, defaultFont, defaultColor } = useGlobalContext();

  let circleProgressBar;
  let myColor;

  if (defaultColor === "theme1-color") myColor = "hsl(6, 63%, 50%)";
  else if (defaultColor === "theme2-color") myColor = "hsl(176, 100%, 44%)";
  else {
    myColor = "hsl(285, 91%, 52%)";
  }

  circleProgressBar = (
    <CircleProgressBar
      trailStrokeColor="hsl(224, 36%, 15%)"
      strokeColor={myColor}
    />
  );

  return (
    <div className={`App ${defaultFont}`}>
      <Settings />
      <h1 className="heading">pomodoro</h1>
      <TimerTypeToggler />
      {circleProgressBar}
      <IconButton aria-label="settings" onClick={() => openSettings()}>
        <SettingsIcon style={{ fontSize: "2rem", color: "gray" }} />
      </IconButton>
    </div>
  );
}

export default App;
