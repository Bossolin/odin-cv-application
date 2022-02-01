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
        <FontAwesomeIcon
          icon={faEdit}
          className="edit-icon"
          onClick={() => onEdit("general")}
        />
        <div>
          <h3>Name:</h3> {info.desc.name}
        </div>
        <div>
          <h3>Surname:</h3> {info.desc.lastName}
        </div>
        <div>
          <h3>Email:</h3> {info.desc.email}
        </div>
        <div>
          <h3>Phone Number:</h3> {info.desc.phone}
        </div>
      </div>
    );
  }
}

export default DisplayGeneralInfo;
