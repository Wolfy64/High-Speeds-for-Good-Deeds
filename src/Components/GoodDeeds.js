import React, { Component } from 'react';
import Wrapper from './UI/Wrapper';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { goodDeedsData } from '../config/goodDeedsData';

const Typography = styled.div`
  width: 100%;
  background-color: #fef9c7;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  color: #026670;
  text-align: center;
  font-size: 1.5rem;
`;

const MyWrapper = styled(Wrapper)`
  text-align: center;
`;

const MyButton = styled(Button)`
  min-width: 200px !important;
  width: 300px;
  height: 50px;
  margin: 20px !important;
`;

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
