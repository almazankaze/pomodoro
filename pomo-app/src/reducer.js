const reducer = (state, action) => {
  if (action.type === "TOGGLE_TIMER_TYPE") {
    return { ...state, currentTimer: action.payload };
  } else if (action.type === "UPDATE") {
    return {
      ...state,
      defaultFont: action.payload.font,
      defaultColor: action.payload.color,
    };
  } else {
    throw new Error("no matching action type");
  }
};

export default reducer;
