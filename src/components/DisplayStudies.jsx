/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function DisplayStudies({ info, onClick }) {
  return (
    <div className="general">
      <FontAwesomeIcon
        icon={faTrash}
        className="edit-icon"
        onClick={() => onClick(info.id, "studies")}
      />
      <h3>School Name:</h3> {info.schoolName}
      <h3>Title of study:</h3> {info.titleOfStudy}
      <h3>Study Start:</h3> {info.studyStart}
      <h3>Study End:</h3> {info.studyEnd}
    </div>
  );
}

export default DisplayStudies;
