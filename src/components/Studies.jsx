import React from "react";

export default function Studies() {
  return (
    <div>
      <form>
        <label htmlFor="schoolName">
          School Name:
          <input type="text" name="schoolName" id="schoolName" />
        </label>
        <label htmlFor="title">
          Title of study:
          <input type="text" name="title" id="title" />
        </label>
        <label htmlFor="studyStart">
          Study start:
          <input type="date" name="studyStart" id="studyStart" />
        </label>
        <label htmlFor="studyEnd">
          Study end:
          <input type="date" name="studyEnd" id="studyEnd" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
