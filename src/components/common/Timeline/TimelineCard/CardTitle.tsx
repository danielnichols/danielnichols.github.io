import React from 'react';
import styled from 'styled-components';

import { Text } from '~components/common/Text';

const TitleContainer = styled.div`
  position: absolute;
  padding-left: 6px;
  text-align: left;
  width: inherit;

  @media(max-width: ${props => props.theme.breakpoints[1]}) {
    position: initial;
  }
`;

const CardTitle = props => (
  <TitleContainer ref={ props.innerRef }>
    <Text preset="cardHeading">
      {props.children}
    </Text>
  </TitleContainer>
);

export default CardTitle;
