import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  /* float: left; */
  /* max-width: 50%; */
`;

const CardContent = props => (
  <ContentContainer>
    {props.children}
  </ContentContainer>
);

export default CardContent;
