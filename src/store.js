import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './features/employees/employeeSlice';
import questionsReducer from './features/employees/questionSlice';

export const store = configureStore({
    reducer: {
        employees: employeesReducer,
        questions: questionsReducer
    },
});