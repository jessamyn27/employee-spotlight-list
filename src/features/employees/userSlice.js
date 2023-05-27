import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialState = [
    { id: uuidv4(), name: 'Pina', email: 'pina@example.com' },
    { id: uuidv4(), name: 'Max', email: 'max@example.com' },
];

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.push(action.payload);
        },
        editEmployee: (state, action) => {
            const { id, name, email} = action.payload;
            const existingUser = state.find(user => user.id === id);
            if(existingUser) {
                existingUser.name = name;
                existingUser.email = email;
            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload;
            const existingUser = state.find(user => user.id === id)
            if(existingUser) {
                return state.filter(user => user.id !== id)
            }
        }
    },
})

export const { addEmployee, editEmployee, deleteUser } = userSlice.actions;

export default userSlice.reducer;