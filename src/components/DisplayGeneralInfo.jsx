/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

class DisplayGeneralInfo extends Component {
  render() {
    const { info, onEdit } = this.props;

    return (
      <div className="general">
        <h2>General Info</h2>
        <FontAwesomeIcon
          icon={faEdit}
          className="edit-icon"
          onClick={() => onEdit("general")}
        />
        <h3>Name: {info.name}</h3>
        <h3>Surname: {info.lastName}</h3>
        <h3>Email: {info.email}</h3>
        <h3>Phone Number: {info.phone}</h3>
      </div>
    );
  }
}

export default DisplayGeneralInfo;
