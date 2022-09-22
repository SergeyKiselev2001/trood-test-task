import { configureStore } from '@reduxjs/toolkit'
import { paramsReducer } from './reducers/paramsReducer'
import { tableDataReducer } from './reducers/tableDataReducer'

export const store = configureStore({
    reducer: {
        paramsReducer,
        tableDataReducer
    }
})