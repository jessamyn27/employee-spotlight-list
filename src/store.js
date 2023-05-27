import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './features/employees/userSlice';

export const store = configureStore({
    reducer: {
        users: usersReducer
    },
})