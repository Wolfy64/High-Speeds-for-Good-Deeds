import React, { Component } from 'react';
import { dbCounter } from '../../config';
import {
  Board,
  Buttons,
  Counters,
  Introduction,
  Wrapper
} from '../../Components';

class Layout extends Component {
  state = {
    counter: {
      goodDeeds: 0,
      moneyRaised: 0
    }
  };

  componentDidMount() {
    dbCounter.on('value', snap => {
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
