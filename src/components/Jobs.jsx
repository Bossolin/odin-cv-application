/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

class Jobs extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onSubmit } = this.props;

    onSubmit("jobs");
  }

  onChange(e) {
    const { onChange } = this.props;

    onChange(e, "jobs");
  }

  render() {
    const {
      info: {
        desc: { companyName, position, mainTasks, jobStart, jobEnd },
      },
    } = this.props;

    return (
      <div className="general">
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
