import React from "react";
import PropTyes from "prop-types";
import { connect } from "react-redux";

function Navbar({ todos }) {
  return (
    <>
      <div className="navbar">
        <h1>My Redux Todos App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Total todos: {todos.length}</li>
        </ul>
      </div>
    </>
  );
}
Navbar.PropTyes = {
  todos: PropTyes.array.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.myTodos.todos,
});
export default connect(mapStateToProps, {})(Navbar);
