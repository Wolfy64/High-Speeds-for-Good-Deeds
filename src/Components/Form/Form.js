import React, { Component } from 'react';
import { dbMessages } from '../../config';
import uuidv1 from 'uuid/v1'; // Generate unique id;

export default class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    text: '',
    goodDeeds: 0,
    moneyRaised: 0,
    type: '',
    isAnonymous: false
  };

  componentDidMount() {
    const { text, goodDeeds, type } = this.props;
    this.setState({ text, goodDeeds, type });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    const payload = this.handlePayload();
    dbMessages.push(payload);
    event.preventDefault();
  }

  handleToggleChange() {
    this.setState({ isAnonymous: !this.state.isAnonymous });
  }

  handlePayload() {
    const payload = this.state;

    if (payload.isAnonymous) {
      payload['firstName'] = 'Anonymous';
      payload['lastName'] = null;
    }

    payload['_id'] = uuidv1();
    delete payload.isAnonymous;
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
            name="text"
            value={this.state.text}
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
