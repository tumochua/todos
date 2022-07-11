import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../redux/store/actions/todoActions";
function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");
  const handleAddTodo = (e) => {
    e.preventDefault();

    const newTodos = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    addTodo(newTodos);
    setTitle("");
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <form onSubmit={handleAddTodo}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <input type="submit" value="Add" />
        </form>
      </div>
    </>
  );
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { addTodo })(TodoForm);
