import React from 'react';
import { Amount, Counter, Message, Name, Post, Text, Type } from './style';

export default props => (
  <Message moneyRaised={props.type === 'Money Raised'}>
    <Post>
      <Name>{props.displayName}</Name>
      <Text>{props.text}</Text>
    </Post>
    <Counter>
      <Amount>
        {props.moneyRaised ? `${props.moneyRaised} £` : props.goodDeeds}
      </Amount>
      <Type>{props.type}</Type>
    </Counter>
  </Message>
);
