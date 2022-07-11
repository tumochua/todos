const initialState = {
  todos: [
    { id: 1, title: "viec 1", completed: false },
    { id: 2, title: "viec 2", completed: false },
    { id: 3, title: "viec 3", completed: false },
    { id: 3, title: "viec 3", completed: false },
  ],
};
const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "":
      return {};

    default:
      return state;
  }
};
export default todoReducers;
