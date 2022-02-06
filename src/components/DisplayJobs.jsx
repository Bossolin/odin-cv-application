/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function DisplayJobs({ info, onClick }) {
  return (
    <div className="general">
      <FontAwesomeIcon
        icon={faTrash}
        className="edit-icon"
        onClick={() => onClick(info.id, "jobs")}
      />
      <h3>Company Name:</h3> {info.companyName}
      <h3>Position:</h3> {info.position}
      <h3>Main Tasks:</h3> {info.mainTasks}
      <h3>Job Start:</h3> {info.jobStart}
      <h3>Job End:</h3> {info.jobEnd}
    </div>
  );
}

export default DisplayJobs;
