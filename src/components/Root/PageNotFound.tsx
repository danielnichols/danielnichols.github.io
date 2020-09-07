import React from 'react';
import {
  Link as RouterLink,
} from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import BackgroundImage from '~assets/backgrounds/diagonal_striped_brick.png?size=2000';

const Link = styled(RouterLink)`
  color: #b84747;
  text-shadow: -1px -1px 0 #fee, 1px -1px 0 #fee, -1px 1px 0 #fee, 1px 1px 0 #fee;
`;

const scroll = keyframes`
from {
  background-position: 0 0;
}

to {
  background-position: -300px -300px;
}
`;

const Header = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #b84747;
  background: url(${BackgroundImage.src});
  background-color: ${({ theme }) => theme.colors.reds[1]};
  background-blend-mode: luminosity;
  animation: ${scroll} 20s linear infinite;
`;

const PageNotFound = () => (
  <Header>
    <h1>Uh Oh, Page not found</h1>
    <Link to="/">Return to homepage</Link>
  </Header>
);

export default PageNotFound;
