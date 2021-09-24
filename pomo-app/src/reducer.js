const reducer = (state, action) => {
  if (action.type === "TOGGLE_TIMER_TYPE") {
    return { ...state, currentTimer: action.payload };
  } else {
    throw new Error("no matching action type");
  }
};

export default reducer;
