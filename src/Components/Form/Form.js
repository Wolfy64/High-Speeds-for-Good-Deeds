import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import uuidv1 from 'uuid/v1'; // Generate unique id;
import {
  Checkbox,
  Divider,
  FormControlLabel,
  TextField
} from '@material-ui/core';
import { MyButton, Wrapper } from './style';
import { dbMessages, dbCounter } from '../../config';

export default class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    text: '',
    goodDeeds: 0,
    moneyRaised: 0,
    type: '',
    isAnonymous: false,
    isSubmited: false
  };

  componentDidMount() {
    const { text, goodDeeds, type, email } = this.props;
    this.setState({ text, goodDeeds, type, email });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    const payload = this.handlePayload();
    dbMessages.push(payload);
    this.updateCounter();
    event.preventDefault();
    this.setState({ isSubmited: true });
  }

  handleToggleChange() {
    this.setState({ isAnonymous: !this.state.isAnonymous });
  }

  handlePayload() {
    const payload = { ...this.state };

    if (payload.isAnonymous) {
      payload.firstName = 'Anonymous';
      payload.lastName = null;
    }

    payload._id = uuidv1();
    delete payload.isAnonymous;

    return payload;
  }

  updateCounter() {
    dbCounter.transaction(counter => {
      counter.goodDeeds += 1;
      return counter;
    });
  }

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <TextField
            required
            name="firstName"
            type="text"
            label="First Name"
            value={this.state.firstName}
            onChange={this.handleChange.bind(this)}
            fullWidth
          />
          <TextField
            required
            name="lastName"
            type="text"
            label="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange.bind(this)}
            fullWidth
          />
          <TextField
            required
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange.bind(this)}
            fullWidth
          />
          <TextField
            required
            name="text"
            type="text"
            label="Message"
            multiline
            value={this.state.text}
            onChange={this.handleChange.bind(this)}
            fullWidth
          />
          <div style={{ textAlign: 'left' }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.isAnonymous}
                  onChange={this.handleToggleChange.bind(this)}
                  color="primary"
                />
              }
              label="Hide my name !"
            />
          </div>
          <Divider />

          <MyButton type="submit" variant="contained" color="primary">
            Submit
          </MyButton>
        </form>
        {this.state.isSubmited && <Redirect to="/" />}
      </Wrapper>
    );
  }
}
