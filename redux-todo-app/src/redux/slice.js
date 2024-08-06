import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },

        deleteTodo: (state, action) => {
            state.todos.splice(action.payload, 1)
        },

        editTodo: (state, action) => {
            state.todos.splice(action.payload.index, 1, action.payload.value)
        }
    }
})

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer

//check