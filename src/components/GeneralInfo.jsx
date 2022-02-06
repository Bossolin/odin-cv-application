/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React from "react";

function GeneralInfo({
  onChange,
  onSubmit,
  info: {
    desc: { name, lastName, email, phone },
  },
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit("general");
  };

  const onInfoChange = (e) => {
    onChange(e, "general");
  };

  return (
    <div className="general">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={onInfoChange}
          />
          Info
        </label>
        <label htmlFor="lastName">
          Surname:
          <input
            type="text"
            name="lastName"
            id="lastName"
            required
            value={lastName}
            onChange={onInfoChange}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={onInfoChange}
          />
        </label>
        <label htmlFor="phone">
          Phone Number:
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            value={phone}
            onChange={onInfoChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GeneralInfo;
