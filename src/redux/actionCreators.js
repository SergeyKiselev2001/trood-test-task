export const CHANGE_HEIGHT = 'paramsReducer/change height'
export const CHANGE_WIDTH = 'paramsReducer/change width'
export const CHANGE_BLOCKS_AMOUNT = 'paramsReducer/change blocks amount'

export const changeHeight = (payload) => ({
    payload,
    type: CHANGE_HEIGHT
})

export const changeWidth = (payload) => ({
    payload,
    type: CHANGE_WIDTH
})

export const changeBlocksAmount = (payload) => ({
    payload,
    type: CHANGE_BLOCKS_AMOUNT
})

