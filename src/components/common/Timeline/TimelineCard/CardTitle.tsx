import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  text-align: left;
`;

const CardTitle = props => (
  <TitleContainer>
    {props.children}
  </TitleContainer>
);

export default CardTitle;
