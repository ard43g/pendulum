export const mainSelector = (state, name) => {
    return state[name];
};

export const getInputs = (state) => {
    return state.inputs;
};

export const getRodValue = (state) => {
    const el = state.inputs.filter((i) => i.name === "rod");
    return +el[0].value;
};

export const getBobValue = (state) => {
    const el = state.inputs.filter((i) => i.name === "bob");
    return +el[0].value;
};

export const getAmplitudeValue = (state) => {
    const el = state.inputs.filter((i) => i.name === "amplitude");
    return +el[0].value;
};

export const getIsAnimated = (state) => {
    return state.start;
};

export const getMode = (state) => {
    return state.mode;
};
