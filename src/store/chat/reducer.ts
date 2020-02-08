import {
    ChatState,
    ChatActionTypes,

    SEND_MESSAGE,
    DELETE_MESSAGE,
} from "./types";

const intialState: ChatState = {
    messages: [],
};

export const ChatReducer = (
    state: ChatState = intialState,
    action: ChatActionTypes
) => {

    switch(action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };

        case DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter((message) => message.timestamp !== action.meta.timestamp),
            };

        default:
            return state;
    }
}
