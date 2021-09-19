import React, { useContext, useReducer, useState, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const myState = {
  defaultMin: 0,
  defaultSec: 40,
  defaultTotalSec: 40,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, myState);

  const [isActive, setIsActive] = useState(false);
  const [minutes, setMinutes] = useState(state.defaultMin);
  const [seconds, setSeconds] = useState(state.defaultSec);
  const [totalSeconds, setTotalSeconds] = useState(state.defaultTotalSec);

  const getTimePercentage = () => {
    return (totalSeconds / state.defaultTotalSec) * 100;
  };

  // reducer functions
  const toggleTimerButton = () => {
    if (totalSeconds <= 0) {
      // reset timer
    }

    setIsActive(!isActive);
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
  }, [isActive, seconds, totalSeconds]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        getTimePercentage,
        toggleTimerButton,
        minutes,
        seconds,
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
