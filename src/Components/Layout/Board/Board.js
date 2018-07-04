import React, { Component } from 'react';
import { Message, Wrapper } from '../../index';
import { getMessages, images } from '../../../config';
import { Background, Image, Images, Messages, MyContainer } from './style';

export default class MessageBoard extends Component {
  state = {
    messages: [],
    images: []
  };

  componentDidMount() {
    this.setState({ images: [...images] });
    getMessages.on('value', snap => {
      if (snap.val()) this.setState({ messages: Object.values(snap.val()) });
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
            {this.state.messages && (
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
            )}
          </MyContainer>
        </Wrapper>
      </Background>
    );
  }
}
