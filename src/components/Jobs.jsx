/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from "react";

function Jobs({
  onChange,
  onSubmit,
  info: {
    desc: { companyName, position, mainTasks, jobStart, jobEnd },
  },
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit("jobs");
  };

  const onInfoChange = (e) => {
    onChange(e, "jobs");
  };

  return (
    <div className="general">
      <form onSubmit={handleSubmit}>
        <label htmlFor="companyName">
          Company Name:
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={companyName}
            onChange={onInfoChange}
          />
        </label>
        <label htmlFor="position">
          Position:
          <input
            type="text"
            name="position"
            id="position"
            value={position}
            onChange={onInfoChange}
          />
        </label>
        <label htmlFor="mainTasks">
          Main tasks:
          <textarea
            name="mainTasks"
            id="mainTasks"
            value={mainTasks}
            onChange={onInfoChange}
          />
        </label>
        <label htmlFor="jobStart">
          Job start:
          <input
            type="date"
            name="jobStart"
            id="jobStart"
            value={jobStart}
            onChange={onInfoChange}
          />
        </label>
        <label htmlFor="jobEnd">
          Job end:
          <input
            type="date"
            name="jobEnd"
            id="jobEnd"
            value={jobEnd}
            onChange={onInfoChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Jobs;
