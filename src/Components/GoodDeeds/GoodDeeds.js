import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Wrapper from '../UI/Wrapper';
import { MyButton, MyWrapper, Typography } from './style';
import { goodDeedsData } from '../../config/goodDeedsData';

import GoodDeed from './GoodDeed/GoodDeed';

export default class extends Component {
  state = {
    gDeeds: ''
  };

  handleAddGoodDeed = (id, goodDeed) => {
    this.setState({ gDeeds: goodDeed });
  };

  render() {
    const goodDeeds = goodDeedsData.map(gd => {
      return (
        <Link
          key={gd.id}
          to={{
            pathname: `${this.props.match.url}/${gd.id}`,
            state: {
              goodDeed: gd.deed
            }
          }}
        >
          <MyButton
            variant="contained"
            color="primary"
            onClick={() => this.handleAddGoodDeed(gd.id, gd.deed)}
          >
            {gd.deed}
          </MyButton>
        </Link>
      );
    });

    return (
      <Wrapper>
        <Typography>
          <p>SUPERSTAR!</p>
          <p>What did you do?</p>
        </Typography>
        <Switch>
          <MyWrapper>
            <Route
              path={`${this.props.match.url}`}
              render={() => goodDeeds}
              exact
            />
            <Route path={`${this.props.match.url}/:id`} component={GoodDeed} />
          </MyWrapper>
        </Switch>
      </Wrapper>
    );
  }
}
