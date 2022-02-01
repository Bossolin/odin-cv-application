/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class DisplayStudies extends Component {
  render() {
    const { info, onClick } = this.props;

    return (
      <div className="general">
        <FontAwesomeIcon
          icon={faTrash}
          className="edit-icon"
          onClick={() => onClick(info.id, "studies")}
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
