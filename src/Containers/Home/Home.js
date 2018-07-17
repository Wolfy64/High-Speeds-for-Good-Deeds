import React, { Component } from 'react';
import { totalGoodDeeds } from '../../config';
import justgivingApi from '../../config/axios';
import {
  Board,
  Buttons,
  Counters,
  Introduction,
  Wrapper
} from '../../Components';

class Layout extends Component {
  state = {
    totalGoodDeeds: '',
    totalMoneyRaised: ''
  };

  componentDidMount() {
    totalGoodDeeds.on('value', snap => {
      this.setState({ totalGoodDeeds: snap.val() });
    });

    justgivingApi
      .get('fundraising/pages/ironmanon')
      .then(res => {
        const totalMoneyRaised = Math.round(res.data.totalRaisedOnline);
        this.setState({ totalMoneyRaised });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Counters
            goodDeeds={this.state.totalGoodDeeds}
            moneyRaised={this.state.totalMoneyRaised}
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
