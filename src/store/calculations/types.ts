export interface CalculationState {
    value: number;
}

export const ADDITION = "ADDITION";
export const SUBTRACTION = "SUBTRACTION";
export const MULTIPLICATION = "MULTIPLICATION";

interface AddtionAction {
    type: typeof ADDITION;
    payload: number;
}

interface SubtractionAction {
    type: typeof SUBTRACTION;
    payload: number;
}

interface MultiplicationAction {
    type: typeof MULTIPLICATION;
    payload: number;
}

export type CalculationActionTypes = AddtionAction | SubtractionAction | MultiplicationAction;
