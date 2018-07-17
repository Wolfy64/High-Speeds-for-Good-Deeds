import React, { Component } from 'react';
import { Background, Container, Image, Images, Messages } from './style';
import justgivingApi from '../../config/axios';
import { Message, Modal, Wrapper } from '../index';
import { dbMessages, images } from '../../config';
import Swiper from 'swiper/dist/js/swiper.js';

export default class MessageBoard extends Component {
  state = {
    messages: [],
    images: [],
    showCarousel: false,
    showModal: false,
    image: {}
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
            date: this.handleDate(donation.donationDate),
            displayName: donation.donorDisplayName,
            text: donation.message || 'No message',
            type: 'Money Raised',
            moneyRaised: Math.round(donation.amount) || null
          };
          return message;
        });
        messages = [...this.state.messages, ...messages];
        this.setState({ messages });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleDate(date) {
    const regex = /\d{13}/g;
    date = date.match(regex);
    date = parseInt(date, 10);
    return date;
  }

  sortMessagesByDate() {
    return this.state.messages.sort((a, b) => a - b);
  }

  handleToggleModal = () => this.setState({ showModal: !this.state.showModal });

  handleShowImage = event => {
    console.log(event.target);
    const image = {
      src: event.target.src,
      title: event.target.alt
    };
    this.handleToggleModal();
    this.setState({ image });
    console.log(this.state.image);
  };

  componentDidMount() {
    window.addEventListener(
      'resize',
      () => this.setState({ showCarousel: window.innerWidth < 700 }),
      false
    );
    this.setState({ images: [...images] });
    this.getGoodDeedsMessages();
    this.getMoneyRaisedMessages();
  }

  render() {
    const carousel = (
      <Images
        className="swiper-container"
        style={{ width: '100%', marginBottom: '10px' }}
      >
        <div className="swiper-wrapper">
          {this.state.images.map(image => (
            <Image
              key={image.id}
              className="swiper-slide"
              onClick={this.handleShowImage}
            >
              <img src={image.src} alt="" />
            </Image>
          ))}
        </div>
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </Images>
    );

    const images = (
      <Images>
        {this.state.images.map(image => (
          <Image key={image.id}>
            <img
              src={image.src}
              alt={image.title}
              onClick={this.handleShowImage}
            />
          </Image>
        ))}
      </Images>
    );

    const messages = (
      <Messages>
        {this.sortMessagesByDate().map(message => {
          return (
            <Message
              key={message._id}
              type={message.type}
              displayName={message.displayName}
              text={message.text}
              goodDeeds={message.goodDeeds}
              moneyRaised={message.moneyRaised}
            />
          );
        })}
      </Messages>
    );

    new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,
      autoplay: {
        delay: 3000
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
    return (
      <Background>
        <Modal show={this.state.showModal} onClick={this.handleToggleModal}>
          <img
            width="50%"
            height="auto"
            src={this.state.image.src}
            alt={this.state.image.title}
          />
          <p>{this.state.image.title}</p>
        </Modal>
        <Wrapper>
          <Container>
            {this.state.showCarousel ? carousel : images}
            {this.state.messages && messages}
          </Container>
        </Wrapper>
      </Background>
    );
  }
}
