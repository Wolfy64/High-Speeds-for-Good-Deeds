import React, { Component } from 'react';
import { counter } from '../config/firebase';
import {
  Board,
  Buttons,
  Counters,
  Introduction,
  Wrapper
} from '../Components/index';

class Layout extends Component {
  state = {
    counter: {
      goodDeeds: 0,
      moneyRaised: 0
    }
  };

  componentDidMount() {
    counter.on('value', snap => {
      this.setState({ counter: snap.val() });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Counters
            goodDeeds={this.state.counter.goodDeeds}
            moneyRaised={this.state.counter.moneyRaised}
          />
          <Introduction />
          <Buttons />
        </Wrapper>
        <Board />
      </React.Fragment>
    );
  }
}

export default Layout;
