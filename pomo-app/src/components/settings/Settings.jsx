import React, { useState } from "react";
import "./styles/Settings.css";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useGlobalContext } from "../../context";
import ChangeFont from "./ChangeFont";
import ChangeTimers from "./ChangeTimers";
import ChangeColor from "./ChangeColor";

const Settings = () => {
  const {
    isSettingsOpen,
    closeSettings,
    update,
    defaultMin,
    defaultShortBreak,
    defaultLongBreak,
    defaultColor,
    defaultFont,
  } = useGlobalContext();

  const [fontType, setFontType] = useState(defaultFont);
  const [colorTheme, setColorTheme] = useState(defaultColor);
  const [main, setMain] = useState(defaultMin);
  const [shortBreak, setShortBreak] = useState(defaultShortBreak);
  const [longBreak, setLongBreak] = useState(defaultLongBreak);

  const changeFont = (font) => {
    setFontType(font);
  };

  const changeColor = (color) => {
    setColorTheme(color);
  };

  const changeMain = (val) => {
    setMain(val);
  };

  const changeShort = (val) => {
    setShortBreak(val);
  };

  const changeLong = (val) => {
    setLongBreak(val);
  };

  const close = () => {
    setFontType(defaultFont);
    setColorTheme(defaultColor);
    setMain(defaultMin);
    setShortBreak(defaultShortBreak);
    setLongBreak(defaultLongBreak);
    closeSettings();
  };

  return (
    <div
      className={`${
        isSettingsOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className={`modal-container ${fontType}`}>
        <div className="modal-section">
          <h2>Settings</h2>
          <IconButton aria-label="settings" onClick={() => close()}>
            <CloseIcon />
          </IconButton>
        </div>
        <hr className="modal-divider"></hr>
        <ChangeTimers
          text="Time (Minutes)"
          main={main}
          short={shortBreak}
          long={longBreak}
          changeMain={changeMain}
          changeShort={changeShort}
          changeLong={changeLong}
        />
        <hr className="modal-divider"></hr>
        <ChangeFont
          text="Font"
          defaultFont={fontType}
          changeFont={changeFont}
        />
        <hr className="modal-divider"></hr>
        <ChangeColor
          text="Color"
          defaultColor={colorTheme}
          changeColor={changeColor}
        />

        <button
          className={`confirm-btn ${colorTheme} ${fontType}`}
          onClick={() => update(fontType, colorTheme)}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Settings;
