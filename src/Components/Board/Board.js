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

  getDonations(donations) {
    return donations.map(donation => ({
      _id: donation.id,
      date: this.getDate(donation.donationDate),
      displayName: donation.donorDisplayName,
      text: donation.message || 'No message',
      type: 'Money Raised',
      charity: this.getCharity(donation.charityId),
      moneyRaised: Math.round(donation.amount) || null
    }));
  }

  // Get date from string to milliseconds since Jan 1, 1970 GMT
  getDate = date => Number(date.match(/\d{13}/g));

  getCharity(charityId) {
    switch (charityId) {
      case 11251:
        return 'Make-A-Wish UK';
      case 11496:
        return 'Age UK';
      default:
        break;
    }
  }

  getMessages() {
    // Messages from "goodDeeds" on Firebase database
    const goodDeeds = firebaseApi
      .get('messages.json')
      .then(res => Object.values(res.data))
      .catch(err => console.log(err));

    // Messages from "ironmanon" on JustGiving API
    const ironmanon = justgivingApi
      .get('fundraising/pages/ironmanon/donations')
      .then(res => this.getDonations(res.data.donations))
      .catch(error => console.log(error));

    // Messages from "bb2b" on JustGiving API
    const bb2b = justgivingApi
      .get('fundraising/pages/bb2b/donations')
      .then(res => this.getDonations(res.data.donations))
      .catch(error => console.log(error));

    Promise.all([goodDeeds, ironmanon, bb2b]).then(res => {
      const messages = [...res[0], ...res[1], ...res[2]];
      // Sort message by date
      messages.sort((a, b) => b.date - a.date);
      this.setState({ messages });
    });
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
