/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import "../styles/Studies.css";

class Studies extends Component {
  render() {
    return (
      <div className="school">
        <h2>Studies</h2>
        <form>
          <label htmlFor="schoolName">
            School Name:
            <input type="text" name="schoolName" id="schoolName" />
          </label>
          <label htmlFor="title">
            Title of study:
            <input type="text" name="title" id="title" />
          </label>
          <label htmlFor="studyStart">
            Study start:
            <input type="date" name="studyStart" id="studyStart" />
          </label>
          <label htmlFor="studyEnd">
            Study end:
            <input type="date" name="studyEnd" id="studyEnd" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Studies;
