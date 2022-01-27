import React from "react";
import "../styles/Jobs.css";

export default function Jobs() {
  return (
    <div className="jobs">
      <h2>Jobs</h2>
      <form>
        <label htmlFor="companyName">
          Company Name:
          <input type="text" name="companyName" id="companyName" />
        </label>
        <label htmlFor="position">
          Position:
          <input type="text" name="position" id="position" />
        </label>
        <label htmlFor="tasks">
          Main tasks:
          <textarea name="tasks" id="tasks" />
        </label>
        <label htmlFor="jobStart">
          Job start:
          <input type="date" name="jobStart" id="jobStart" />
        </label>
        <label htmlFor="jobEnd">
          Job end:
          <input type="date" name="jobEnd" id="jobEnd" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
