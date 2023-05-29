import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
    {
        id: uuidv4(), 
        name: 'Emma Murray', 
        email: 'emurray@rajant.com', 
        title: 'VP of Operations', 
        food: 'Pesto penne pasta with peppered pinenuts and parmesean with pan chocolate for dessert', 
        vacation: 'Hiking in the Alps'
    },
    {
        id: uuidv4(), 
        name: 'Nathan Budziszewski', 
        email: 'nbudziszewski@rajant.com', 
        title: 'VP of Engineering', 
        food: 'Baja fish tacos with spicy slaw and applesauce', 
        vacation: 'Camping at Big Bend with the family' 
    },
    {
        id: uuidv4(), 
        name: 'Foad Nazari', 
        email: 'fnazari@rajant.com', 
        title: 'Principle Genomic Scientist', 
        food: 'Spicy Mac and Cheese with bbq sauce and vanilla pudding', 
        vacation: 'Cruise in the Mediterranean Sea' 
    },
    {
        id: uuidv4(), 
        name: 'Jessamyn McTwigan', 
        email: 'jmctwigan@rajant.com', 
        title: 'Frontend Software Engineer', 
        food: 'Loaded baked potato with cheddar, cholula and chives', 
        vacation: 'Surfing in Portugal' 
    },
    {
        id: uuidv4(), 
        name: 'Tim Chin', 
        email: 'tchin@rajant.com', 
        title: 'Cybersecurity Professional', 
        food: 'Fried onion rings with roasted brussel sprouts', 
        vacation: 'Skiing in Lake Tahoe' 
    }
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