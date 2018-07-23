import React, { Component } from 'react';
import { justgivingApi, firebaseApi, images } from '../../config';
import {
  Background,
  MyButton,
  Container,
  ContainerBtn,
  ContainerMsg
} from './style';
import next from './../../assets/next.svg';
import previous from './../../assets/previous.svg';
import loadingPrimary from './../../assets/loadingPrimary.svg';
import { Messages, Modal, Images, ImageZoomed, Wrapper } from '../index';

export default class MessageBoard extends Component {
  state = {
    messages: [],
    images: [],
    showCarousel: false,
    showModal: false,
    image: {},
    currentMessages: [],
    currentPage: 1,
    maxPage: 0,
    messagesPerPage: 10
  };

  componentDidMount() {
    this.getScreenSize();
    this.getImages();
    this.getMessages();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.doPagination();
    }
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
      this.doPagination();
    });
  }

  handleToggleModal = () => this.setState({ showModal: !this.state.showModal });

  handleShowImage = idImage => {
    const image = this.state.images.find(image => image.id === idImage);
    this.handleToggleModal();
    this.setState({ image });
  };

  handleNextPage = () => {
    if (this.state.currentPage < this.state.maxPage) {
      this.setState(prevState => ({
        currentPage: prevState.currentPage + 1
      }));
    }
  };

  handlePreviousPage = () => {
    if (this.state.currentPage > 1) {
      this.setState(prevState => ({
        currentPage: prevState.currentPage - 1
      }));
    }
  };

  doPagination() {
    const { messages, currentPage, messagesPerPage } = this.state;
    const indexLastMessage = currentPage * messagesPerPage;
    const indexFirstMessage = indexLastMessage - messagesPerPage;
    const currentMessages = messages.slice(indexFirstMessage, indexLastMessage);
    const maxPage = Math.ceil(messages.length / messagesPerPage);
    this.setState({ currentMessages, maxPage });
  }

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
            <ContainerMsg>
              {this.state.currentMessages.length === 0 ? (
                <img src={loadingPrimary} alt="loading" />
              ) : (
                <React.Fragment>
                  <Messages messages={this.state.currentMessages} />
                  <ContainerBtn>
                    <MyButton
                      variant="contained"
                      color="secondary"
                      onClick={this.handlePreviousPage}
                      disabled={this.state.currentPage === 1}
                    >
                      <img src={previous} alt="previous" />
                    </MyButton>
                    <MyButton
                      variant="contained"
                      color="secondary"
                      onClick={this.handleNextPage}
                      disabled={this.state.currentPage === this.state.maxPage}
                    >
                      <img src={next} alt="next" />
                    </MyButton>
                  </ContainerBtn>
                </React.Fragment>
              )}
            </ContainerMsg>
          </Container>
        </Wrapper>
      </Background>
    );
  }
}
