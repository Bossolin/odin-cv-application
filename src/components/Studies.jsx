/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from "react";

function Studies({
  onChange,
  onSubmit,
  info: {
    desc: { schoolName, titleOfStudy, studyStart, studyEnd },
  },
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit("studies");
  };

  const onInfoChange = (e) => {
    onChange(e, "studies");
  };

  return (
    <div className="general">
      <form onSubmit={handleSubmit}>
        <label htmlFor="schoolName">
          School Name:
          <input
            type="text"
            name="schoolName"
            id="schoolName"
            value={schoolName}
            onChange={onInfoChange}
          />
        </label>
        <label htmlFor="titleOfStudy">
          Title of study:
          <input
            type="text"
            name="titleOfStudy"
            id="titleOfStudy"
            value={titleOfStudy}
            onChange={onInfoChange}
          />
        </label>
        <label htmlFor="studyStart">
          Study start:
          <input
            type="date"
            name="studyStart"
            id="studyStart"
            value={studyStart}
            onChange={onInfoChange}
          />
        </label>
        <label htmlFor="studyEnd">
          Study end:
          <input
            type="date"
            name="studyEnd"
            id="studyEnd"
            value={studyEnd}
            onChange={onInfoChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Studies;
