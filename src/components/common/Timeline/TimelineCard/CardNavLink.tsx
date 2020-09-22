import React from 'react';
import styled from 'styled-components';

import { ReactComponent as ArrowIcon } from './angle-right-outline.svg';

const LinkWrapper = styled.div`
  height: 50px;
  width: 50px;
  position: relative;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: ${({ theme }) => theme.borders.card};
  border-radius: ${({ theme }) => theme.radii.infinite};

  @media(max-width: ${({ theme }) => theme.breakpoints[1]}) {
    display: none;
  }
`;

const Arrow = styled(ArrowIcon)`
  width: 40%;
  filter: drop-shadow(0px 1px 2px #777);
`;

const CardLinkCutout = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${({ theme }) => theme.colors.lightRed};
  border: ${({ theme }) => theme.borders.card};
  border-radius: ${({ theme }) => theme.radii.infinite};
`;

const CardNavLink = props => (
  <LinkWrapper>
    <Arrow />
  </LinkWrapper>
);

export default CardNavLink;
export { CardLinkCutout };
