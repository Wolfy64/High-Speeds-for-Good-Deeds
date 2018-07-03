import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    isAnonymous: false
  };

  componentDidMount() {
    this.setState({ message: this.props.message });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    const payload = this.handlePayload();
    console.log(payload);
    event.preventDefault();
  }

  handleToggleChange() {
    this.setState({ isAnonymous: !this.state.isAnonymous });
  }

  handlePayload() {
    const { firstName, lastName, email, message, isAnonymous } = this.state;
    const payload = {
      firstName,
      lastName,
      email,
      message
    };

    if (isAnonymous) {
      payload['firstName'] = 'Anonymous';
      payload['lastName'] = 'Anonymous';
    }
    return payload;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          First Name:
          <input
            required
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange.bind(this)}
          />
        </label>
        <label>
          Last Name:
          <input
            required
            name="lastName"
            type="text"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
        </label>
        <label>
          Email:
          <input
            required
            name="email"
            type="email"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
        </label>
        <label>
          Message:
          <textarea
            required
            name="message"
            value={this.state.message}
            onChange={this.handleChange.bind(this)}
          />
        </label>
        <label>
          Hide my name !:
          <input
            name="anonymous"
            type="checkbox"
            checked={this.state.isAnonymous}
            onChange={this.handleToggleChange.bind(this)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
