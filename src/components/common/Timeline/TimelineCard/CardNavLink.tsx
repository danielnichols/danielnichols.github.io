import React from 'react';
import styled from 'styled-components';

import { ReactComponent as ArrowIcon } from './angle-right-solid.svg';

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Arrow = styled(ArrowIcon)`
  width: 70%;
  filter: drop-shadow(0px 1px 2px #777);
`;

const CardNavLink = props => (
  <LinkContainer>
    {/* {props.children} */}

    {/* <img src={ ArrowIcon } alt="Open card" /> */}
    <Arrow />
  </LinkContainer>
);

export default CardNavLink;
