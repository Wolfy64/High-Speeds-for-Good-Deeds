import React from 'react';
import { Messages } from './style';
import Message from './Message/Message';

export default props => {
  const messages = props.messages.map(message => (
    <Message
      key={message._id}
      type={message.type}
      displayName={message.displayName}
      text={message.text}
      goodDeeds={message.goodDeeds}
      moneyRaised={message.moneyRaised}
      date={message.date}
      charity={message.charity}
    />
  ));
  return <Messages>{messages}</Messages>;
};
