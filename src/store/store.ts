import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { todoReducer } from "./reducers/todoReducer"


export const rootReducer = combineReducers({
    todo: todoReducer
})

export const setupStore = () => {
    const store = configureStore({
        reducer: rootReducer
    })

    return store
}
