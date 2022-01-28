/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

class DisplayJobs extends Component {
  render() {
    const { info, onEdit } = this.props;

    return (
      <div className="general">
        <h2>Jobs Info</h2>
        <FontAwesomeIcon
          icon={faEdit}
          className="edit-icon"
          onClick={() => onEdit("jobs")}
        />
        <h3>Company Name: {info.companyName}</h3>
        <h3>Position: {info.position}</h3>
        <h3>Main Tasks: {info.mainTasks}</h3>
        <h3>Job Start: {info.jobStart}</h3>
        <h3>Job End: {info.jobEnd}</h3>
      </div>
    );
  }
}

export default DisplayJobs;
