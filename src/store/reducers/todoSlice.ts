import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTodos, addTodo, toggleTodo, deleteTodo } from "../reducers/todoAction";
import { ITodos, todoState } from "../../types/ITodos";

const initialState: todoState = {
  todos: [],
  isLoading: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getTodos.fulfilled,
      (state, action: PayloadAction<ITodos[]>) => {
        state.isLoading = false;
        state.todos = action.payload;
      }
    );
    builder.addCase(addTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      addTodo.fulfilled,
      (state, action: PayloadAction<ITodos>) => {
        state.isLoading = false;
        state.todos.push(action.payload);
      }
    );
    builder.addCase(toggleTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      toggleTodo.fulfilled,
      (state, action: PayloadAction<ITodos>) => {
        state.isLoading = false;
        state.todos = state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return action.payload;
          }
          return todo;
        });
      }
    );
    builder.addCase(deleteTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      deleteTodo.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
      }
    );
  },
});
export default todoSlice.reducer;
