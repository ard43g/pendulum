const CHANGE_INPUT_RANGE_VALUE = "CHANGE_INPUT_RANGE_VALUE";
const START__ANIMATE = "START__ANIMATE";
const CHANGE_MODE = "CHANGE_MODE";

let initialState = {
    start: false,
    mode: "earth",
    inputs: [
        { name: "rod", value: 45, id: 1 },
        { name: "bob", value: 70, id: 2 },
        { name: "amplitude", value: 40, id: 3 },
    ],
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_RANGE_VALUE:
            const value = action.value;
            const name = action.name;
            const index = state.inputs.findIndex((i) => i.name === name);
            const newInputValue = { ...state.inputs[index], value: value };
            return {
                ...state,
                inputs: [...state.inputs.slice(0, index), newInputValue, ...state.inputs.slice(index + 1)],
            };
        case START__ANIMATE:
            return {
                ...state,
                start: action.boolean,
            };
        case CHANGE_MODE:
            return {
                ...state,
                mode: action.mode,
            };
        default:
            return state;
    }
};

const inputRangeValue = (value, name) => {
    return {
        type: CHANGE_INPUT_RANGE_VALUE,
        value,
        name,
    };
};

export const changeInputRange = (value, name) => {
    return (dispatch) => {
        dispatch(inputRangeValue(value, name));
    };
};

const animateStart = (boolean) => {
    return {
        type: START__ANIMATE,
        boolean,
    };
};

export const changeAnimateStart = (boolean, time, mode) => {
    return (dispatch) => {
        let timeAnim = time;
        if (mode === "space") {
            timeAnim = time * 2;
        }
        dispatch(animateStart(boolean));
        setTimeout(() => {
            dispatch(animateStart(false));
        }, +timeAnim * 1000);
    };
};

const setMode = (mode) => {
    return {
        type: CHANGE_MODE,
        mode,
    };
};

export const changeMode = (mode) => {
    return (dispatch) => {
        dispatch(setMode(mode));
    };
};

export default mainReducer;
