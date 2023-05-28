import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './features/employees/employeeSlice';

export const store = configureStore({
    reducer: {
        employees: employeesReducer
    },
});