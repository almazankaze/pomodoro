import React, { useContext, useReducer, useState, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const myState = {
  defaultMin: 20,
  defaultSec: 0,
  defaultTotalSec: 1200,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, myState);

  const [isActive, setIsActive] = useState(false);
  const [minutes, setMinutes] = useState(state.defaultMin);
  const [seconds, setSeconds] = useState(state.defaultSec);
  const [totalSeconds, setTotalSeconds] = useState(state.defaultTotalSec);
  const [currentTimer, setCurrentTimer] = useState(0);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const getTimePercentage = () => {
    return (totalSeconds / state.defaultTotalSec) * 100;
  };

  const toggleTimerButton = () => {
    if (totalSeconds <= 0) {
      // reset timer
      setMinutes(state.defaultMin);
      setTotalSeconds(state.defaultTotalSec);
    }

    setIsActive(!isActive);
  };

  const changeTimer = (timer) => {
    setCurrentTimer(timer);
  };

  const openSettings = () => {
    setIsSettingsOpen(true);
  };

  const closeSettings = () => {
    setIsSettingsOpen(false);
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

  return (
    <AppContext.Provider
      value={{
        ...state,
        getTimePercentage,
        toggleTimerButton,
        changeTimer,
        openSettings,
        closeSettings,
        isActive,
        minutes,
        seconds,
        currentTimer,
        isSettingsOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
