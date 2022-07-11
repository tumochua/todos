import axios from "axios";
import { ADD_TODO, MARK_COMPLETE, DELETE_TODO, GET_TODOS } from "../types";
export const markComplete = (id) => (dispatch) => {
  dispatch({
    type: MARK_COMPLETE,
    payload: id,
  });
};
export const addTodo = (NewTodo) => async (dispatch) => {
  try {
    await axios.post("https://jsonplaceholder.typicode.com/todos", NewTodo);
    dispatch({
      type: ADD_TODO,
      payload: NewTodo,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteTodo = (todoId) => async (dispatch) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    dispatch({
      type: DELETE_TODO,
      payload: todoId,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    dispatch({
      type: GET_TODOS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
