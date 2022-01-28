/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import "../styles/Jobs.css";

class Jobs extends Component {
  constructor(props) {
    super(props);

    const { info } = this.props;

    this.state = {
      companyName: info.companyName,
      position: info.position,
      mainTasks: info.mainTasks,
      jobStart: info.jobStart,
      jobEnd: info.jobEnd,
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onSubmit } = this.props;
    const jobs = this.state;

    onSubmit(jobs, "jobs");
  }

  onChange(e) {
    this.setState((prevState) => {
      const newState = prevState;

      newState[e.target.name] = e.target.value;

      return newState;
    });
  }

  render() {
    const { companyName, position, mainTasks, jobStart, jobEnd } = this.state;

    return (
      <div className="jobs">
        <h2>Jobs</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="companyName">
            Company Name:
            <input
              type="text"
              name="companyName"
              id="companyName"
              value={companyName}
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="position">
            Position:
            <input
              type="text"
              name="position"
              id="position"
              value={position}
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="mainTasks">
            Main tasks:
            <textarea
              name="mainTasks"
              id="mainTasks"
              value={mainTasks}
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="jobStart">
            Job start:
            <input
              type="date"
              name="jobStart"
              id="jobStart"
              value={jobStart}
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="jobEnd">
            Job end:
            <input
              type="date"
              name="jobEnd"
              id="jobEnd"
              value={jobEnd}
              onChange={this.onChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Jobs;
