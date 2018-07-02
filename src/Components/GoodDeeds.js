import React, { Component } from 'react';
import Wrapper from './Wrapper';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

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

const dataGoodDeeds = [
  { id: 0, deed: 'I gave up my seat on the tube / bus / train' },
  { id: 1, deed: 'I bought someone a coffee for no reason' },
  { id: 3, deed: 'I helped an elderly person with his or her shopping bags' },
  { id: 4, deed: 'I gave a stranger a compliment' },
  { id: 5, deed: 'I picked up some litter' },
  { id: 6, deed: 'I gave an old friend a phone call' },
  { id: 7, deed: 'I donated blood' },
  { id: 8, deed: 'I called my grandparent(s)' },
  { id: 9, deed: 'I donated clothes or books to a charity shop' }
];

export default class extends Component {
  state = {
    gDeeds: ''
  };

  handleAddGoodDeed = goodDeed => {
    this.setState({ gDeeds: goodDeed });
  };

  render() {
    const goodDeeds = dataGoodDeeds.map(e => {
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
