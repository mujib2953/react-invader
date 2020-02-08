import { combineReducers } from "redux";

import { ChatReducer } from "./chat/reducer";
import { CalculationReducer } from "./calculations/reducer";

export const rootReducer = combineReducers({
    chat: ChatReducer,
    calci: CalculationReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
