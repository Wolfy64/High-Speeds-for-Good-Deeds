import React, { Component } from 'react';
import { Background, Container, Image, Images, Messages } from './style';
import justgivingApi from '../../config/axios';
import { Message, Wrapper } from '../index';
import { dbMessages, images } from '../../config';

export default class MessageBoard extends Component {
  state = {
    messages: [],
    images: []
  };

  getGoodDeedsMessages() {
    dbMessages.on('value', snap => {
      if (snap.val()) {
        const messages = [...this.state.messages, ...Object.values(snap.val())];
        this.setState({ messages });
      }
    });
  }

  getMoneyRaisedMessages() {
    justgivingApi
      .get('fundraising/pages/ironmanon/donations')
      .then(res => {
        let messages = res.data.donations.map(donation => {
          const message = {
            _id: donation.id,
            date: donation.donationDate,
            firstName: donation.donorDisplayName,
            text: donation.message || 'No message',
            type: 'Money Raised',
            moneyRaised: Math.round(donation.amount) || '?'
          };
          return message;
        });
        messages = [...this.state.messages, ...messages];
        this.setState({ messages });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.setState({ images: [...images] });
    this.getGoodDeedsMessages();
    this.getMoneyRaisedMessages();
  }

  render() {
    // console.log('render', this.state.messages);
    return (
      <Background>
        <Wrapper>
          <Container>
            <Images>
              {this.state.images.map(image => (
                <Image key={image.id} src={image.src} />
              ))}
            </Images>
            {this.state.messages && (
              <Messages>
                {this.state.messages.map(message => {
                  return (
                    <Message
                      key={message._id}
                      type={message.type}
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
          </Container>
        </Wrapper>
      </Background>
    );
  }
}
