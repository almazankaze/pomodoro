const reducer = (state, action) => {

    if (action.type === 'TOGGLE_TIMER_BUTTON') {
        return { ...state, isActive: !action.payload };
    } else {
        throw new Error('no matching action type')
    }
};

export default reducer;