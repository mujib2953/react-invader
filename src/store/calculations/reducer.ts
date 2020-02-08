import {
    ADDITION,
    SUBTRACTION,
    MULTIPLICATION,

    CalculationState,
    CalculationActionTypes
} from "./types";

const inititalState: CalculationState = {
    value: 1,
};

export const CalculationReducer = (
    state = inititalState,
    action: CalculationActionTypes
) => {

    switch(action.type) {
        case ADDITION:
            return {
                ...state,
                value: (state.value + action.payload),
            }
        case SUBTRACTION:
            return {
                ...state,
                value: (state.value - action.payload),
            }
        case MULTIPLICATION:
            return {
                ...state,
                value: (state.value * action.payload),
            }
        default:
            return state;
    }
}
