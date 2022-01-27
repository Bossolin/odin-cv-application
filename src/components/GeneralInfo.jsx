import React from "react";

export default function GeneralInfo() {
  return (
    <div>
      <form>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" id="name" required />
        </label>
        <label htmlFor="email">
          Email:
          <input type="text" name="email" id="email" required />
        </label>
        <label htmlFor="phone">
          Phone Number:
          <input type="text" name="phone" id="phone" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
