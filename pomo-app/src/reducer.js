const reducer = (state, action) => {
  if (action.type === "TOGGLE_TIMER_TYPE") {
    return { ...state, currentTimer: action.payload };
  } else if (action.type === "UPDATE") {
    return {
      ...state,
      defaultFont: action.payload.font,
      defaultColor: action.payload.color,
    };
  } else if (action.type === "UPDATE_MAIN_MINUTES") {
    return {
      ...state,
      defaultMin: action.payload,
    };
  } else if (action.type === "UPDATE_SHORT_MINUTES") {
    return {
      ...state,
      defaultShortBreak: action.payload,
    };
  } else if (action.type === "UPDATE_LONG_MINUTES") {
    return {
      ...state,
      defaultLongBreak: action.payload,
    };
  } else {
    throw new Error("no matching action type");
  }
};

export default reducer;
