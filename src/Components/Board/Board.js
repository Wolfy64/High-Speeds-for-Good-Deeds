import React, { Component } from 'react';
import { justgivingApi, firebaseApi } from '../../config';
import { Background, Container } from './style';
import { Messages, Modal, Images, ImageZoomed, Wrapper } from '../index';
// import { dbMessages, images } from '../../config';

// import axios from 'axios';

export default class MessageBoard extends Component {
  state = {
    messages: [],
    images: [],
    showCarousel: false,
    showModal: false,
    image: {}
  };

  componentDidMount() {
    window.addEventListener(
      'resize',
      () => this.setState({ showCarousel: window.innerWidth < 700 }),
      false
    );
    this.getMessages();
    console.log('end');
  }

  getMessages() {
    let goodDeeds = firebaseApi
      .get('messages.json')
      .then(res => {
        console.log('[goodDeeds]');
        return Object.values(res.data);
      })
      .catch(err => console.log(err));

    // Messages from "ironmanon" on JustGiving API
    let ironmanon = justgivingApi
      .get('fundraising/pages/ironmanon/donations')
      .then(res => {
        console.log('[ironmanon]');
        let messages = res.data.donations.map(donation => {
          const message = {
            _id: donation.id,
            date: this.handleDate(donation.donationDate),
            displayName: donation.donorDisplayName,
            text: donation.message || 'No message',
            type: 'Money Raised',
            moneyRaised: Math.round(donation.amount) || null
          };
          return message;
        });
        return messages;
      })
      .catch(error => {
        console.log(error);
      });

    // Messages from "bb2b" on JustGiving API
    let bb2b = justgivingApi
      .get('fundraising/pages/bb2b/donations')
      .then(res => {
        console.log('[bb2b]');
        let messages = res.data.donations.map(donation => {
          const message = {
            _id: donation.id,
            date: this.handleDate(donation.donationDate),
            displayName: donation.donorDisplayName,
            text: donation.message || 'No message',
            type: 'Money Raised',
            moneyRaised: Math.round(donation.amount) || null
          };
          return message;
        });
        return messages;
      })
      .catch(error => {
        console.log(error);
      });

    Promise.all([goodDeeds, ironmanon, bb2b]).then(res => {
      const messages = [...res[0], ...res[1], ...res[2]];
      console.log('messages', messages);
      const sortMessage = messages.sort((a, b) => a - b);
      console.log('sortMessage', sortMessage);
      this.setState({ messages });
    });
  }

  handleDate(date) {
    const regex = /\d{13}/g;
    date = date.match(regex);
    date = parseInt(date, 10);
    return date;
  }

  sortMessagesByDate() {
    console.log('sortMessagesByDate', this.state.messages);
    const sortMessage = this.state.messages.sort((a, b) => a - b);
    console.log('sortMessage', sortMessage);
  }

  handleToggleModal = () => this.setState({ showModal: !this.state.showModal });

  handleShowImage = event => {
    const image = {
      src: event.target.src,
      title: event.target.alt
    };
    this.handleToggleModal();
    this.setState({ image });
  };

  render() {
    return (
      <Background>
        <Modal show={this.state.showModal} onClick={this.handleToggleModal}>
          <ImageZoomed>
            <img src={this.state.image.src} alt={this.state.image.title} />
            <p>{this.state.image.title}</p>
          </ImageZoomed>
        </Modal>
        <Wrapper>
          <Container>
            <Images
              carousel={this.state.showCarousel}
              images={this.state.images}
              clicked={this.handleShowImage}
            />
            <Messages messages={this.state.messages} />
          </Container>
        </Wrapper>
      </Background>
    );
  }
}
