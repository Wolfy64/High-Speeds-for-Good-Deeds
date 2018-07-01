import React, { Component } from 'react';
import Wrapper from '../Components/Wrapper';
import Counters from '../Components/Counters/Counters';
import Introduction from '../Components/Introduction';
import Buttons from '../Components/Buttons';
import MessageBoard from '../Components/MessagesBoard/MessagesBoard';
import { counter } from '../config/firebase';

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

  handleCliked = () => {
    console.log('Was clicked');
  };

  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Counters
            goodDeeds={this.state.counter.goodDeeds}
            moneyRaised={this.state.counter.moneyRaised}
          />
          <Introduction />
          <Buttons cliked={this.handleCliked} />
        </Wrapper>
        <MessageBoard />
      </React.Fragment>
    );
  }
}

export default Layout;
