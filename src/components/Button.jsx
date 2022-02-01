/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from "react";

export default class Button extends React.Component {
  render() {
    const { onClick, area } = this.props;
    return (
      <div>
        <button type="button" onClick={() => onClick(area)}>
          hello
        </button>
      </div>
    );
  }
}
