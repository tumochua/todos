import React from "react";
import Job from "./Job.js";
class TodoClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [
        { id: 1, name: "html css" },
        { id: 2, name: "reactjs" },
        { id: 3, name: "spring boot" },
      ],
    };
  }

  componentDidMount() {
    let result = JSON.parse(localStorage.getItem("savelocalStorage") || "[]");
    if (result != null) {
      this.setState({
        jobs: result,
      });
    }
  }

  handleAddJob = (job) => {
    let jobName = { id: Math.floor(Math.random() * 100), name: job };
    let setJob = this.state.jobs;
    setJob.push(jobName);
    this.setState({
      setJob: setJob,
    });
    let savelocalStorage = this.state.jobs;

    localStorage.setItem("savelocalStorage", JSON.stringify(savelocalStorage));
  };
  handleDeleteJob = (job) => {
    let currenJob = this.state.jobs;
    currenJob = currenJob.filter((item) => item.id !== job.id);
    this.setState({
      jobs: currenJob,
    });
  };
  render() {
    return (
      <>
        <Job
          handleAddJob={this.handleAddJob}
          job={this.state.jobs}
          handleDeleteJob={this.handleDeleteJob}
        />
      </>
    );
  }
}
export default TodoClass;
