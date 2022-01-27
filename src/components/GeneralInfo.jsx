import React from "react";
import "../styles/GeneralInfo.css";

export default function GeneralInfo() {
  return (
    <div className="general">
      <h2>General Info</h2>
      <form>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" id="name" required />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" id="email" required />
        </label>
        <label htmlFor="phone">
          Phone Number:
          <input type="tel" name="phone" id="phone" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
