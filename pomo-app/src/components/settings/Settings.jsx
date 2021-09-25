import React, { useState } from "react";
import "./styles/Settings.css";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useGlobalContext } from "../../context";
import ChangeFont from "./ChangeFont";
import ChangeTimers from "./ChangeTimers";
import ChangeColor from "./ChangeColor";

const Settings = () => {
  const { isSettingsOpen, closeSettings } = useGlobalContext();
  const [fontType, setFontType] = useState("");
  const [colorTheme, setColorTheme] = useState("");

  const changeFont = (font) => {
    setFontType(font);
  };

  const changeColor = (color) => {
    setColorTheme(color);
  };

  return (
    <div
      className={`${
        isSettingsOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <div className="modal-section">
          <h2>Settings</h2>
          <IconButton aria-label="settings" onClick={() => closeSettings()}>
            <CloseIcon />
          </IconButton>
        </div>
        <hr className="modal-divider"></hr>
        <ChangeTimers text="Time (Minutes)" />
        <hr className="modal-divider"></hr>
        <ChangeFont text="Font" />
        <hr className="modal-divider"></hr>
        <ChangeColor text="Color" />

        <button className="confirm-btn" onClick={() => closeSettings()}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default Settings;
