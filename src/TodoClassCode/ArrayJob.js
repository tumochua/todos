import React from "react";

class ArrayJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  handleOnchange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleClick = () => {
    this.props.handleAddNewUser(this.state.name);
    this.setState({
      name: "",
    });
  };
  handleDele = (item) => {
    this.props.handleDeleteUser(item);
  };
  render() {
    let user = this.props.users;
    return (
      <>
        <label>Name</label>
        <input
          value={this.state.name}
          onChange={(e) => this.handleOnchange(e)}
        />
        <button onClick={this.handleClick}>Add</button>
        <div>
          {user &&
            user.length > 0 &&
            user.map((item, index) => {
              return (
                <>
                  <div style={{ display: "flex" }} key={item.id}>
                    <div>{item.name}</div>
                    {user && user.length > 0 && (
                      <div
                        style={{ marginLeft: "20px" }}
                        onClick={() => this.handleDele(item)}
                      >
                        x
                      </div>
                    )}
                  </div>
                </>
              );
            })}
        </div>
      </>
    );
  }
}
export default ArrayJob;
