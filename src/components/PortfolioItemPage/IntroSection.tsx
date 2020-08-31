import React from 'react';
import styled from 'styled-components';

const BannerImage = styled.div`
  width: 100%;
  height: 250px;
  background-color: lightgrey;
  margin-bottom: -80px;
`;

const Title = styled.h1``;

const Attribution = styled.p`
  color: grey;
`;

const IntroSection = props => {
  const { page } = props;

  return (
    <div>
      <BannerImage>
        Image
      </BannerImage>
      <Title>
        {page.title}
      </Title>
      <Attribution>
        {page.content.attribution}
      </Attribution>
    </div>
  );
};

export default IntroSection;
