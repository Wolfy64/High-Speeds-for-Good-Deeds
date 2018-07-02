import React, { Component } from 'react';
import Wrapper from '../UI/Wrapper';
import { MyButton, MyWrapper, Typography } from './style';
import { goodDeedsData } from '../../config/goodDeedsData';

export default class extends Component {
  state = {
    gDeeds: ''
  };

  handleAddGoodDeed = goodDeed => {
    this.setState({ gDeeds: goodDeed });
  };

  render() {
    const goodDeeds = goodDeedsData.map(e => {
      return (
        <MyButton
          key={e.id}
          variant="contained"
          color="primary"
          onClick={() => this.handleAddGoodDeed(e.deed)}
        >
          {e.deed}
        </MyButton>
      );
    });

    return (
      <Wrapper>
        <Typography>
          <p>SUPERSTAR!</p>
          <p>What did you do?</p>
        </Typography>
        <MyWrapper>{goodDeeds}</MyWrapper>
      </Wrapper>
    );
  }
}
