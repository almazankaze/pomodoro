import "./App.css";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import TimerTypeToggler from "./components/TimerTypeToggler";
import Settings from "./components/settings/Settings";
import { useGlobalContext } from "./context";
import PomodoroTimer from "./components/PomodoroTimer";

function App() {
  const {
    openSettings,
    defaultMin,
    defaultShortBreak,
    defaultLongBreak,
    defaultFont,
    defaultColor,
    currentTimer,
  } = useGlobalContext();

  let myColor;

  if (defaultColor === "theme1-color") myColor = "hsl(6, 63%, 50%)";
  else if (defaultColor === "theme2-color") myColor = "hsl(176, 100%, 44%)";
  else {
    myColor = "hsl(285, 91%, 52%)";
  }

  return (
    <div className={`App ${defaultFont}`}>
      <Settings />
      <h1 className="heading">pomodoro</h1>
      <TimerTypeToggler />
      <PomodoroTimer
        id={0}
        currentTimer={currentTimer}
        min={defaultMin}
        trailStrokeColor="hsl(224, 36%, 15%)"
        strokeColor={myColor}
      />
      <PomodoroTimer
        id={1}
        currentTimer={currentTimer}
        min={defaultShortBreak}
        trailStrokeColor="hsl(224, 36%, 15%)"
        strokeColor={myColor}
      />
      <PomodoroTimer
        id={2}
        currentTimer={currentTimer}
        min={defaultLongBreak}
        trailStrokeColor="hsl(224, 36%, 15%)"
        strokeColor={myColor}
      />
      <IconButton aria-label="settings" onClick={() => openSettings()}>
        <SettingsIcon style={{ fontSize: "2rem", color: "gray" }} />
      </IconButton>
    </div>
  );
}

export default App;
