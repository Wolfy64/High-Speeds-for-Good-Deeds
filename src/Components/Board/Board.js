import React, { Component } from 'react';
import { justgivingApi, firebaseApi, images } from '../../config';
import { Background, Container } from './style';
import { Messages, Modal, Images, ImageZoomed, Wrapper } from '../index';

export default class MessageBoard extends Component {
  state = {
    messages: [],
    images: [],
    showCarousel: false,
    showModal: false,
    image: {}
  };

  componentDidMount() {
    this.getScreenSize();
    this.getImages();
    this.getMessages();
  }

  getScreenSize() {
    window.addEventListener(
      'resize',
      () => this.setState({ showCarousel: window.innerWidth < 700 }),
      false
    );
  }

  getImages() {
    this.setState({ images: [...images] });
  }

  getMessages() {
    let goodDeeds = firebaseApi
      .get('messages.json')
      .then(res => Object.values(res.data))
      .catch(err => console.log(err));

    // Messages from "ironmanon" on JustGiving API
    let ironmanon = justgivingApi
      .get('fundraising/pages/ironmanon/donations')
      .then(res => {
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
      messages.sort((a, b) => b.date - a.date); // Sort message by date
      this.setState({ messages });
    });
  }

  handleDate(date) {
    const regex = /\d{13}/g;
    date = date.match(regex);
    date = parseInt(date, 10);
    return date;
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
