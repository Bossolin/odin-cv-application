/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

class DisplayStudies extends Component {
  render() {
    const { info, onEdit } = this.props;

    return (
      <div className="general">
        <h2>Studies Info</h2>
        <FontAwesomeIcon
          icon={faEdit}
          className="edit-icon"
          onClick={() => onEdit("studies")}
        />
        <h3>School Name: {info.schoolName}</h3>
        <h3>Title of study: {info.titleOfStudy}</h3>
        <h3>Study Start: {info.studyStart}</h3>
        <h3>Study End: {info.studyEnd}</h3>
      </div>
    );
  }
}

export default DisplayStudies;
