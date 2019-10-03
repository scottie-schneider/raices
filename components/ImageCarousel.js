import React, { Component } from 'react'
import styled from 'styled-components'

import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import Image from './Image';
import "react-multi-carousel/lib/styles.css";
const StyledCarousel = styled(Carousel)`
  .image-item {
  padding: 10px;
  }
  .container {
    margin-top: 20px;
  }
  .container-with-dots {
    margin-top: 20px;
    padding-bottom: 10px;
  }
  .react-multi-carousel-dot-list {
    bottom: 0px !important;
  }
  #__next {
    overflow: scroll;
    margin-bottom: 40px;
  }
  .react-multi-carousel-dot button {
    border-color: grey !important;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  .first-carousel-container {
    margin-bottom: 50px;
  }
`
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
class ImageCarousel extends Component {
  render() {
    return (
      <StyledCarousel 
        responsive={responsive}
        ssr={true}
        showDots
      >
        <Image url={"https://media.gettyimages.com/photos/empty-sofa-at-home-picture-id1032277962?s=612x612"}/>
        <Image url={"https://s3-ap-southeast-1.amazonaws.com/static-pages-test/static-pages/img/full-house/4bhk/master-bedroom.jpg"}/>
        <Image url={"https://i.ytimg.com/vi/11aqUfxw15g/maxresdefault.jpg"}/>
        <Image url={"https://media.gettyimages.com/photos/modern-hipster-apartment-interior-picture-id842254818?s=612x612"}/>
      </StyledCarousel>
    )
  }
}

export default ImageCarousel;