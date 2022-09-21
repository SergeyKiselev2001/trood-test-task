import { CHANGE_BLOCKS_AMOUNT, CHANGE_HEIGHT, CHANGE_WIDTH } from "../actionCreators";

const initialState = {
    width: 800,
    height: 30,
    blocksAmount: 100,
};

export const paramsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_WIDTH:
            return { ...state, width: Number(action.payload) };
        case CHANGE_HEIGHT:
            return { ...state, height: Number(action.payload) };
        case CHANGE_BLOCKS_AMOUNT:
            return { ...state, blocksAmount: Number(action.payload) };
        default:
            return state;
    }
};
