import {
    ADDITION,
    SUBTRACTION,
    MULTIPLICATION,
} from "./types";

export const doAddition = (value: number) => {
    return {
        type: ADDITION,
        payload: value,
    }
};

export const doSubtraction = (value: number) => {
    return {
        type: SUBTRACTION,
        payload: value,
    }
};

export const doMultiplication = (value: number) => {
    return {
        type: MULTIPLICATION,
        payload: value,
    }
};
