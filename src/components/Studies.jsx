/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import "../styles/Studies.css";

class Studies extends Component {
  constructor(props) {
    super(props);

    const { info } = this.props;

    this.state = {
      schoolName: info.schoolName,
      titleOfStudy: info.titleOfStudy,
      studyStart: info.studyStart,
      studyEnd: info.studyEnd,
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onSubmit } = this.props;
    const studies = this.state;

    onSubmit(studies, "studies");
  }

  onChange(e) {
    this.setState((prevState) => {
      const newState = prevState;

      newState[e.target.name] = e.target.value;

      return newState;
    });
  }

  render() {
    const { schoolName, titleOfStudy, studyStart, studyEnd } = this.state;
    return (
      <div className="school">
        <h2>Studies</h2>
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
