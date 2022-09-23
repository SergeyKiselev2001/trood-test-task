import { SET_FILTER, SET_SORT_BY, SET_TYPE } from "../actionCreators";

const initialState = {
  tableData: [
    {id: 1, name: 'Pyshky.net', status: 'green', type: 'TRST', conditions: 'x2,6 months', volume: 120000, roi: 4, free: 20, hedge: 20},
    {id: 2, name: 'NFT-Flowershop', status: 'yellow', type: 'THT', conditions: 'x4,2 years', volume: 80000, roi: 23, free: 12, hedge: 0},
    {id: 4, name: 'Web3 P2P University', status: 'red', type: 'TRST', conditions: 'x2,1 years', volume: 200000, roi: 6, free: 1, hedge: 0},
    {id: 5, name: 'Bitcoin', status: 'red', type: 'TRST', conditions: 'x5,1 years', volume: 4000, roi: 12, free: 5, hedge: 6},  
    {id: 6, name: 'DogeCoin', status: 'red', type: 'THT', conditions: 'x7,1 years', volume: 67000, roi: 16, free: 0, hedge: 3},  
  ],
  sortBy: 'name',
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
          const payloadCopy = action.payload
          const sortByCopy = state.sortBy
          const isSameField = sortByCopy.replace('-','') === payloadCopy.replace('-','')

          let newSortBy

          if (!isSameField) {
            newSortBy = action.payload
          } else {
            newSortBy = state.sortBy[0] === '-' ?  action.payload : `-${action.payload}`
          }



          return {
            ...state,
            sortBy: newSortBy
          }
        default:
            return state;
    }
};
