import React from 'react';
import { Amount, Counter, Message, Name, Post, Text, Type } from './style';

export default props => (
  <Message moneyRaised={props.moneyRaised}>
    <Post>
      <Name>
        {props.firstName} {props.lastName}
      </Name>
      <Text>{props.text}</Text>
    </Post>
    <Counter>
      <Amount>
        {props.moneyRaised ? `${props.moneyRaised} £` : props.goodDeeds}
      </Amount>
      <Type>{props.moneyRaised ? 'Money Raised' : 'Good Deeds'}</Type>
    </Counter>
  </Message>
);
