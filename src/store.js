import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './features/employees/employeeSlice';
import questionsReducer from './features/questions/questionSlice';

export const store = configureStore({
    reducer: {
        employees: employeesReducer,
        questions: questionsReducer
    },
});