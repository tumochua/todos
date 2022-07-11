import React from "react";
import ArrayJob from "./ArrayJob";
class TodoClassCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  handleAddNewUser = (item) => {
    let add = this.state.users;
    add.push({ id: Math.floor(Math.random() * 100), name: item });
    this.setState({
      users: add,
    });
  };
  handleDeleteUser = (users) => {
    let user = this.state.users;
    user = user.filter((item, index) => item.id !== users.id);
    this.setState({
      users: user,
    });
  };
  render() {
    console.log(this.state.users);
    return (
      <>
        <h1>Hello code lai</h1>
        {/* <ArrayJob /> */}
        <ArrayJob
          handleAddNewUser={this.handleAddNewUser}
          users={this.state.users}
          handleDeleteUser={this.handleDeleteUser}
        />
      </>
    );
  }
}

export default TodoClassCode;
