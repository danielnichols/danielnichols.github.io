import React from 'react';
import styled from 'styled-components';

const TitleContainer = styled.div`
  position: absolute;
  padding-left: 6px;
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
`;

const CardTitle = props => (
  <TitleContainer ref={ props.innerRef }>
    {props.children}
  </TitleContainer>
);

export default CardTitle;
