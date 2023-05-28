import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
    {
        id: uuidv4(), 
        name: 'Emma Murray', 
        email: 'emurray@ragant.com', 
        title: 'VP of Operations', 
        food: 'Pesto penne pasta with peppered pinenuts and parmesean with pan chocolate for dessert', 
        vacation: 'Hiking in the Alps'
    },
    {
        id: uuidv4(), 
        name: 'Jessamyn McTwigan', 
        email: 'jmctwigan@ragant.com', 
        title: 'Frontend Software Engineer', 
        food: 'Loaded baked potato with cheddar, cholula and chives', 
        vacation: 'Surfing in Portugal' 
    },
];

export const employeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.push(action.payload);
        },
        editEmployee: (state, action) => {
            const { id, name, email, title, food, vacation } = action.payload;
            const existingEmployee = state.find(employee => employee.id === id);
            if(existingEmployee) {
                existingEmployee.name = name;
                existingEmployee.email = email;
                existingEmployee.title = title;
                existingEmployee.food = food;
                existingEmployee.vacation = vacation;
            }
        },
        deleteEmployee: (state, action) => {
            const { id } = action.payload;
            const existingEmployee = state.find(employee => employee.id === id)
            if(existingEmployee) {
                return state.filter(employee => employee.id !== id)
            }
        }
    },
});

export const { addEmployee, editEmployee, deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;