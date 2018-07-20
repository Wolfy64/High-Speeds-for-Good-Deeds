import React from 'react';
import {
  Amount,
  Counter,
  Info,
  Message,
  Name,
  Post,
  Text,
  Type
} from './style';

export default props => (
  <Message moneyRaised={props.type === 'Money Raised'}>
    <Post>
      <Name>{props.displayName}</Name>
      <Info>
        On {new Date(props.date).toDateString()}
        {props.moneyRaised ? ` for ${props.charity}` : null}
      </Info>

      <Text>{props.text}</Text>
    </Post>
    <Counter>
      <Amount>
        {props.moneyRaised ? `£ ${props.moneyRaised}` : props.goodDeeds}
      </Amount>
      <Type>{props.type}</Type>
    </Counter>
  </Message>
);
