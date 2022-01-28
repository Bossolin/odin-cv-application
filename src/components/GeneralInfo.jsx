/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React, { Component } from "react";
import "../styles/GeneralInfo.css";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    const { info } = this.props;

    this.state = {
      name: info.name,
      email: info.email,
      phone: info.phone,
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onSubmit } = this.props;
    const general = this.state;

    onSubmit(general, "general");
  }

  onChange(e) {
    this.setState((prevState) => {
      const newState = prevState;

      newState[e.target.name] = e.target.value;

      return newState;
    });
  }

  render() {
    const { name, email, phone } = this.state;

    return (
      <div className="general">
        <h2>General Info</h2>
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
