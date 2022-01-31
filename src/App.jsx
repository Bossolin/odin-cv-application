/* eslint-disable class-methods-use-this */
import React, { Component } from "react";
import uniqid from "uniqid";
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
      general: {
        name: "",
        lastName: "",
        email: "",
        phone: "",
        isEditable: true,
      },
      studies: {
        schoolName: "",
        titleOfStudy: "",
        studyStart: "",
        studyEnd: "",
        isEditable: true,
        itemList: [],
      },
      jobs: {
        companyName: "",
        position: "",
        mainTasks: "",
        jobStart: "",
        jobEnd: "",
        isEditable: true,
        itemList: [],
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleSubmit(partialState, area) {
    this.setState((prevState) => {
      const newState = prevState;

      if (newState[area].itemList) {
        const newItem = partialState;
        newItem.id = uniqid();

        newState[area].itemList = [...newState[area].itemList, newItem];
      }

      newState[area].isEditable = false;

      return newState;
    });
  }

  handleEdit(area) {
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
          <GeneralInfo onSubmit={this.handleSubmit} info={general} />
        ) : (
          <DisplayGeneralInfo info={general} onEdit={this.handleEdit} />
        )}
        {studies.isEditable && (
          <Studies onSubmit={this.handleSubmit} info={studies} />
        )}
        {studies.itemList.map((li) => (
          <DisplayStudies
            info={li}
            /* onEdit={this.handleEdit} */ key={li.id}
          />
        ))}
        {jobs.isEditable ? (
          <Jobs onSubmit={this.handleSubmit} info={jobs} />
        ) : (
          <DisplayJobs info={jobs} onEdit={this.handleEdit} />
        )}
        <button type="button" className="print-btn" onClick={window.print}>
          Print
        </button>
      </div>
    );
  }
}

export default App;
