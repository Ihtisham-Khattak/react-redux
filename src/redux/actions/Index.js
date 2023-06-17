//  Action: It sends data from your application to the Redux
//  store and serves as the only way to update the store.

//Logic of the Todos
import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  COMPLETED_TODO,
  CLEAR_ALL_TODO,
} from "./ActionType";

//Action of Add Todo
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: {
      id: Date.now(),
      title: todo?.title,
      description: todo?.description,
    },
  };
};

//Action of Delete Todo
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

//Action of Clear Todo
export const clearTodo = () => {
  return {
    type: CLEAR_ALL_TODO,
  };
};

//Action of Edit Todo
export const editTodo = (id) => {
  return {
    type: EDIT_TODO,
    payload: {
      id: id,
    },
    isEdit: true,
  };
};

//Action of Update Todo
export const updateTodo = (id, todo) => {
  return {
    type: UPDATE_TODO,
    payload: {
      todoID: id,
      todoTitle: todo?.title,
      todoDescription: todo?.description,
    },
  };
};

//Aciton of Completed Todo
export const completedTodo = (id) => {
  return {
    type: COMPLETED_TODO,
    payload: {
      selectedTodoID: id,
    },
  };
};
