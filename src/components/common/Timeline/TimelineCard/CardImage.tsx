import React from 'react';
import styled from 'styled-components';

const CardImageContainer = styled.picture`
  /* background: url(${({ backgroundURL }) => backgroundURL}); */
  float: right;
  width: 60%;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const CardImage = props => (
  <CardImageContainer>
    <Img src={ props.image } alt="test" loading="lazy" />
  </CardImageContainer>
);

export default CardImage;
