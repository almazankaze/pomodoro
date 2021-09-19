import React, { useContext, useReducer} from "react";
import reducer from "./reducer";

const AppContext = React.createContext()

const initialState = {
    isActive: false,
    minutes: 20,
    seconds: 0,
};

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleTimerButton = () => {
        dispatch({type: "TOGGLE_TIMER_BUTTON", payload: state.isActive})
    }

    return (
    <AppContext.Provider value={{ ...state, toggleTimerButton }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };