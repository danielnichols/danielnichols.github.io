import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 30vh;
  overflow: hidden;

  @media(min-width: ${props => props.theme.breakpoints[1]}) {
    float: right;
    width: 60%;
    height: 100%;
  }
`;

const CardImage = props => (
  <picture>
    <Img
      src={ props.image.src }
      srcSet={ props.image.srcSet }
      alt="test"
      loading="lazy"
    />
  </picture>
);

export default CardImage;
