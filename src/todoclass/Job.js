import React from "react";

class Job extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  handleJobs = (props) => {};
  componentDidMount() {}
  handleOnchanOjob = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleAddJob = () => {
    this.props.handleAddJob(this.state.name);
    this.setState({
      name: "",
    });
  };
  handleDeleteJob = (item) => {
    this.props.handleDeleteJob(item);
  };
  render() {
    let name = this.state.name;
    let job = this.props.job;

    return (
      <>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => this.handleOnchanOjob(e)}
          />
          <button onClick={this.handleAddJob}>Add</button>
          {job &&
            job.length > 0 &&
            job.map((item, index) => {
              return (
                <div key={index} style={{ display: "flex" }}>
                  <div>{item.name}</div>

                  <div
                    style={{ marginLeft: "30px" }}
                    onClick={() => this.handleDeleteJob(item)}
                  >
                    x
                  </div>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}
export default Job;
