import React from 'react';
import Swiper from 'swiper';
import { Image, Images } from './style';

export default props => {
  const image = props.images.map(image => (
    <Image key={image.id} className="swiper-slide">
      <img src={image.src} alt={image.title} onClick={props.clicked} />
    </Image>
  ));

  const carousel = (
    <React.Fragment>
      <div className="swiper-wrapper">{image}</div>
      <div className="swiper-button-prev" />
      <div className="swiper-button-next" />
    </React.Fragment>
  );

  new Swiper('.swiper-container', {
    direction: 'horizontal',
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
    <Images className="swiper-container">
      {props.carousel ? carousel : image}
    </Images>
  );
};
