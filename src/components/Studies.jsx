/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import "../styles/Studies.css";

class Studies extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onSubmit } = this.props;

    onSubmit("studies");
  }

  onChange(e) {
    const { onChange } = this.props;

    onChange(e, "studies");
  }

  render() {
    const {
      info: {
        desc: { schoolName, titleOfStudy, studyStart, studyEnd },
      },
    } = this.props;

    return (
      <div className="school">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="schoolName">
            School Name:
            <input
              type="text"
              name="schoolName"
              id="schoolName"
              value={schoolName}
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="titleOfStudy">
            Title of study:
            <input
              type="text"
              name="titleOfStudy"
              id="titleOfStudy"
              value={titleOfStudy}
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="studyStart">
            Study start:
            <input
              type="date"
              name="studyStart"
              id="studyStart"
              value={studyStart}
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="studyEnd">
            Study end:
            <input
              type="date"
              name="studyEnd"
              id="studyEnd"
              value={studyEnd}
              onChange={this.onChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Studies;
