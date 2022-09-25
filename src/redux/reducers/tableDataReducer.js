import {
  SET_FILTER,
  SET_SORT_BY
} from "../actionCreators";

const initialState = {
  tableData: [
    {id: 1, name: 'Pyshky.net', status: 'blue', type: 'TRST', conditions: 'x2,6 months', volume: 120000, roi: 4, free: 20, hedge: 20},
    {id: 2, name: 'NFT-Flowershop', status: 'violet', type: 'THT', conditions: 'x4,2 years', volume: 80000, roi: 23, free: 12, hedge: 0},
    {id: 3, name: 'Web3 P2P University', status: 'azure', type: 'TRST', conditions: 'x2,1 years', volume: 200000, roi: 6, free: 1, hedge: 0},
    {id: 4, name: 'Bitcoin', status: 'azure', type: 'TRST', conditions: 'x5,1 months', volume: 4000, roi: 12, free: 5, hedge: 6},  
    {id: 5, name: 'DogeCoin', status: 'azure', type: 'THT', conditions: 'x7,1 years', volume: 67000, roi: 16, free: 0, hedge: 3},  
    {id: 6, name: 'TestName', status: 'blue', type: 'THT', conditions: 'x3 months', volume: 45700, roi: 5, free: 24, hedge: 7},
    {id: 7, name: 'Amazon', status: 'violet', type: 'TRST', conditions: 'x12,4 years', volume: 6700, roi: 11, free: 1, hedge: 5},
  ],
  sortBy: '-name',
  filters: {
    status: 'All',
    type: 'All'
  }

};

export const tableDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      }
    case SET_SORT_BY:
      const isSameField = `${state.sortBy}`.replace('-','') === `${action.payload}`.replace('-','')

      return {
        ...state,
        sortBy: !isSameField ?
          action.payload :
          (state.sortBy[0] === '-' ? action.payload : `-${action.payload}`)
      }
    default:
      return state;
  }
};
