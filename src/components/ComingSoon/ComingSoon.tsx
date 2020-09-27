import React from 'react';
import styled, { keyframes } from 'styled-components';

import { Text } from '~components/common/Text';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import BackgroundImage from '~assets/backgrounds/diagonal_striped_brick.png?size=2000';

const Link = styled.a`
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
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #b84747;
  background: url(${BackgroundImage.src});
  background-color: ${({ theme }) => theme.colors.reds[1]};
  background-blend-mode: luminosity;
  animation: ${scroll} 20s linear infinite;
`;

const ComingSoon = () => (
  <Header>
    <Text preset="title" align="center">
      Coming Soon
    </Text>
    <Text preset="subtitle" align="center">
      See progress on
      {' '}
      <Link href="https://github.com/danielnichols/danielnichols.github.io">Github</Link>
    </Text>
  </Header>
);

export default ComingSoon;
