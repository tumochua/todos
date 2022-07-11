const initialState = {
  todos: [
    // { id: 1, title: "viec 1", completed: false },
    // { id: 2, title: "viec 2", completed: false },
    // { id: 3, title: "viec 3", completed: false },
  ],
};

const todoReducers = (state = initialState, action) => {
  // console.log("check actions :", action);
  switch (action.type) {
    case "MARK_COMPLETE":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };

    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "GET_TODOS":
      return {
        ...state,
        todos: action.payload,
      };

    default:
      return state;
  }
};

export default todoReducers;
