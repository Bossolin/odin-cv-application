/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React, { Component } from "react";
import uniqid from "uniqid";
import Button from "./components/Button";
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
        desc: { name: "", lastName: "", email: "", phone: "" },
        isEditable: true,
      },
      studies: {
        desc: {
          schoolName: "",
          titleOfStudy: "",
          studyStart: "",
          studyEnd: "",
        },
        isEditable: true,
        itemList: [],
      },
      jobs: {
        desc: {
          companyName: "",
          position: "",
          mainTasks: "",
          jobStart: "",
          jobEnd: "",
        },
        isEditable: true,
        itemList: [],
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e, area) {
    this.setState((prevState) => {
      const newState = prevState;

      newState[area].desc[e.target.name] = e.target.value;

      return newState;
    });
  }

  handleSubmit(area) {
    const newState = { ...this.state };

    if (newState[area].itemList) {
      const newItem = newState[area].desc;
      newItem.id = uniqid();

      newState[area].itemList = [...newState[area].itemList, { ...newItem }];

      const keys = Object.keys(newState[area].desc);

      keys.forEach((key) => {
        newState[area].desc[key] = "";
      });
    }

    newState[area].isEditable = false;

    this.setState(newState);
  }

  handleEdit(area) {
    const newState = { ...this.state };

    newState[area].isEditable = !newState[area].isEditable;

    this.setState(newState);
  }

  handleDelete(id, area) {
    const newState = { ...this.state };

    const filteredArr = newState[area].itemList.filter((li) => li.id !== id);

    newState[area].itemList = filteredArr;

    this.setState(newState);
  }

  render() {
    const { general, studies, jobs } = this.state;
    return (
      <div className="App">
        <h1>CV Application</h1>
        <h2>General Info</h2>
        {general.isEditable ? (
          <GeneralInfo
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            info={general}
          />
        ) : (
          <DisplayGeneralInfo info={general} onEdit={this.handleEdit} />
        )}
        <h2>Studies Info</h2>
        {studies.isEditable ? (
          <Studies
            onSubmit={this.handleSubmit}
            info={studies}
            onChange={this.handleChange}
          />
        ) : (
          <Button onClick={this.handleEdit} area="studies" />
        )}
        {studies.itemList.map((li) => (
          <DisplayStudies info={li} onClick={this.handleDelete} key={li.id} />
        ))}
        {jobs.isEditable ? (
          <Jobs
            onSubmit={this.handleSubmit}
            info={jobs}
            onChange={this.handleChange}
          />
        ) : (
          <Button onClick={this.handleEdit} area="jobs" />
        )}
        {jobs.itemList.map((li) => (
          <DisplayJobs info={li} onClick={this.handleDelete} key={li.id} />
        ))}
        <button type="button" className="print-btn" onClick={window.print}>
          Print
        </button>
      </div>
    );
  }
}

export default App;
