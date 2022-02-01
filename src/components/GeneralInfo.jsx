/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React, { Component } from "react";
import "../styles/GeneralInfo.css";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onSubmit } = this.props;

    onSubmit("general");
  }

  onChange(e) {
    const { onChange } = this.props;

    onChange(e, "general");
  }

  render() {
    const {
      info: {
        desc: { name, lastName, email, phone },
      },
    } = this.props;

    return (
      <div className="general">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              id="name"
              required
              value={name}
              onChange={this.onChange}
            />
          </label>
          <label htmlFor="lastName">
            Surname:
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              value={lastName}
              onChange={this.onChange}
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
              onChange={this.onChange}
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
              onChange={this.onChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
