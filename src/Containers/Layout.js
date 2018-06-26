import React, { Component } from 'react';
import Wrapper from '../Components/Wrapper';
import Counters from '../Components/Counters/Counters';
import Introduction from '../Components/Introduction';
import Buttons from '../Components/Buttons';
import MessageBoard from '../Components/MessagesBoard/MessagesBoard';

class Layout extends Component {
  state = {
    totalsGoodDeeds: 999,
    totatMoneyRaised: 1000
  };

  handleCliked = () => {
    console.log('Was clicked');
  };

  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Counters
            goodDeeds={this.state.totalsGoodDeeds}
            moneyRaised={this.state.totatMoneyRaised}
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
