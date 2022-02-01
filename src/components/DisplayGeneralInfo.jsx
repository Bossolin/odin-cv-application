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
        <h3>Name: {info.desc.name}</h3>
        <h3>Surname: {info.desc.lastName}</h3>
        <h3>Email: {info.desc.email}</h3>
        <h3>Phone Number: {info.desc.phone}</h3>
      </div>
    );
  }
}

export default DisplayGeneralInfo;
