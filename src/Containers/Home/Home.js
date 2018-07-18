import React, { Component } from 'react';
import { justgivingApi, totalGoodDeeds } from '../../config';
import {
  Board,
  Buttons,
  Counters,
  Introduction,
  Wrapper
} from '../../Components';

class Layout extends Component {
  state = {
    totalGoodDeeds: 0,
    totalMoneyRaised: 0
  };

  componentDidMount() {
    this.getGoodDeeds();
    this.getMoneyRaised();
  }

  getGoodDeeds() {
    totalGoodDeeds.on('value', snap =>
      this.setState({ totalGoodDeeds: snap.val() })
    );
  }

  getMoneyRaised() {
    // MoneyRaised from "ironmanon" page
    const ironmanon = justgivingApi
      .get('fundraising/pages/ironmanon')
      .then(res => res.data.totalRaisedOnline)
      .catch(error => console.log(error));

    // MoneyRaised from "bb2b" page
    const bb2b = justgivingApi
      .get('fundraising/pages/bb2b')
      .then(res => res.data.totalRaisedOnline)
      .catch(error => console.log(error));

    Promise.all([ironmanon, bb2b])
      .then(res => {
        const [ironmanon, bb2b] = res;
        this.setState({
          totalMoneyRaised: Math.round(Number(ironmanon) + Number(bb2b))
        });
      })
      .catch(err => console.log(err));
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
