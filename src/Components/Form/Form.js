import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    value: '',
    firstName: '',
    lastName: '',
    message: '',
    isAnonymous: false
  };

  componentDidMount() {
    this.setState({ message: this.props.message });
    // console.log('[State]', this.state);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log('[Event]', event);
    console.log('[State]', this.state);
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleToggleChange() {
    const toggle = this.state;
    toggle.isAnonymous = !toggle.isAnonymous;
    this.setState({ toggle });
    // console.log('[State - Checkbox]', this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          First Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
        </label>
        <label>
          Message:
          <textarea
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
