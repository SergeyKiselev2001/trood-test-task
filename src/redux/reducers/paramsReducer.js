import { CHANGE_HEIGHT, CHANGE_WIDTH } from "../actionCreators";

const initialState = {
    width: 300,
    height: 20,
};

export const paramsReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_WIDTH:
            return { ...state, width: Number(action.payload) };
        case CHANGE_HEIGHT:
            return { ...state, height: Number(action.payload) };

        default:
            return state;
    }
};
