import React, { Component } from 'react';
import { Message, Wrapper } from '../../index';
import { database, images } from '../../../config';
import { Background, Image, Images, Messages, MyContainer } from './style';

// import { database } from '../../../config/firebase';
// import { images } from '../../../config/imageData';

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
