import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './reducers/Users/Users'

export const store = configureStore({
    reducer: {
        users: usersReducer,
    }
})
