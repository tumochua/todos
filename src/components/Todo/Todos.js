import React, { useEffect } from "react";
import PropTyes from "prop-types";
import { connect } from "react-redux";
import {
  markComplete,
  deleteTodo,
  getTodos,
} from "../../redux/store/actions/todoActions";
import TodoForm from "./TodoForm";

function Todos({ todos, markComplete, deleteTodo, getTodos }) {
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <>
      <div className="todo-list">
        <TodoForm />
        <ul>
          {todos &&
            todos.length > 0 &&
            todos.map((item, index) => {
              return (
                <li key={index} className={item.completed ? "completed" : ""}>
                  {item.title}
                  <input
                    type="checkbox"
                    onChange={markComplete.bind(this, item.id)}
                  />
                  <button onClick={() => deleteTodo(item.id)}>Delete</button>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

Todos.PropTyes = {
  todos: PropTyes.array.isRequired,
  getTodos: PropTyes.func.isRequired,
  markComplete: PropTyes.func.isRequired,
  deleteTodo: PropTyes.func.isRequired,
};
const mapStateToProps = (state) => ({
  todos: state.myTodos.todos,
});

export default connect(mapStateToProps, { markComplete, deleteTodo, getTodos })(
  Todos
);
