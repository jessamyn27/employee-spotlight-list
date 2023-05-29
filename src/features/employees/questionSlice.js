import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
    {
        id: uuidv4(), 
        question: 'If you could have a superpower, what would would it be and why?'
    },
    {
        id: uuidv4(), 
        question: 'As a kid, what was your worst fashion choice?'
    },
    {
        id: uuidv4(), 
        question: 'What you do with a million dollars?'
    },
];

export const questionSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        addQuestion: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { addQuestion } = questionSlice.actions;
export default questionSlice.reducer;