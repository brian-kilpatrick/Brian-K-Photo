import React from 'react';
import './slider.scss';
import ReactSlick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderView = ({images: {sliderImg, sliderImgWide}}) => {
  const slides = sliderImg.images.map((data, i) => {
    const imgMobile = data.img.childImageSharp;
    const imgDesktop = sliderImgWide.images[i].img.childImageSharp;
    return (
        <picture key={Math.random()}>
          <source srcSet={imgMobile.fluid.srcSet} media="(max-width: 410px)"/>
          <source srcSet={imgDesktop.fluid.srcSet} media="(min-width: 411px)"/>
          <img className="slider-img" src={imgMobile.fluid.src} alt="Portfolio Image"/>
        </picture>
    )
  });
  return (
      <div className="slider-wrapper">
        <ReactSlick children={slides}
                    pauseOnHover={false}
                    className="home-slider"
                    autoplay={true}
                    dots={true}
                    infinite={true}/>
      </div>
  )
};

export default SliderView;