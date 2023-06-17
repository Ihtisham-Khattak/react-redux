import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETED_TODO,
  CLEAR_ALL_TODO,
} from "../actions/ActionType";

const initialState = {
  todos: [
    {
      id: 1,
      title: "TodoList 1",
      description: "This is first todo",
      isCompleted: true,
      isPending: false,
    },
    {
      id: 2,
      title: "TodoList 2",
      description: "This is second todo",
      isCompleted: false,
      isPending: true,
    },
    {
      id: 3,
      title: "TodoList 3",
      description: "This is third todo",
      isCompleted: false,
      isPending: true,
    },
  ],
  isEdit: false,
  editTodoId: "",
};

export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    //Add todo reducer
    case ADD_TODO:
      // Action dispatch the data would be updated.
      const { id, title, description } = action.payload;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: id,
            title: title,
            description: description,
            inCompleted: false,
            isPending: true,
          },
        ],
        isEdit: action.isEdit,
      };

    //Update todo reducer
    case UPDATE_TODO:
      //declear the payload
      const { todoId, todoTitle, todoDescription } = action.payload;
      //check wether the todo is not deleted
      const todos = state?.todos?.filter((todo) => todo?.id !== todoId);

      //find the todo and update it
      const todo = state?.todos?.find((todo) => todo?.id === todoId);
      todo.title = todoTitle;
      todo.description = todoDescription;
      todo.isCompleted = todo?.isCompleted;
      todo.isPending = todo?.isPending;

      // Push the updated data into real array
      todos.push(todo);

      return {
        ...state,
        todos: [...todos],
        isEdit: false,
      };

    // Delete todo reducer
    case DELETE_TODO:
      const deleteTodoList = state?.todos?.filter(
        (todo) => todo.id !== action.id
      );
      return {
        ...state,
        todos: deleteTodoList,
      };

    //Edit todo reducer
    case EDIT_TODO:
      const isEditTodo = action.payload;
      let editTodoList = state?.todos?.find((todo) => todo.id === action.id);
      return {
        ...state,
        isEdit: action.isEdit,
        isEditTodo: editTodoList,
      };

    case COMPLETED_TODO:
      const { selectedTodoId } = action.payload;
      let allTodos = [];

      selectedTodoId.forEach((id) => {
        allTodos = state.todos.filter((todo) => {
          return todo.id !== id;
        });

        const selectedTodo = state.todos.find((todo) => todo?.id === id);
        selectedTodo.title = selectedTodo?.title;
        selectedTodo.description = selectedTodo?.description;
        selectedTodo.isCompleted = true;
        selectedTodo.isPending = selectedTodo?.isPending;
        allTodos.push(selectedTodo);
      });

      return {
        ...state,
        todos: [...allTodos],
        isEdit: false,
      };

    // Clear todo reducer
    case CLEAR_ALL_TODO:
      return {
        ...state,
        todos: [],
      };

    default:
      return state;
  }
};
