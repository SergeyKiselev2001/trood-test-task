export const CHANGE_HEIGHT = "paramsReducer/change height";
export const CHANGE_WIDTH = "paramsReducer/change width";
export const CHANGE_BLOCKS_AMOUNT = "paramsReducer/change blocks amount";

export const SET_FILTER = "tableDataReducer/set filter";
export const SET_SORT_BY = "tableDataReducer/set sort by";

export const changeHeight = (payload) => ({
  payload,
  type: CHANGE_HEIGHT,
});

export const changeWidth = (payload) => ({
  payload,
  type: CHANGE_WIDTH,
});

export const changeBlocksAmount = (payload) => ({
  payload,
  type: CHANGE_BLOCKS_AMOUNT,
});

export const setFilter = (payload) => ({
  payload,
  type: SET_FILTER,
});

export const setSortBy = (payload) => ({
  payload,
  type: SET_SORT_BY,
});
