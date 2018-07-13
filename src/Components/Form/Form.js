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
import { dbMessages, totalGoodDeeds } from '../../config';

export default class Form extends Component {
  state = {
    message: {
      displayName: '',
      date: new Date().getTime(),
      text: '',
      email: '',
      goodDeeds: 1,
      type: 'Good Deed'
    },
    isAnonymous: false,
    isSubmited: false
  };

  componentDidMount() {
    const { text, email, displayName } = this.props;
    this.setState({
      message: {
        ...this.state.message,
        text,
        email,
        displayName
      }
    });
  }

  handleChange(event) {
    this.setState({
      message: {
        ...this.state.message,
        ...{ [event.target.name]: event.target.value }
      }
    });
  }

  handleSubmit(event) {
    const message = this.handleMessage();
    dbMessages.push(message);
    this.updateGoodDeeds();
    event.preventDefault();
    this.setState({ isSubmited: true });
  }

  handleToggleChange() {
    this.setState({ isAnonymous: !this.state.isAnonymous });
  }

  handleMessage() {
    const message = { ...this.state.message };
    if (this.state.isAnonymous) {
      message.displayName = 'Anonymous';
    }
    message._id = uuidv1();
    this.setState({ message });
    return message;
  }

  updateGoodDeeds() {
    totalGoodDeeds.transaction(totalGoodDeeds => (totalGoodDeeds += 1));
  }

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <TextField
            required
            name="displayName"
            type="text"
            label="Full Name"
            value={this.state.message.displayName}
            onChange={this.handleChange.bind(this)}
            fullWidth
          />
          <TextField
            required
            name="email"
            type="email"
            label="Email"
            value={this.state.message.email}
            onChange={this.handleChange.bind(this)}
            fullWidth
          />
          <TextField
            required
            name="text"
            type="text"
            label="Message"
            multiline
            value={this.state.message.text}
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
