import React, { useContext, useReducer, useState } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const myState = {
  defaultMin: 20,
  defaultShortBreak: 5,
  defaultLongBreak: 15,
  defaultColor: "theme1-color",
  defaultFont: "font1",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, myState);

  const [currentTimer, setCurrentTimer] = useState(0);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const changeTimer = (timer) => {
    setCurrentTimer(timer);
  };

  const openSettings = () => {
    setIsSettingsOpen(true);
  };

  const closeSettings = () => {
    setIsSettingsOpen(false);
  };

  // reducer
  const update = (font, color) => {
    dispatch({ type: "UPDATE", payload: { font, color } });
    setIsSettingsOpen(false);
  };

  const updateMainMinutes = (min) => {
    dispatch({ type: "UPDATE_MAIN_MINUTES", payload: min });
  };

  const updateShortMinutes = (min) => {
    dispatch({ type: "UPDATE_SHORT_MINUTES", payload: min });
  };

  const updateLongMinutes = (min) => {
    dispatch({ type: "UPDATE_LONG_MINUTES", payload: min });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        changeTimer,
        openSettings,
        closeSettings,
        update,
        updateMainMinutes,
        updateShortMinutes,
        updateLongMinutes,
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
