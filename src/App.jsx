/* eslint-disable class-methods-use-this */
import React, { Component } from "react";
import DisplayGeneralInfo from "./components/DisplayGeneralInfo";
import DisplayJobs from "./components/DisplayJobs";
import DisplayStudies from "./components/DisplayStudies";
import GeneralInfo from "./components/GeneralInfo";
import Jobs from "./components/Jobs";
import Studies from "./components/Studies";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: { name: "", email: "", phone: "", isEditable: true },
      studies: {
        schoolName: "",
        titleOfStudy: "",
        studyStart: "",
        studyEnd: "",
        isEditable: true,
      },
      jobs: {
        companyName: "",
        position: "",
        mainTasks: "",
        jobStart: "",
        jobEnd: "",
        isEditable: true,
      },
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onSubmit(partialState, area) {
    this.setState((prevState) => {
      const newState = prevState;

      newState[area] = { ...newState[area], ...partialState };
      newState[area].isEditable = false;

      return newState;
    });
  }

  onEdit(area) {
    this.setState((prevState) => {
      const newState = prevState;

      newState[area].isEditable = true;

      return newState;
    });
  }

  render() {
    const { general, studies, jobs } = this.state;
    return (
      <div className="App">
        <h1>CV Application</h1>
        {general.isEditable ? (
          <GeneralInfo onSubmit={this.onSubmit} info={general} />
        ) : (
          <DisplayGeneralInfo info={general} onEdit={this.onEdit} />
        )}
        {studies.isEditable ? (
          <Studies onSubmit={this.onSubmit} info={studies} />
        ) : (
          <DisplayStudies info={studies} onEdit={this.onEdit} />
        )}
        {jobs.isEditable ? (
          <Jobs onSubmit={this.onSubmit} info={jobs} />
        ) : (
          <DisplayJobs info={jobs} onEdit={this.onEdit} />
        )}
      </div>
    );
  }
}

export default App;
