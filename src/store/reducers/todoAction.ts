import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../components/Api/Api";
import { ITodos } from "../../types/ITodos";

// Запрос
export const getTodos = createAsyncThunk(
  "todos/getTodos", 
  async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1/todos");
  return await res.json();
});

// Добавление
export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async function (title: string) {
    const res = await fetch(`${baseUrl}/todos`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({title})
    });

    return await res.json()
});

// Редактирование
export const toggleTodo = createAsyncThunk(
  "todos/update",
  async function (todo: ITodos) {
    const res = await fetch(`${baseUrl}/todos/${todo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({completed: !todo.completed})
    });

    return await res.json()
  }
)

// Удаление
export const deleteTodo = createAsyncThunk(
  "todos/delete",
  async function (id: string) {
    const res = await fetch(`${baseUrl}/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id})
    });

    return id
  }
)