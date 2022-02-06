/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from "react";

function Button({ onClick, area }) {
  return (
    <div className="add-btn">
      <button type="button" onClick={() => onClick(area)}>
        Add {area}
      </button>
    </div>
  );
}

export default Button;
