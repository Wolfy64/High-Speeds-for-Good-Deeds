import React, { Component } from 'react';

import Message from './Messages/Message';
import Wrapper from '../../UI/Wrapper';
import { Background, Messages, MyContainer } from './Messages/style';
import { Images, Image } from './style';

import { database } from '../../../config/firebase';
import { images } from '../../../config/imagesData';

export default class MessageBoard extends Component {
  state = {
    messages: [],
    images: []
  };

  componentDidMount() {
    this.setState({ images: [...images] });
    database.on('value', snap => {
      this.setState({ messages: snap.val() });
    });
  }

  render() {
    return (
      <Background>
        <Wrapper>
          <MyContainer>
            <Images>
              {this.state.images.map(image => (
                <Image key={image.id} src={image.src} />
              ))}
            </Images>
            <Messages>
              {this.state.messages.map((message, id) => {
                return (
                  <Message
                    key={id}
                    type={message.typeMessage}
                    firstName={message.firstName}
                    lastName={message.lastName}
                    text={message.text}
                    goodDeeds={message.goodDeeds}
                    moneyRaised={message.moneyRaised}
                  />
                );
              })}
            </Messages>
          </MyContainer>
        </Wrapper>
      </Background>
    );
  }
}
